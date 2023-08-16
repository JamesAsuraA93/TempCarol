import React from 'react'
import Nav from './Nav'
import Footer from './footer';

const Layout = ({children}) => {
  return (
    <div className='content'>
      <Nav/>
      {children}
      <Footer/>
    </div>
  );
}

export default Layout
