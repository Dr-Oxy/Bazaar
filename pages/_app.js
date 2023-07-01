import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '@/styles/globals.css';
import BazaarLayout from '@/components/layouts/BazaarLayout';

function App({ Component, pageProps }) {
  return (
    <BazaarLayout>
      <Component {...pageProps} />
    </BazaarLayout>
  );
}

export default App;
