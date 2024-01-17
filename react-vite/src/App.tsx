import { MintbaseWalletContextProvider } from "@mintbase-js/react";
import "./App.css";
import { NearWalletConnector } from "./NearWalletConnector";
import "./shims";

function App() {

  const MintbaseWalletSetup = {
    contractAddress: "hellovirtualworld.mintspace2.testnet",
    network: "testnet",
    callbackUrl: "http://localhost:3000",
  };

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
