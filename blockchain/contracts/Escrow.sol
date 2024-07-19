// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.19;
interface IERC721 {
    function transferFrom(address _from, address _to, uint256 _id) external;
}

contract Escrow {

    address private  nft;
    address private  seller;
    address private lender;
    address private inspector;
  

    constructor (
        address _nft, 
        address _seller, 
        address _lender, 
        address _inspector
    ) {
        nft = _nft;
        seller = _seller;
        lender = _lender;
        inspector = _inspector;
    }


    mapping(uint256 => bool) private isListed;
    mapping(uint256 => address) private buyer;
    mapping(uint256 => uint256) public escrowAmout;
    mapping(uint256 => uint256) private purchasePrice;
    mapping(uint256 => bool) private inspectionPassed;
    mapping(uint256 => mapping(address => bool)) private approval;


    modifier onlySeller (){
        require(seller == msg.sender, "Only seller is permitted to perform this action");
        _;
    }

    modifier onlyBuyer (uint256 _nftId){
        require(buyer[_nftId] == msg.sender,"Only buyer is permitted to perform this action");
        _;
    }

    modifier onlyLender (){
        require(lender == msg.sender, "Only lender is permitted to perform this action");
        _;
    }
     modifier onlyInspector(uint256 __nftId){
        require(inspector == msg.sender, "Only inspector is permitted to perform this action");
        _;
    }
    event ReceivedLog(address seller, uint256 value);
    event ListLog(uint256 _assetId, address _buyer, uint256 _price, uint256 _escrowAmount);
    event FinalizeLog(uint256 _assetId, address _buyer, uint256 _price);

    function list(
        uint256 _nftId, 
        address _buyer, 
        uint256 _price, 
        uint256 _escrowAmount 
    )  public onlySeller{
        // require();
        IERC721(nft).transferFrom(
            msg.sender, 
            address(this), 
            _nftId
        );
        isListed[_nftId] = true;
        buyer[_nftId] = _buyer;
        escrowAmout[_nftId] = _escrowAmount;
        purchasePrice[_nftId] = _price ;
        emit ListLog(_nftId,  _buyer,  _price, _escrowAmount);
    }

    function earnestDeposit(uint256 _nftId) public payable onlyBuyer(_nftId) {
        require(msg.value >= escrowAmout[_nftId], "No enough funds");
    }

    function approveSale(uint256 _nftId) public {
        approval[_nftId][msg.sender] = true;
    }

    function propertyInspection(uint256 _nftId, bool isInspected) public onlyInspector(_nftId){  
        inspectionPassed[_nftId] = isInspected;
    }

    function finalizeSales(uint256 _nftId) public {
        require(isListed[_nftId], "This asset is not listed");
        require(inspectionPassed[_nftId], "This asset has not been inspected");
        require(approval[_nftId][buyer[_nftId]], "Inspection is required");
        require(approval[_nftId][seller], "Seller approval is required");
        require(approval[_nftId][lender], "Lender approval is required");
        require(address(this).balance >= purchasePrice[_nftId],"Insufficient funds");
        isListed[_nftId] = false;

        (bool success,) = payable(seller).call{value: address(this).balance}("");

        require(success, "Transaction Failed");

        IERC721(nft).transferFrom(address(this), buyer[_nftId], _nftId);
        emit FinalizeLog(_nftId, buyer[_nftId], purchasePrice[_nftId]);
    }

    receive() external payable { 
        emit ReceivedLog(msg.sender, msg.value);
    }

    fallback() external payable {
        emit ReceivedLog(msg.sender, msg.value);
     }

    function cancelSale(uint256 _nftId) public{
        if(inspectionPassed[_nftId]){
            payable(buyer[_nftId]).transfer(address(this).balance);
        }else{
            payable(seller).transfer(address(this).balance);
        }
    }

     function getBalance () public view returns  (uint256){
        return address(this).balance;
     }

}

//  seller
// 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
// lender
// 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
// inspector
// 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db

// 0xdD870fA1b7C4700F2BD7f44238821C26f7392148

// buyer
// 0xdD870fA1b7C4700F2BD7f44238821C26f7392148