import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import TripWise from '../img/TripWise.webp';
import CorpWise from '../img/CorpWise.webp';
import MetaverseIcon from '../img/1ON.png';
import BlockchainIcon from '../img/BlockWer.webp';
import Siphon3 from '../img/Siphon2.png';

const Card = ({ iconSrc, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="card-container relative w-full h-64 mx-auto overflow-hidden group"
      onClick={handleCardClick}
    >
      <div
        className={`card-inner relative w-full h-full transform transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Side */}
        <div
          className=" absolute w-full h-full rounded-lg bg-black bg-opacity-70 border border-gray-700 shadow-lg flex items-center justify-center hover:shadow-2xl transition-transform"
          style={{
            borderImage: 'linear-gradient(45deg, #00ffff, #ff00ff) ',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(3.5px)',
            backfaceVisibility: 'hidden',
          }}
        >
          <div
            className="icon w-26 h-26"
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

          {/* Triangle Arrow */}
          <div
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center transition-all ${
              isFlipped ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div
              className="arrow w-4 h-4 flex items-center justify-center"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                background: 'linear-gradient(90deg, #d93775, #ff6a5c, #9450a8, #d93775)',
              }}
            ></div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="card-back absolute w-full h-full rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg flex flex-col items-center justify-center p-6"
          style={{
            borderImage: 'linear-gradient(45deg, #00ffff, #ff00ff) 1',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h5
            className="mb-2 text-xl font-bold"
            style={{
              fontFamily: '"Muli", sans-serif',
              textAlign: 'center',
              background: 'linear-gradient(90deg, #d93775, #ff6a5c, #9450a8, #d93775)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </h5>
          <p
            className="text-base text-gray-300 text-center"
            style={{
              fontFamily: '"Open Sans", sans-serif',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const GridComponent = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.card-container', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-out',
      opacity: 0,
      scale: 0.9,
      origin: 'bottom',
      interval: 200, // Adds staggered delay
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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center text-white mb-12">
          <div
            className="mb-12 p-6 rounded-lg shadow-lg bg-black bg-opacity-70"
            style={{
              borderImage: 'linear-gradient(45deg, #00ffff, #ff00ff) 0',
              borderStyle: 'solid',
              borderWidth: '2px',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p
              className="mt-3 text-4xl sm:text-5xl md:text-6xl responsive-text"
              style={{
                fontFamily: '"Orbitron", sans-serif',
                color: 'transparent',
                backgroundImage:
                  'linear-gradient(45deg, #00ffff, #7238b4, #d93775, #00ffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                fontSize: '42px',
              }}
            >
              Powerful for{' '}
              <span
                className="card-from-top1"
                style={{
                  fontFamily: '"Orbitron", sans-serif',
                  color: 'transparent',
                  backgroundImage:
                    'linear-gradient(90deg, #ff00ff, #ff6a5c, #00ffff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  fontSize: '50px',
                }}
              >
                Trippers.
              </span>
            </p>
            <p
              className="card-from-top1 mt-3 text-4xl sm:text-5xl md:text-6xl responsive-text"
              style={{
                fontFamily: '"Orbitron", sans-serif',
                color: 'transparent',
                backgroundImage:
                  'linear-gradient(45deg, #00ffff, #7238b4, #d93775, #00ffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                fontSize: '45px',
                padding:'10px',
              }}
            >
              Insightful for{' '}
              <span
                className="card-from-top2"
                style={{
                  fontFamily: '"Orbitron", sans-serif',
                  color: 'transparent',
                  backgroundImage:
                    'linear-gradient(90deg, #ff00ff, #ff6a5c, #00ffff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  fontSize: '42px',
                }}
              >
                Partners.
              </span>
            </p>
            <p
              className="mt-3 text-4xl sm:text-5xl md:text-6xl responsive-text"
              style={{
                fontFamily: '"Orbitron", sans-serif',
                color: 'transparent',
                backgroundImage:
                  'linear-gradient(45deg, #00ffff, #7238b4, #d93775, #00ffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                fontSize: '45px',
                padding:'10px',
              }}
            >
              Rewarding for{' '}
              <span
                className="card-from-top3"
                style={{
                  fontFamily: '"Orbitron", sans-serif',
                  color: 'transparent',
                  backgroundImage:
                    'linear-gradient(90deg, #ff00ff, #ff6a5c, #00ffff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  fontSize: '40px',
                  padding:'10px',
                }}
              >
                Everyone.
              </span>
            </p>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card
            iconSrc={TripWise}
            title="TripWise Ai"
            description="TripWise provides personalized trip planning and recommendations, allowing trippers to explore unique destinations with ease and excitement."
          />
          <Card
            iconSrc={CorpWise}
            title="CorpWise Ai"
            description="CorpWise helps business partners analyze data effectively and develop action plans, enabling better strategies for success and growth."
          />
          <Card
            iconSrc={MetaverseIcon}
            title="Wesafar Metaverse"
            description="The Wesafar Metaverse offers virtual quests, events, and goods, enabling immersive and rewarding travel adventures for everyone."
          />
          <Card
            iconSrc={BlockchainIcon}
            title="Blockchain & WER"
            description="Blockchain powers Wesafar's secure ecosystem, while WER tokens enable transactions, governance, and rewards across the platform."
          />
        </div>
      </div>
      <style>
        {`
          .card-container {
            perspective: 1000px;
            cursor: pointer;
          }
          .card-inner {
            transform-style: preserve-3d;
            transition: transform 0.7s;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          
          @media (max-width: 768px) {
            .text-4xl {
              font-size: 1.75rem;
            }
          }
          
          @media (max-width: 480px) {
            .card-from-top1 .card-from-top2 .card-from-top3 {
              font-size: 1.35rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default GridComponent;