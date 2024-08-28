import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

// Define an array of colors for the card borders and shadows
const cardColors = ['#f18e2b', '#a50000', '#b64aa8', '#FFD700', '#DA70D6'];

// Card component with dynamic class and style application
const Card = ({ title, description, colorIndex, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const borderColor = cardColors[colorIndex % cardColors.length];

  const cardStyles = {
    transition: 'transform 0.5s, box-shadow 0.5s',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered
      ? `0 4px 30px ${borderColor}, 0 12px 20px ${borderColor}`
      : '0 4px 20px rgba(0, 0, 0, 0.25)',
    border: `2.5px dotted ${borderColor}`,
    borderRadius: '2.6rem',
    padding: '2rem',
    marginBottom: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backdropFilter: 'blur(0px)',
    width: '100%', // Ensure full width on small screens
  };

  const titleStyles = {
    color: borderColor,
    fontSize: '2rem', // Smaller font size for better responsiveness
    transition: 'text-shadow 0.5s',
    textShadow: isHovered ? `2px 2px 4px ${borderColor}` : 'none',
    fontFamily: 'Orbitron, sans-serif',  // Add Orbitron font
  };

  const descriptionStyles = {
    textAlign: 'center',
    fontFamily: 'Poppin, sans-serif',  // Add Orbitron font
  };

  return (
    <div
      className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ${className}`}
      style={cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="mb-4" style={titleStyles}>{title}</h2>
      <p style={descriptionStyles}>{description}</p>
    </div>
  );
};

// Ecosystem component that uses the Card component
const Ecosystem = () => {
  useEffect(() => {
    ScrollReveal().reveal('.card-from-bottom', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      easing: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      reset: true
    });

    ScrollReveal().reveal('.card-from-bottom', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      easing: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      reset: true
    });

    ScrollReveal().reveal('.card-from-bottom', {
      origin: 'bottom',
      distance: '80px',
      duration: 1000,
      easing: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      reset: true
    });
  }, []);

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        
        {`
          h2, p {
            font-family: 'Orbitron', sans-serif;
          }
        `}
      </style>
      <div className="text-white min-h-screen flex flex-col items-center justify-center p-8" id="ecosystem" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', textAlign: 'center' }}>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a5c] via-[#ff6a5c] to-[#d93775]' style={{  textShadow: '0px 0px 8px #ff6a5c', fontSize: '3.2rem' }}>
          Wesafar's Economic Vitality:
        </h1>
        <span className='text-white' style={{ fontFamily: 'Orbitron', fontSize: '2.2rem' }}>The $wer & WER Tokens</span>
        <p className='' style={{ fontFamily: 'Orbitron', width: '66%', opacity: '80%', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Central to Wesafar's vibrant economy is The Wer, a bustling hub of commerce and innovation...
        </p>
        <div className="flex flex-wrap justify-center items-center max-w-6xl">
          <Card
            title="Transact"
            description="All services within the Wesafar platform are transacted using the WER token..."
            colorIndex={0}
            className="card-from-bottom"
          />
          <Card
            title="Airdrops"
            description="Trippers can receive exclusive Airdrops, offering access to special features..."
            colorIndex={1}
            className="card-from-bottom"
          />
          <Card
            title="Rewards"
            description="Earn WER tokens as rewards for your engagement and transactions on the platform..."
            colorIndex={2}
            className="card-from-bottom"
          />
        </div>
      </div>
    </>
  );
};

export default Ecosystem;
