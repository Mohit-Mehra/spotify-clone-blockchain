import { useEffect, useState } from "react";
import { getProgramInstance } from "../utils/utils";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { SOLANA_HOST } from "../utils/const";
import { useWallet } from "@solana/wallet-adapter-react";

const anchor = require("@project-serum/anchor");

const { web3 } = anchor;
const { SystemProgram } = web3;
const utf8 = anchor.utils.bytes.utf8;

const defaultAccounts = {
  tokenPorgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
};

const styles = {
    main: `w-screen h-screen bg-white text-black flex flex-col justify-center items-center`,
    button: `bg-[#22C55E] m-3 text-white font-bold py-4 px-7 rounded-full hover:opacity-70 transition`,
    text: `text-4xl mb-10`,
    buttons: `flex items-center`
};

const Payment = () => {
  const wallet = useWallet();
  const connection = new anchor.web3.Connection(SOLANA_HOST);
  const program = getProgramInstance(connection, wallet);
  const [payers, setPayers] = useState([]);
  const [isPaid, setPaid] = useState(false);

  return (
    <div className={styles.main}>
      <p className={styles.text}>Make Payment</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Pay 0.1 Sol</button>
        <button className={styles.button}>Verify Payment</button>
      </div>
    </div>
  );
};

export default Payment;
