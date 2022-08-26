import React from 'react';
import AppRoutes from '../AppRoutes';
import NavBar from '../NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
