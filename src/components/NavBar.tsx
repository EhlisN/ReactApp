import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';
import MyContext from '../context/myContext';

const NavBar = () => {
  const { setOpenModal } = useContext(Context);
  const { isLoginUser, setIsLoginUser } = useContext(MyContext);
  const logout = () => {
    setIsLoginUser(false);
    localStorage.clear();
  };
  return (
    <nav className='navbar navbar-expand bg-dark mb-3'>
      <div className='container-fluid'>
        {isLoginUser ? (
          <div
            className='collapse navbar-collapse justify-content-between'
            id='navbarText'
          >
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active text-light' to='main'>
                  Main
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-light' to='users'>
                  Users
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-light' to='posts'>
                  Posts
                </Link>
              </li>
            </ul>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              onClick={() => logout()}
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            to='login'
            className='btn btn-primary'
            onClick={() => setOpenModal(true)}
          >
            LogIn
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
