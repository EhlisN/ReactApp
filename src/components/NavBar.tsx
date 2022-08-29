import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand bg-dark mb-3'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarText'>
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
