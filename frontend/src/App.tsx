import React from 'react'
import { getDefaultWallets, getDefaultConfig, RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import { createConfig, WagmiConfig, WagmiProvider } from 'wagmi';
import { sapphire, sapphireTestnet, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import { configureChains } from 'wagmi/core';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


// import { getDefaultConfig } from '@rainbow-me/rainbowkit';
// const config = getDefaultConfig({
//   appName: 'My RainbowKit App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

// const queryClient = new QueryClient();
// const App = () => {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider>
//           {/* Your App */}
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// };

// const { chains, publicClient } = configureChains(
//   [sapphire, sapphireTestnet],
//   [publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: 'My CrossChain Message App',
//   projectId: 'YOUR_PROJECT_ID', // Get this from WalletConnect Cloud
//   chains
// });

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient
// });

const App = () => {
  return (
    <>
      <div
      >
        <ConnectButton />
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="mb-6 h-100 w-100">
          <h1 className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Let's Send a CrossChain Message
          </h1>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </>
  )
}

export default App
