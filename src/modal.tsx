import React from 'react';
import Modal from 'react-modal';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Модальное окно</h2>
      <button onClick={onClose}>Закрыть</button>
    </Modal>
  );
};

export default CustomModal;