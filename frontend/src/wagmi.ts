import { getDefaultConfig, Chain } from '@rainbow-me/rainbowkit';
import { arbitrumSepolia, sapphireTestnet } from 'wagmi/chains';

// const OasisSapphireTestnet = {
//     id: 43_114,
//     name: 'Avalanche',
//     iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
//     iconBackground: '#fff',
//     nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
//     rpcUrls: {
//       default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
//     },
//     blockExplorers: {
//       default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
//     },
//     contracts: {
//       multicall3: {
//         address: '0xca11bde05977b3631167028862be2a173976ca11',
//         blockCreated: 11_907_934,
//       },
//     },
//   } as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'oasis-router',
  projectId: 'a0ed69f908aeabb71c9e9ae5fde2645e',
  chains: [arbitrumSepolia, sapphireTestnet],
});
