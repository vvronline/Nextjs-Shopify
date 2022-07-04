import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Landing from './AllProducts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
