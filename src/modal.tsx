import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal.css';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  const [formCount, setFormCount] = useState(1);
  const [groupName, setGroupName] = useState('');

  const handleAddForm = () => {
    setFormCount((prevCount) => prevCount + 1);
  };

  const handleGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleCreate = () => {
    // Ваша логика для обработки нажатия кнопки Create
    console.log('Creating group:', groupName);
    // Закрыть модальное окно
    onClose();
  };

  const customStyles = {
    content: {
      width: '60%',
      height: '60%',
      margin: 'auto',
    },
  };

  return (
    <div className="main">
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <div className="header">
          <h2>Settings group</h2>
        </div>
        <div>
          <h3>Group name</h3>
          <form>
            <input
              className="inputt"
              placeholder="Name"
              value={groupName}
              onChange={handleGroupNameChange}
            />
          </form>
        </div>
        <div>
          <h3>
            Set custom attributes for your token, indicating it's properties.
            These will become filters on your contract page.
          </h3>
        </div>
        <div>
          {[...Array(formCount)].map((_, index) => (
            <form key={index}>
              <input className="inputt" placeholder="Name" />
              <input className="inputt" placeholder="Value" />
            </form>
          ))}
        </div>
        <div className="add-form-button">
          <button onClick={handleAddForm}>+</button>
        </div>
        <div className="buttons-container">
          <button className="create-button" onClick={handleCreate} disabled={!groupName.trim()}>
            Create
          </button>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;