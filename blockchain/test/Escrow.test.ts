import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";

describe('Escrow', () => { 
    const baseTestFunction = async () => {
        const [seller, buyer, lender, inspector] = await ethers.getSigners();

        const NFTAsset = await ethers.getContractFactory("RealEstate");
        const nftAsset = await NFTAsset.deploy(seller.address);
        const Escrow = await ethers.getContractFactory("Escrow");
        const escrow = await Escrow.deploy(
            await nftAsset.getAddress(), 
            seller.address, 
            lender.address, 
            inspector.address
        )
            await nftAsset.safeMint(seller.address, "My new Home");
            await nftAsset.approve(await escrow.getAddress(), 0);
        return {nftAsset, escrow, seller, buyer, inspector, lender};
    }
    describe('Deployment', () => { 
        it("Should mint nft assets and list", async () => {
            const {escrow, nftAsset, seller, buyer} = await loadFixture (baseTestFunction); 
            await escrow.list(0,buyer.address, 20, 10);
            expect(await nftAsset.ownerOf(0)).to.equal(await escrow.getAddress());

         })

     })

     describe('EarnestDeposit', () => { 
        it("Should deposite earnest", async () => {
            const {escrow, nftAsset, seller, buyer} = await loadFixture (baseTestFunction); 
            await escrow.list(0,buyer.address, 20, 10);
            // await escrow.earnestDeposit(0)  
         })
         it("Should fail when called without approval", async () => {
            const {escrow, nftAsset, seller, buyer} = await loadFixture (baseTestFunction); 
         
         })

     })
     describe('EarnestDeposit', () => { 
        it("Should mint nft assets and list", async () => {
            const {escrow, nftAsset, seller, buyer} = await loadFixture (baseTestFunction); 
            await nftAsset.approve(await escrow.getAddress(), 0);

            
         })
         it("Should fail when called without approval", async () => {
            const {escrow, nftAsset, seller, buyer} = await loadFixture (baseTestFunction); 
         
         })

     })
 })