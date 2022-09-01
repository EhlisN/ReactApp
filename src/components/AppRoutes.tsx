import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import MyContext from '../context/myContext';
import Main from '../pages/Main';
import Posts from '../pages/Posts';
import Users from '../pages/Users';

const AppRoutes = () => {
  const { isLoginUser } = useContext(MyContext);
  return isLoginUser ? (
    <Routes>
      <Route path='*' element={<Main />}></Route>
      <Route path='users' element={<Users />}></Route>
      <Route path='posts' element={<Posts />}></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path='*' element={<Main />}></Route>
    </Routes>
  );
};

export default AppRoutes;
