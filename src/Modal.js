import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModelOpen, closeModal, correct, questions } = useGlobalContext(); 
  
    console.log(isModelOpen); 
  
  return (
    <div
      className={`${
        isModelOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>Congrats!</h2>
        <p>
          You answered{' '}
          {((correct / questions.length) * 100).toFixed(0)}
          % of questions correctly
        </p>
        <button className='close-btn' onClick={closeModal}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
