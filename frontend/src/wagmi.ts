import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, oasisTestnet, sapphireTestnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'oasis-router',
  projectId: 'a0ed69f908aeabb71c9e9ae5fde2645e',
  chains: [arbitrum, oasisTestnet, sapphireTestnet],
});
