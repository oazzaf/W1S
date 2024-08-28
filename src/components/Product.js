import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import EventIcon from '../img/4ON.png';
import AiIcon from '../img/2ON.png';
import MetaverseIcon from '../img/1ON.png';
import BusinessIcon from '../img/3ON.png';

const Card = ({ iconSrc, title, description, borderColor, textColor, className }) => {
  return (
    <div 
      className={`flex flex-col items-center p-6 rounded-lg border-2 shadow-sm bg-transparent ${borderColor} transition-all duration-300 ${className}`}
    >
      <img src={iconSrc} alt={title} className="w-26 h-26 mb-4" style={{ width: '150px', height: '150px' }} />
      <h5 className={`mb-2 text-xl font-bold ${textColor}`} style={{ fontFamily: 'Orbitron' }}>{title}</h5>
      <p className={`text-base ${textColor}`} style={{ fontFamily: 'Poppins' }}>{description}</p>
    </div>
  );
};

const GridComponent = () => {
  useEffect(() => {
    ScrollReveal().reveal('.card-from-top1', { 
      origin: 'top',
      distance: '80px',
      duration: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: true
    });

    ScrollReveal().reveal('.card-from-top2', { 
      origin: 'top',
      distance: '100px',
      duration: 3000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: true
    });

    ScrollReveal().reveal('.card-from-top3', { 
      origin: 'top',
      distance: '120px',
      duration: 6300,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: true
    });

    ScrollReveal().reveal('.card-from-bottom', { 
      origin: 'bottom',
      distance: '120px',
      duration: 1200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
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
            description="Wesafar Events provides a platform where business partners can host physical or live-streamed events, allowing attendees to participate or start their own streams. Wesafar 1:1 offers private, personalized interactions with destinations and local businesses, enhancing the travel experience. The Wesafar app enables business partners to promote their activities directly to users, fostering a direct, enriched connection that allows for effective showcasing of offerings and easy discovery of authentic experiences."
            borderColor="border-yellow-500"
            textColor="text-yellow-500"
            className="card-from-bottom"
          />
          <Card 
            iconSrc={AiIcon}
            title="TripWise Ai"
            description="TripWise offers a distinctive experience to trippers and business partners through its sophisticated AI capabilities: personalized trip planning, tailored travel recommendations, and community moderation, interactive travel assistants, engagement metrics, and real-time cultural exchanges. This travel-focused web app leverages cutting-edge technology to make every journey more insightful, connected, and effortlessly enjoyable."
            borderColor="border-orange-500"
            textColor="text-orange-500"
            className="card-from-bottom"
          />
          <Card 
            iconSrc={MetaverseIcon}
            title="Wesafar Metaverse"
            description="Dive into a virtual world of travel and adventure. Engage in live virtual events, interactive quests, and explore unique virtual goods to enhance your travel experience. This digital realm offers an immersive gateway to not only see the world from the comfort of your home but to actively participate in its cultures and stories, enriching your real-world travel aspirations with every virtual adventure."
            borderColor="border-red-500"
            textColor="text-red-500"
            className="card-from-bottom"
          />
          <Card 
            iconSrc={BusinessIcon}
            title="Business"
            description="The Wesafar app empowers business partners to connect directly with Trippers, promoting their activities on the platform without intermediaries. Transitioning from customer to creator, this direct link fosters a streamlined and enriched engagement, allowing business partners to showcase their offerings more effectively and Trippers to discover authentic experiences with ease."
            borderColor="border-purple-500"
            textColor="text-purple-500"
            className="card-from-bottom"
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
