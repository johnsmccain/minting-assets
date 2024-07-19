import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {expect} from "chai";
import { ethers } from "hardhat";
describe("RealEstate", async() => {
    const genesisTest = async () => {
        
        // get address from hardhat
        const [seller, buyer, inspector, appriser, lender, addr1] = await ethers.getSigners();
        
        // get contract factory and deploy
        const RealEstate = await ethers.getContractFactory("RealEstate");
        const realEstate = await RealEstate.deploy(seller.address);

        // mint 3 Assets
        await realEstate.safeMint(seller.address, "Hello");
        await realEstate.safeMint(seller.address, "Hello1");
        

        return {realEstate, seller, buyer, inspector, appriser, lender, addr1};

    }

    describe("Deployment", async () => {
        // it("Should fail when minting with different address", async () => {
        //     const {realEstate, addr1} = await loadFixture(genesisTest);
        //     expect(await realEstate.connect(addr1).safeMint(addr1, "Hello2")).to.be.rejectedWith(
        //         ""
        //     );
        // })
        it("Should confirm ownership", async () => {
            const {realEstate, seller} = await loadFixture(genesisTest);

            expect(await realEstate.ownerOf(0)).to.equal(seller.address);
            expect(await realEstate.ownerOf(1)).to.equal(seller.address);
        })
        it("Should return corresponding value for each token", async () => {
            const {realEstate} = await loadFixture(genesisTest);

            expect(await realEstate.tokenURI(0)).to.equal("Hello");
            expect(await realEstate.tokenURI(1)).to.equal("Hello1");

        })

    })
})