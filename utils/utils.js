import * as anchor from "@project-serum/anchor";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { STABLE_POOL_IDL, STABLE_POOL_POROGRAM_ID } from "./const";

export function getProgramInstance(connection, wallet) {
  if (!wallet.publicKey) throw new WalletNotConnectedError();

  const provider = new anchor.Provider(
    connection,
    wallet,
    anchor.Provider.defaultOptions()
  );
  const idl = STABLE_POOL_IDL;
  const ProgramID = STABLE_POOL_POROGRAM_ID;
  const program = new anchor.Program(idl, ProgramID, provider);
  return program;
}
