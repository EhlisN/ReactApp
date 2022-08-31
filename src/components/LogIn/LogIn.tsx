import React, { FormEvent, useState } from 'react';

const LogIn = () => {
  const [dataUser, setDataUser] = useState({});
  const [login, setLogin] = useState('');
  const [password, setPasword] = useState('');
  const loginUser = (event: FormEvent) => {
    if (login && password) {
      event.preventDefault();
      setDataUser({ login: login, password: password });
      console.log(dataUser);
    }
  };
  const submitUser = () => {
    setLogin('');
    setPasword('');
  };

  return (
    <form className='m-3' onSubmit={(event) => loginUser(event)}>
      <div className='mb-3'>
        <label htmlFor='exampleInputLogin' className='form-label'>
          Login
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleInputLogin'
          onChange={(event) => setLogin(event.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          onChange={(event) => setPasword(event.target.value)}
        />
      </div>
      <button
        type='submit'
        className='btn btn-primary'
        onClick={() => submitUser()}
      >
        Submit
      </button>
    </form>
  );
};

export default LogIn;
