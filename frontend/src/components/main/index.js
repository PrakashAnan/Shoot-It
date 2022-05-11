import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Home from './home';

const Main = () => {
  return (
    <div>
        
        <Header />
        {/* <Footer /> */}
        <Home />
        
        <Outlet />

    </div>
  )
}

export default Main;