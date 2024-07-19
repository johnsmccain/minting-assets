import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, hardhat, mainnet, optimism, polygon, sepolia } from "viem/chains";


export  const config: any =  getDefaultConfig({
    appName: 'Dillow',
    projectId: process.env.WAGMI_KEY as string,
    chains: [mainnet, polygon, optimism, arbitrum, sepolia, hardhat],
    ssr: false, // If your dApp uses server side rendering (SSR)
  });