import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../../context/context';
import MyContext from '../../context/myContext';
import httpUsers from '../../https/httpUsers';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const { setOpenModal } = useContext(Context);
  const { setIsLoginUser } = useContext(MyContext);
  const [login, setLogin] = useState('eve.holt@reqres.in');
  const [password, setPasword] = useState('cityslicka');
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const authorization = async () => {
    const data = { email: login, password: password };
    const authorizationData = await httpUsers.post(
      `api/${isLogin ? 'login' : 'register'}`,
      data
    );
    if (authorizationData.data.token) {
      localStorage.setItem('token', authorizationData.data.token);
      setIsLoginUser(true);
      setOpenModal(false);
    }
    if (authorizationData.data.email) {
      alert('Congratulation, you are awesome!');
      setLogin('');
      setPasword('');
    }
  };

  return (
    <>
      <div className='row container'>
        <input
          type='email'
          className='form-control m-3'
          onChange={(event) => setLogin(event.target.value)}
        />
        <input
          type='password'
          className='form-control m-3'
          onChange={(event) => setPasword(event.target.value)}
        />
        <Link className='mx-auto' to={isLogin ? 'registration' : 'login'}>
          {isLogin
            ? 'Do not have an account? Registration!'
            : 'Have an account? Login!'}
        </Link>
      </div>
      <button
        type='submit'
        className='btn btn-primary col-5 m-3 mx-auto'
        onClick={() => authorization()}
      >
        {isLogin ? 'Login' : 'Registration'}
      </button>
    </>
  );
};

export default LogIn;
