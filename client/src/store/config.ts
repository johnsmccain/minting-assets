import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, hardhat, mainnet, optimism, polygon, sepolia } from "viem/chains";
import EscrowABI from "../../contractsData/Escrow.json"
import RealEstateABI from "../../contractsData/RealEstate.json";
import EscrowAddress from  "../../contractsData/Escrow-address.json"
import RealEstateAddress from "../../contractsData/RealEstate-address.json"
import { http } from "viem";
import { createConfig } from "wagmi";
export  const config: any =  getDefaultConfig({
    appName: 'Dillow',
    projectId: process.env.WAGMI_KEY as string,
    chains: [mainnet, polygon, optimism, arbitrum, sepolia, hardhat],
    ssr: false, // If your dApp uses server side rendering (SSR)
  });



export const escrowConfig = {
  abi: EscrowABI.abi,
  address: EscrowAddress.address
} as const
export const realEstateConfig = {
  abi: RealEstateABI.abi,
  address: RealEstateAddress.address
}

export const configx = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})