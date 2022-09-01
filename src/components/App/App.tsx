import React, { useEffect, useState } from 'react';
import Context from '../../context/context';
import MyContext from '../../context/myContext';
import AppRoutes from '../AppRoutes';
import Modal from '../Modal/Modal';
import NavBar from '../NavBar';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoginUser, setIsLoginUser] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoginUser(true);
    }
  }, []);
  return (
    <Context.Provider value={{ openModal, setOpenModal }}>
      <MyContext.Provider value={{ isLoginUser, setIsLoginUser }}>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <AppRoutes />
          </div>
          <Modal />
        </div>
      </MyContext.Provider>
    </Context.Provider>
  );
}

export default App;
