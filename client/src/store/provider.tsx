import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { config } from './config';
// console.log(process.env.WAGMI_KEY as string)
// const config = getDefaultConfig({
//   appName: 'Dillow',
//   projectId: process.env.WAGMI_KEY as string,
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: false, // If your dApp uses server side rendering (SSR)
// });

const queryClient = new  QueryClient();
export const Provider = ({children}: any) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};