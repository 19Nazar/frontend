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
      <div>
          <MintbaseWalletContextProvider {...MintbaseWalletSetup}>
                <NearWalletConnector />
          </MintbaseWalletContextProvider>
      </div>
      <div className="line"></div>
    </div>
    );
}

export default App;
