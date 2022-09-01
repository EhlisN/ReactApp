import React, { useContext } from 'react';
import Context from '../../context/context';
import LogIn from '../LogIn/LogIn';
import './Modal.css';

const Modal = () => {
  const { openModal, setOpenModal } = useContext(Context);
  return (
    <div
      className={`modal ${openModal && 'd-block'}`}
      tabIndex={-1}
      onClick={() => setOpenModal(false)}
    >
      <div
        className='modal-dialog'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Log In
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={() => setOpenModal(false)}
            ></button>
          </div>
          <LogIn />
        </div>
      </div>
    </div>
  );
};

export default Modal;
