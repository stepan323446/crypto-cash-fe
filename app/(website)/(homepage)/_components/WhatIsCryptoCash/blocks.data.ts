import walletImage from '@/assets/homepage/wallet.png';
import secureImage from '@/assets/homepage/secure-box.png';
import interfaceImage from '@/assets/homepage/interface.png';

interface InfoBlock {
  title: string;
  description: string;
  image: string;
}

export const infoBlocks: InfoBlock[] = [
  {
    title: 'All-in-One Wallet',
    description: 'Send, receive, and manage TON, USDT, BTC, and other tokens in one place.',
    image: walletImage.src
  },
  {
    title: 'Secure & Reliable',
    description: 'Custodial storage with encrypted keys, 2FA support, and safe handling of seed phrases.',
    image: secureImage.src
  },
  {
    title: 'User-Friendly Interface',
    description: 'Intuitive design for beginners and advanced users, inspired by popular wallets.',
    image: interfaceImage.src
  }
]