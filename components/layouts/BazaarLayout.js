import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BazaarLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <main className="bg-green-400 text-black">{children}</main>

      <Footer />
    </div>
  );
};

export default BazaarLayout;
