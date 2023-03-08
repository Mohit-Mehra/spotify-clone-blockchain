import { SOLANA_HOST } from "../utils/const"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { useMemo} from "react"

const WalletConnectionProvider = ({children}) => {

    const endpoint = useMemo(()=> SOLANA_HOST,[])

    const wallets = useMemo(()=>[new PhantomWalletAdapter()],[])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnet>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletConnectionProvider