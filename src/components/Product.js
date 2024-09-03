import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import EventIcon from '../img/4ON.png';
import AiIcon from '../img/2ON.png';
import MetaverseIcon from '../img/1ON.png';
import BusinessIcon from '../img/3ON.png';

const Card = ({ iconSrc, title, description, className }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700 shadow-lg transform transition-transform duration-500 hover:scale-105 ${className}`}
      style={{
        borderImage: 'linear-gradient(45deg, #00ffff, #ff00ff) 1',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
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
          fontFamily: 'Orbitron',
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
          fontFamily: 'Poppins',
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
      reset: true
    });
  }, []);

  return (
    <div className="bg-transparent py-20" id="product">
      <div className="container mx-auto px-6">
        <div className="text-center text-white mb-12">
          <p className="mt-3 text-6xl responsive-text" style={{ fontFamily: 'Orbitron', textShadow: '0px 0px 8px #000', color: 'gray' }}>
            Powerful for <span className='card-from-top1' style={{ color: '#d93775', textShadow: '0px 0px 8px #d93775', fontFamily: 'Orbitron' }}>Trippers.</span>
          </p>
          <p className="mt-3 text-6xl responsive-text" style={{ fontFamily: 'Orbitron', textShadow: '0px 0px 8px #000', color: 'gray' }}>
            Insightful for <span className='card-from-top2' style={{ color: 'purple', textShadow: '0px 0px 8px purple', fontFamily: 'Orbitron' }}>Partners.</span>
          </p>
          <p className="mt-3 text-6xl responsive-text" style={{ fontSize: 'auto', fontFamily: 'Orbitron', textShadow: '0px 0px 8px #000', color: 'gray' }}>
            Rewarding for <span className='card-from-top3' style={{ color: '#7238b4', textShadow: '0px 0px 8px #7238b4', fontFamily: 'Orbitron' }}>everyone.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card 
            iconSrc={EventIcon}
            title="Wesafar Event & 1:1"
            description="Wesafar Events provides a platform where business partners can host physical or live-streamed events, allowing attendees to participate or start their own streams. Wesafar 1:1 offers private, personalized interactions with destinations and local businesses, enhancing the travel experience."
            className="card-reveal"
          />
          <Card 
            iconSrc={AiIcon}
            title="TripWise Ai"
            description="TripWise offers a distinctive experience to trippers and business partners through its sophisticated AI capabilities: personalized trip planning, tailored travel recommendations, and community moderation."
            className="card-reveal"
          />
          <Card 
            iconSrc={MetaverseIcon}
            title="Wesafar Metaverse"
            description="Dive into a virtual world of travel and adventure. Engage in live virtual events, interactive quests, and explore unique virtual goods to enhance your travel experience."
            className="card-reveal"
          />
          <Card 
            iconSrc={BusinessIcon}
            title="Business"
            description="The Wesafar app empowers business partners to connect directly with Trippers, promoting their activities on the platform without intermediaries."
            className="card-reveal"
          />
        </div>
      </div>
      <style>
        {`
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
