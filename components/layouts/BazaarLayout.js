import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { Heebo } from 'next/font/google';

const heebo = Heebo({ subsets: ['latin'] });

const BazaarLayout = ({ children }) => {
  return (
    <div className={`${heebo.className} bg-off-white relative`}>
      <Header />

      <div className="pt-48 text-black px-4 xl:px-0  max-w-6xl mx-auto">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default BazaarLayout;
