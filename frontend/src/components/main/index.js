import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';


const Main = () => {
  return (
    <div>
        
        <Header />
        {/* <Footer /> */}
        
        
        <Outlet />
        <Footer/>

    </div>
  )
}

export default Main;