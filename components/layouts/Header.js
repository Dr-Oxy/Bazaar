import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Banner />
      <Navbar />
    </header>
  );
};

export default Header;
