import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Economy from '../components/Economy';
import Product from '../components/Product';
import Ecosystem from '../components/Ecosystem';
import Tokenomics from '../components/Tokenomics';
import RoadMap from '../components/RoadMap';
import Footer from '../components/Footer';
import FAQs from '../components/FAQs';
import Loading from '../components/Loading';

function HomeLander() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3700); // 3.7 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div
      className="HomeLander"
      style={{
        backgroundColor: '#222222',
        minHeight: '110vh',
        backgroundRepeat: 'repeat-y',
      }}
    >
      {isLoading ? (
        <Loading /> // Show loading screen if still loading
      ) : (
        <>
          <Navbar />
          <HeroSection id="herosection" />
          <AboutUs id="aboutus" />
          <Economy id="economy" />
          <Product id="product" />
          <RoadMap id="roadmap" />
          <Ecosystem id="ecosystem" />
          <Tokenomics id="tokenomics" />
          <FAQs /> {/* Add the FAQs component here */}
          <Footer id="footer" />
        </>
      )}
    </div>
  );
}

export default HomeLander;
