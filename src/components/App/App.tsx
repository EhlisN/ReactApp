import React, { useState } from 'react';
import Context from '../../context/context';
import AppRoutes from '../AppRoutes';
import Modal from '../Modal/Modal';
import NavBar from '../NavBar';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider value={{ openModal, setOpenModal }}>
      <div className='App'>
        <NavBar />
        <div className='container'>
          <AppRoutes />
        </div>
        <Modal />
      </div>
    </Context.Provider>
  );
}

export default App;
