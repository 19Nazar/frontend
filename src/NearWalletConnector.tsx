import { useMbWallet } from "@mintbase-js/react";
import React, { useState } from 'react';
import CustomModal from './modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
    // logic for create group
    setIsGroupCreated(true);
  };


  return (
    <div>
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
        {isConnected && (
          <div>
            <button className="auth_bottom" onClick={handleSignout}>
              Disconnect {activeAccountId}
            </button>
          </div>
        )}
      </div>
      <div className="line"></div>
      <div className="Tabs">
      {isConnected && isGroupCreated && (
          <>
            <Tabs>
              <TabList>
                <Tab>Add users to group</Tab>
                <Tab>Set permission to the user</Tab>
                <Tab>Delete user from group</Tab>
                <Tab>Create event</Tab>
                <Tab>Read event</Tab>
                <Tab>View groups</Tab>
              </TabList>
              <div>
                <TabPanel>
                  <div className="start_module">
                      <h1>You can add users to the group</h1>
                  </div>
                  <div className="content_TabPanel">
                    <div>
                      <h3>Insert user name:</h3>
                    </div>
                    <form>
                      <input className="inputt" placeholder="Name" />
                    </form>
                    <button className="button_in_TabPanel">Add</button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="start_module">
                      <h1>You can set permission to the user</h1>
                  </div>
                  <div className="content_TabPanel">
                    <div>
                      <h3>Insert user name:</h3>
                    </div>
                    <form>
                      <input className="inputt" placeholder="Name" />
                    </form>
                    <div>
                      <h3>Set permission:</h3>
                    </div>
                    <form>
                      <input className="inputt" placeholder="Permission" />
                    </form>
                    <button className="button_in_TabPanel">Add</button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="start_module">
                      <h1>You can delete user from group</h1>
                  </div>
                  <div className="content_TabPanel">
                    <div>
                      <h3>Insert user name:</h3>
                    </div>
                    <form>
                      <input className="inputt" placeholder="Name" />
                    </form>
                    <button className="button_in_TabPanel">Delete</button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="start_module">
                      <h1>You can create event</h1>
                  </div>
                  <div className="content_TabPanel">
                    <div>
                      <h3>Name of event:</h3>
                    </div>
                    <form>
                      <input className="inputt" placeholder="Name" />
                    </form>
                    <button className="button_in_TabPanel">Create</button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="start_module">
                      <h1>You can read event</h1>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="start_module">
                    <h1>You can view groups</h1>
                  </div>
                </TabPanel>
              </div>

            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};