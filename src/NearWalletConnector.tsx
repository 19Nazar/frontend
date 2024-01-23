import { useMbWallet } from "@mintbase-js/react";
import React, { useState } from 'react';
import CustomModal from './modal';

export const NearWalletConnector = () => {
  const { isConnected, selector, connect , activeAccountId } = useMbWallet();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignout = async () => {
    const wallet = await selector.wallet();
    return wallet.signOut();
  };

  const handleSignIn = async () => {
    return connect();
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  if (!isConnected) {
    return (
      <div className="Header">
        <div></div>
        <div></div>
        <div>
          <button  id="do_auth_botton" className="auth_bottom" onClick={handleSignIn}>Connect to NEAR WALLET</button>
        </div>
      </div>
    )
  }

  return (
    <div className="Header">
      <div>
        <button onClick={openModal}>Create Group</button>
        <CustomModal isOpen={isModalOpen} onClose={closeModal} />      </div>
      <div>
        <button>View groups</button>
      </div>
      <div>
        <button className="auth_bottom" onClick={handleSignout}> Disconnect {activeAccountId}</button>        
      </div>
    </div>
  );
};
