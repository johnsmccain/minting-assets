import {artifacts, ethers} from "hardhat"


export async function main(){
    const [seller, buyer, lender, inspector] = await ethers.getSigners();
    
    const RealEstate = await ethers.getContractFactory("RealEstate");
    const realEstate =  await RealEstate.deploy(seller.address);
    const realEstateAddress = await realEstate.getAddress();

    
    const Escrow = await ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy(
        realEstateAddress, 
        seller.address, 
        lender.address, 
        inspector.address
    );
    const escrowAddress = await escrow.getAddress();
    
    saveFrontendFiles("RealEstate", realEstateAddress);
    saveFrontendFiles("Escrow", escrowAddress);


}

 async function saveFrontendFiles(name:string, contractAddress:string){
    const fs = require("fs");
    const contractdDir = `${__dirname}/../../../client/contractsData`;
   
    if (!fs.existsSync(contractdDir)){
        fs.mkdirSync(contractdDir);
    }
    // console.log(`${name} :${contractAddress}`)
    fs.writeFileSync(`${contractdDir}/${name}-address.json`,JSON.stringify({address: `${contractAddress}`}, undefined, 2));

    const contractArtifact = artifacts.readArtifactSync(name);
    // console.log(contractArtifact)

    fs.writeFileSync(`${contractdDir}/${name}.json`,JSON.stringify(contractArtifact, null, 2));
}

