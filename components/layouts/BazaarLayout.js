import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BazaarLayout = ({ children }) => {
  return (
    <div className="bg-off-white">
      <Header />

      <div className="pt-48 text-black px-4 xl:px-0  max-w-6xl mx-auto">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default BazaarLayout;
