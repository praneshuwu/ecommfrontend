import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../../src/components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
// import { useLocation } from 'react-router';

const Home = () => {
  // const location = useLocation();

  // const toast = location.state;

  return (
    <div>
      <Announcement />
      <Navbar />
      {/* {toast &&
        <div
          style={{
            height: '30px',
            width: '98.9vw',
            backgroundColor: '#85e69e',
            color: 'white',
            fontWeight: '600',
            textTransform: 'uppercase',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>{toast}</p>
        </div>
      } */}
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
