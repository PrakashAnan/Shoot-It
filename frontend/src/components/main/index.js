import React from 'react';
import { Outlet } from 'react-router-dom';
import Demo from './demo';
import Footer from './footer';
import Gallery from './gallery';
import Header from './header';


const Main = () => {
  return (
    <div>
                          
        <Header /> 
        <Demo />
        <Gallery />
        <Outlet />
        <Footer />

    </div>
  )
}

export default Main;