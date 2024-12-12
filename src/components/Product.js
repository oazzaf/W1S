import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import TripWise from '../img/TripWise.webp';
import CorpWise from '../img/CorpWise.webp';
import MetaverseIcon from '../img/1ON.png';
import BlockchainIcon from '../img/BlockWer.webp'; // Replace with actual path
import Siphon3 from '../img/Siphon4.webp'; // Import the background image

const Card = ({ iconSrc, title, description, className }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700 shadow-lg transform transition-transform duration-500 hover:scale-105 ${className}`}
      style={{
        borderImage: 'linear-gradient(45deg, #00ffff, #ff00ff) 1',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(3.5px)',
      }}
    >
      <div
        className="w-26 h-26 mb-4"
        style={{
          width: '150px',
          height: '150px',
          backgroundImage: 'linear-gradient(45deg, #d93775, #7238b4)',
          WebkitMask: `url(${iconSrc}) center/contain no-repeat`,
          mask: `url(${iconSrc}) center/contain no-repeat`,
          WebkitMaskComposite: 'source-in',
          maskComposite: 'source-in',
        }}
      />
      <h5
        className="mb-2 text-xl font-bold"
        style={{
          fontFamily: '"Muli", sans-serif',
          background: 'linear-gradient(45deg, #d93775, #7238b4)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {title}
      </h5>
      <p
        className="text-base text-gray-300"
        style={{
          fontFamily: '"Muli", sans-serif',
          textAlign: 'center',
        }}
      >
        {description}
      </p>
    </div>
  );
};

const GridComponent = () => {
  useEffect(() => {
    ScrollReveal().reveal('.card-reveal', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom',
      opacity: 0,
      scale: 0.9,
      reset: true,
    });
  }, []);

  return (
    <div
      className="bg-transparent py-20"
      id="product"
      style={{
        backgroundImage: `url(${Siphon3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center text-white mb-12">
          {/* Add text above the cards */}
          <div
            className="mb-12 p-6 rounded-lg shadow-lg bg-gray-900 bg-opacity-70"
            style={{
              borderImage: 'linear-gradient(45deg, #00ffff, #ff00ff) 1',
              borderStyle: 'solid',
              borderWidth: '2px',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p
              className="mt-3 text-4xl sm:text-5xl md:text-6xl responsive-text"
              style={{
                fontFamily: '"Muli", sans-serif',
                textShadow: '0px 0px 8px #000',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Powerful for{' '}
              <span
                className="card-from-top1"
                style={{
                  color: '#d93775',
                  textShadow: '0px 0px 18px #d93775',
                  fontFamily: '"Muli", sans-serif',
                }}
              >
                Trippers.
              </span>
            </p>
            <p
              className="mt-3 text-4xl sm:text-5xl md:text-6xl responsive-text"
              style={{
                fontFamily: '"Muli", sans-serif',
                textShadow: '0px 0px 18px #000',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Insightful for{' '}
              <span
                className="card-from-top2"
                style={{
                  color: '#7238b4',
                  textShadow: '0px 0px 38px purple',
                  fontFamily: '"Muli", sans-serif',
                }}
              >
                Partners.
              </span>
            </p>
            <p
              className="mt-3 text-4xl sm:text-5xl md:text-6xl responsive-text"
              style={{
                fontSize: 'auto',
                fontFamily: '"Muli", sans-serif',
                textShadow: '0px 0px 28px #000',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Rewarding for{' '}
              <span
                className="card-from-top3"
                style={{
                  color: 'black',
                  textShadow: '0px 0px 28px #7238b4',
                  fontFamily: '"Muli", sans-serif',
                }}
              >
                Everyone.
              </span>
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card
            iconSrc={TripWise}
            title="TripWise Ai"
            description="TripWise provides personalized trip planning and recommendations, allowing trippers to explore unique destinations with ease and excitement."
            className="card-reveal"
          />
          <Card
            iconSrc={CorpWise}
            title="CorpWise Ai"
            description="CorpWise helps business partners analyze data effectively and develop action plans, enabling better strategies for success and growth."
            className="card-reveal"
          />
          <Card
            iconSrc={MetaverseIcon}
            title="Wesafar Metaverse"
            description="The Wesafar Metaverse offers virtual quests, events, and goods, enabling immersive and rewarding travel adventures for everyone."
            className="card-reveal"
          />
          <Card
            iconSrc={BlockchainIcon}
            title="Blockchain & WER"
            description="Blockchain powers Wesafar's secure ecosystem, while WER tokens enable transactions, governance, and rewards across the platform."
            className="card-reveal"
          />
        </div>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;700&family=Open+Sans:wght@400;600&family=Poppins:wght@400;700&display=swap');
          
          .responsive-text {
            font-size: 6vw;
          }
          @media (min-width: 640px) {
            .responsive-text {
              font-size: 4vw;
            }
          }
          @media (min-width: 768px) {
            .responsive-text {
              font-size: 3vw;
            }
          }
          @media (min-width: 1024px) {
            .responsive-text {
              font-size: 2vw;
            }
          }
          @media (min-width: 1280px) {
            .responsive-text {
              font-size: 4.5vw;
            }
          }
        `}
      </style>
    </div>
  );
};

export default GridComponent;