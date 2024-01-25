import { useMbWallet } from "@mintbase-js/react";
import React, { useState } from 'react';
import CustomModal from './modal';

export const NearWalletConnector = () => {
  const { isConnected, selector, connect , activeAccountId } = useMbWallet();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGroupCreated, setIsGroupCreated] = useState(false);

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

  const handleGroupCreate = () => {
    // Логика создания группы
    setIsGroupCreated(true);
  };

  return (
    <div className="Header">
      {!isConnected && (
        <div>
          <button id="do_auth_botton" className="auth_bottom" onClick={handleSignIn}>
            Connect to NEAR WALLET
          </button>
        </div>
      )}
      {isConnected && !isGroupCreated && (
        <div>
          <button onClick={openModal}>Create Group</button>
          <CustomModal isOpen={isModalOpen} onClose={closeModal} onGroupCreate={handleGroupCreate} />
        </div>
      )}
      {isConnected && isGroupCreated && (
        <>
          <div>
            <button>Add users to group</button>
          </div>
          <div>
            <button>Set permission to the user</button>
          </div>
          <div>
            <button>Delete User from group</button>
          </div>
          <div>
            <button>Create event</button>
          </div>
          <div>
            <button>Read event</button>
          </div>
          <div>
            <button>View groups</button>
          </div>
        </>
      )}
      {isConnected && (
        <div>
          <button className="auth_bottom" onClick={handleSignout}>
            Disconnect {activeAccountId}
          </button>
        </div>
      )}
    </div>
  );
};