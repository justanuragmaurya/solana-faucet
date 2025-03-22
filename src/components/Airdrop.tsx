import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

function Airdrop() {
  const walletHook = useWallet();
  const [wallet, setWallet] = useState<any>("");
  const { connection } = useConnection();
  const [amount, setAmount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const w = walletHook.publicKey;
    setWallet(w);
  }, [walletHook]);

  async function airdrop() {
    setLoading(true);
    if (walletHook.publicKey) {
      try {
        const signature = await connection.requestAirdrop(
          walletHook.publicKey,
          amount * LAMPORTS_PER_SOL
        );
        console.log("Airdrop requested:", signature);
        toast("Air drop successful");
        setLoading(false);
        return;
      } catch (error: any) {
        toast("Airdrop failed:", error);
        setLoading(false);
        return;
      }
    } else {
      toast("Please select a wallet or add you wallet address");
      setLoading(false);
      return;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-4 sm:p-6 md:p-8 flex items-center justify-center text-white font-mono">
      <Card className="w-full max-w-md bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader className="border-b border-slate-700 pb-4">
          <CardTitle className="flex-col items-center gap-2 text-3xl text-white  font-black">
            Sol देवता 🙇🙏
            <h1 className="text-xs font-normal font-mono text-white/80">
              get the blessing from Sol Devta itself !
            </h1>
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-4">
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="wallet"
              className="text-sm font-medium text-slate-300"
            >
              Wallet Address
            </label>
            <Input
              id="wallet"
              type="text"
              className="bg-slate-900/50 border-slate-700 text-slate-200 font-mono text-xs sm:text-sm"
              value={wallet?.toString() || ""}
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-slate-300"
            >
              Amount (SOL)
            </label>
            <Input
              id="amount"
              type="number"
              className="bg-slate-900/50 border-slate-700 text-slate-200"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <Button
            onClick={airdrop}
            disabled={loading}
            className="w-full bg-[#5f0ccc] hover:bg-[#5f0ccc]/70 text-white text-md hover:scale-105"
            size="lg"
          >
            {loading ? (
              <div className="flex gap-3 items-center">
                Loading <Loader2 className="animate-spin" />
              </div>
            ) : (
              <span>
                <span className="text-xl">🙏</span> Pray for Airdrop
              </span>
            )}
          </Button>
          <h1 className="text-xs text-gray-400 text-center">
            you dont get real sol , its only on dev net you dumb piece of shit
          </h1>
        </CardContent>
      </Card>
      <h1 className="text-center absolute bottom-4 text-sm">
        made with ❤️ by{" "}
        <a
          href="https://x.com/anuragmaurya_x"
          target="__blank"
          className="text-blue-500"
        >
          anurag
        </a>{" "}
        <br />        <a
          href="https://github.com/justanuragmaurya/solana-faucet"
          target="__blank"
          className="text-blue-500"
        >
          github 
        </a>{" "}(for this project)
      </h1>{" "}
    </div>
  );
}
export default Airdrop;
