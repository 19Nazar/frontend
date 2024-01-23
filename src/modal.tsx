import React from 'react';
import Modal from 'react-modal';
import "./modal.css"
interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className='header'>
          <h2>Settings group</h2>
        </div>
        <div >
          <h3>Set custom attributes for your token, indicating it's properties. These will become filters on your contract page.</h3>
        </div>
        <div>
          <form>
            <input className='inputt' placeholder='Name'></input>
            <input className='inputt' placeholder='Value'></input>
          </form>
          <form>
            <input className='inputt' placeholder='Name'></input>
            <input className='inputt' placeholder='Value'></input>
          </form>
          <form>
            <input className='inputt' placeholder='Name'></input>
            <input className='inputt' placeholder='Value'></input>
          </form>
        </div>
        <div className='close_button_modeule'>
          <button onClick={onClose}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;