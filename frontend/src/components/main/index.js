import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

const Main = () => {
  return (
    <div>
        <h1></h1>
        <Header />
        <Outlet />

    </div>
  )
}

export default Main;