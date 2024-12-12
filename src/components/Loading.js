import React, { useEffect, useState } from 'react';
import LoadingGif from '../img/transwesafa.png'; // Ensure the path is correct

const Loading = ({ onComplete }) => {
  const [styles, setStyles] = useState(getStyles(window.innerWidth));
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setStyles(getStyles(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);

    // Trigger the fade-out animation after 3 seconds
    const timeout = setTimeout(() => setFadeOut(true), 3000);

    // Complete the transition and remove the loading screen after the animation ends
    const finalTimeout = setTimeout(() => onComplete(), 4000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeout);
      clearTimeout(finalTimeout);
    };
  }, [onComplete]);

  return (
    <>
      <style>
        {`
          @keyframes gracefulEntrance {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes diagonalFadeOut {
            0% {
              transform: scale(1) translate(0, 0);
              opacity: 1;
            }
            100% {
              transform: scale(0.2) translate(-120vw, -155vh); /* Adjusts to the nav logo */
              opacity: 0;
            }
          }

          @keyframes fadeOutBackground {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
      <div style={fadeOut ? styles.loadingContainerFadeOut : styles.loadingContainer}>
        <img src={LoadingGif} alt="Loading..." style={fadeOut ? styles.loadingGifFadeOut : styles.loadingGif} />
      </div>
    </>
  );
};

const getStyles = (width) => {
  const loadingGifStyle = {
    width: '33.3%', // Reduced size by 300%
    height: '33.3%', // Maintains aspect ratio
    objectFit: 'contain',
    animation: 'gracefulEntrance 1.5s forwards'
  };

  if (width < 950) {
    // Adjustments for smaller screens:
    loadingGifStyle.width = '50%'; // Slightly larger for better visibility
    loadingGifStyle.height = '50%';
  }

  return {
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#222222',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 9999,
    },
    loadingContainerFadeOut: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#222222',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 9999,
      animation: 'fadeOutBackground 1.5s forwards 2.5s',
    },
    loadingGif: loadingGifStyle,
    loadingGifFadeOut: {
      ...loadingGifStyle,
      animation: 'diagonalFadeOut 1.5s forwards',
      position: 'absolute',
    },
  };
};

export default Loading;