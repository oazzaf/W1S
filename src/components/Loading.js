// src/components/Loading.js
import React, { useEffect, useState } from 'react';
import LoadingGif from '../img/loading.gif'; // Ensure the path is correct

const Loading = () => {
  const [styles, setStyles] = useState(getStyles(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setStyles(getStyles(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.loadingContainer}>
      <img src={LoadingGif} alt="Loading..." style={styles.loadingGif} />
    </div>
  );
};

const getStyles = (width) => {
  const loadingGifStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    animation: 'zoomAndFadeOut 3.7s forwards' // Apply zoom and fade-out animation
  };

  if (width < 950) { // Example breakpoint for small screens
    loadingGifStyle.width = '100%'; // Increase the size of the logo on small screens
    
  }

  return {
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#222222',
      overflow: 'hidden'
    },
    loadingGif: loadingGifStyle
  };
};

// Add CSS keyframes for the zoom-in and fade-out effect
const addKeyframes = () => {
  const styleSheet = document.styleSheets[0];
  const keyframes =
    `@keyframes zoomAndFadeOut {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      70% {
        transform: scale(1.5);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }`;

  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
};

addKeyframes();

export default Loading;
