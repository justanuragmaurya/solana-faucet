import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Toaster } from "@/components/ui/sonner"
import Airdrop from './components/Airdrop';
function App() {
  const endpoint=import.meta.env.VITE_PUBLIC_RPC_URL
  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <Airdrop/>
          <Toaster />
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}
 
export default App