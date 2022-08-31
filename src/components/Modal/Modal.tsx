import React, { useContext } from 'react';
import Context from '../../context/context';
import LogIn from '../LogIn/LogIn';
import './Modal.css';

const Modal = () => {
  const { openModal, setOpenModal } = useContext(Context);
  return (
    <div
      className={`modal ${openModal && 'd-block'}`}
      id='exampleModal'
      tabIndex={-1}
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
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
          {/* <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>
            <button type='button' className='btn btn-primary'>
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
