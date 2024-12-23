// /Users/fahdbbdh/Documents/W1S/src/components/Ecosystem.js

import React, { useEffect, useState, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import roadBgVideo from '../video/faqBg.mp4'; // Existing background video
import quantumBgVideo from '../video/Quantum2.mp4'; // New Quantum background video

// Import the new card background videos
import quantumGreen from '../video/QuantumGreen.mp4';
import quantumYellow from '../video/QuantumYellow.mp4';
import quantumOrange from '../video/QuantumOrange.mp4';

// Updated array of colors based on user selection
const cardColors = [
  '#1c6938',
  '#f47e37',
  '#cf2351',
  '#b01a62',
  '#872871',
  '#9450a8',
  '#7238b4',
  '#3c3f8f',
];

// Card Component with Enhanced Interactivity
const Card = ({ title, description, moreInfo, colorIndex, bgVideo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const borderColor = cardColors[colorIndex % cardColors.length];

  // Handle flip on click
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Handle 3D tilt effect based on mouse movement
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    const rotateX = deltaY * 10; // Max rotation of 10deg
    const rotateY = deltaX * -10; // Max rotation of 10deg

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Reset tilt effect when mouse leaves
  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      style={{
        borderColor: borderColor,
        boxShadow: `0 0 20px ${borderColor}, 0 0 40px ${borderColor}`,
      }}
      onClick={handleFlip}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      tabIndex="0"
      role="button"
      aria-pressed={isFlipped}
      onKeyPress={(e) => {
        if (e.key === 'Enter') handleFlip();
      }}
    >
      {/* Background Video */}
      <video className="card-bg-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <h2 style={{ color: borderColor }}>{title}</h2>
          <p>{description}</p>
          <button
            className="card-button"
            style={{
              background: borderColor,
              boxShadow: `0 0 15px ${borderColor}, 0 0 25px ${borderColor}`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleFlip();
            }}
          >
            Learn More
          </button>
          <div className="card-overlay"></div>
        </div>
        {/* Back Side */}
        <div className="card-back">
          <h2 style={{ color: borderColor }}>More About {title}</h2>
          <p>{moreInfo}</p>
          <button
            className="card-button"
            style={{
              background: borderColor,
              boxShadow: `0 0 15px ${borderColor}, 0 0 25px ${borderColor}`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleFlip();
            }}
          >
            Return
          </button>
          <div className="card-overlay"></div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Ecosystem Component
const Ecosystem = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      ScrollReveal().clean(); // Removes all ScrollReveal animations
      return;
    }

    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      reset: true, 
      opacity: 0,
      scale: 0.9,
    });

    // Reveal Cards with staggered interval
    sr.reveal('.card', {
      interval: 200,
    });

    // Reveal Main Heading
    sr.reveal('.ecosystem-container header h1', {
      origin: 'top',
      distance: '50px',
      duration: 1200,
      delay: 200,
    });

    // Reveal Subtitle
    sr.reveal('.ecosystem-container header h2', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 400,
    });

    // Reveal Paragraph
    sr.reveal('.ecosystem-container p', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 600,
    });

    // Reveal Buttons
    sr.reveal('.card-button', {
      origin: 'bottom',
      distance: '20px',
      duration: 800,
      delay: 800,
    });

    // Reveal Overlay (Optional)
    sr.reveal('.card-overlay', {
      origin: 'bottom',
      distance: '20px',
      duration: 800,
      delay: 800,
    });

    // Reveal Glass Section
    sr.reveal('.glass-section', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 800,
      opacity: 0,
      scale: 0.9,
    });
  }, []);

  return (
    <>
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&family=Orbitron:wght@400;700&display=swap');

          :root {
            --color1: #f47e37;
            --color2: #e6433e;
            --color3: #cf2351;
            --color4: #b01a62;
            --color5: #872871;
            --color6: #9450a8;
            --color7: #7238b4;
            --color8: #3c3f8f;
            --background-color: #0f0f0f;
            --card-bg: rgba(0, 0, 0, 0.75);
            --card-border-width: 3px;
            --font-color: #FFFFFF;
            --transition-speed: 0.3s;
            --glow-intensity: 20px;
            --font-family: 'Mulish', sans-serif;
            --futuristic-font: 'Muli', sans-serif;
          }

          body {
            background-color: var(--background-color);
            margin: 0;
            padding: 0;
            font-family: var(--font-family);
            overflow-x: hidden;
          }

          .ecosystem-container {
            position: relative;
            color: var(--font-color);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            overflow: hidden;
            z-index: 1;
          }

          .background-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -2; 
            opacity: 0.5;
            transform: scaleX(-1);
          }

          .ecosystem-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05), transparent 70%);
            transform: translateX(-50%) rotate(45deg);
            animation: rotateBackground 60s linear infinite;
            z-index: -1; 
          }

          @keyframes rotateBackground {
            from {
              transform: translateX(-50%) rotate(0deg);
            }
            to {
              transform: translateX(-50%) rotate(360deg);
            }
          }

          .ecosystem-container header {
            margin-bottom: 2rem;
          }

          .glass-section header h1 {
            font-size: 3rem;
            background: linear-gradient(90deg, #00f2fe, #fa709a);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            margin-bottom: 1rem;
            position: relative;
            z-index: 1;
            font-family: var(--futuristic-font);
            text-transform: uppercase;
            letter-spacing: 3px;
          }

          .glass-section header h2 {
            font-size: 2rem;
            font-family: var(--futuristic-font);
            letter-spacing: 2px;
            color: #00ffff;
            margin-bottom: 1.5rem;
            position: relative;
            z-index: 1;
          }

          .glass-section p {
            font-size: 1.2rem;
            font-familly: Muli;
            line-height: 1.8;
            color: #e0e0e0;
            max-width: 800px;
            margin: 0 auto 2.5rem auto;
            position: relative;
            z-index: 1;
            opacity: 0.95;
          }

          @keyframes neonGlow {
            from {
              text-shadow: 0 0 10px #00f2fe, 0 0 20px #fa709a;
            }
            to {
              text-shadow: 0 0 20px #00f2fe, 0 0 40px #fa709a;
            }
          }

          .glass-section {
            position: relative;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 3rem;
            margin: 2rem 0;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
            overflow: hidden;
            color: #ffffff;
            text-align: center;
            transition: background 0.5s, border 0.5s;
          }

          .glass-section .quantum-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
            opacity: 0.5;
          }

          .glass-section::before,
          .glass-section::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            border-radius: 50%;
            opacity: 0.1;
            pointer-events: none;
            animation: rotateShine 15s linear infinite;
          }

          .glass-section::before {
            background: linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.2) 25%,
              rgba(255, 255, 255, 0.1) 25%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.2) 75%,
              rgba(255, 255, 255, 0.1) 75%,
              rgba(255, 255, 255, 0.1) 100%
            );
            animation-duration: 10s;
          }

          .glass-section::after {
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0.05) 50%,
              rgba(255, 255, 255, 0.15) 100%
            );
            animation-duration: 20s;
          }

          @keyframes rotateShine {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .glass-section::before,
          .glass-section::after {
            mix-blend-mode: overlay;
          }

          .glass-section:hover {
            background: rgba(255, 255, 255, 0.2);
            transition: background 0.5s;
          }

          .glass-section:hover::before,
          .glass-section:hover::after {
            opacity: 0.2;
          }

          .cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            width: 100%;
            max-width: 1200px;
          }

          .card {
            position: relative;
            border: var(--card-border-width) solid;
            border-radius: 1.2rem;
            padding: 1rem;
            transition: transform var(--transition-speed), box-shadow var(--transition-speed), border-color var(--transition-speed);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
            cursor: pointer;
            height: 400px;
            perspective: 1000px;
            outline: none;
            font-family: var(--body-font);
            overflow: hidden;
          }

          .card-bg-video {
            position: absolute;
            top: 50%;
            left: 50%;
            width: auto;
            height: 100%;
            min-width: 100%;
            transform: translate(-50%, -50%);
            object-fit: cover;
            z-index: 1;
          }

          .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transform-style: preserve-3d;
            transition: transform 0.8s;
            z-index: 2;
          }

          .card.flipped .card-inner {
            transform: rotateY(180deg);
          }

          .card-front, .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1.2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            box-sizing: border-box;
            transition: background 0.5s;
            background: rgba(0,0,0,0.4);
            font-family: var(--body-font);
          }

          .card-back {
            transform: rotateY(180deg);
          }

          .card-overlay {
            position: absolute;
            top: -80%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(135deg, rgba(255, 106, 92, 0.01), rgba(10, 10, 56, 0.3));
            border-radius: 50%;
            animation: pulseGlow 1s infinite;
            pointer-events: none;
          }

          @keyframes pulseGlow {
            0% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.4;
            }
            100% {
              transform: scale(1);
              opacity: 0.7;
            }
          }

          .card-front h2, .card-back h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: inherit;
            text-shadow: 0 0 1px currentColor;
            font-family: Muli;
          }

          .card-front p, .card-back p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #e0e0e0;
            font-family: Muli;
            margin-bottom: 1rem;
          }

          .card-button {
            margin-top: 1rem;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.5rem;
            color: #ffffff;
            font-size: 1rem;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            font-family: var(--body-font);
          }

          .card-button:hover,
          .card-button:focus {
            transform: scale(1.1);
            outline: none;
          }

          @media (max-width: 768px) {
            .glass-section header h1 {
              font-size: 2.7rem;
            }

            .glass-section header h2 {
              font-size: 1.75rem;
            }

            .glass-section p {
              font-size: 1rem;
            }

            .card-front h2, .card-back h2 {
              font-size: 2.5rem;
            }

            .card-front p, .card-back p {
              font-size: 1rem;
            }
          }

          @media (max-width: 320px) {
            .glass-section {
              padding: 1.5rem;
              width: 100%;
            }

            .glass-section header h1 {
              font-size: 1.5rem;
            }

            .glass-section header h2 {
              font-size: 1rem;
            }

            .glass-section p {
              font-size: 0.95rem;
            }

            .card {
              padding: 1rem;
              height: 350px;
              width: 90%;
            }

            .card-front h2, .card-back h2 {
              font-size: 2.05rem;
            }

            .card-front p, .card-back p {
              font-size: 0.9rem;
            }
          }
        `}</style>

      <div className="ecosystem-container" id="ecosystem">
        {/* Background Video */}
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={roadBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-[#000000] opacity-70 z-1"></div>

        <section className="glass-section">
          <video className="quantum-video" autoPlay loop muted playsInline>
            <source src={quantumBgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <header>
            <h1>Wesafar's Quantum Economy</h1>
            <h2 style={{fontFamily: 'Muli, sans serif'}}>Introducing the $WER &amp; WER Tokens</h2>
          </header>
          <p style={{fontFamily: 'Muli, sans serif', fontSize: '1rem'}}>
            At the forefront of Wesafar's groundbreaking ecosystem lies The Wer, a decentralized nexus of commerce and innovation.
            Powered by blockchain technology, The Wer facilitates seamless transactions, fuels entrepreneurial ventures, and propels
            continuous advancement within our vibrant digital economy.
          </p>
        </section>

        <div className="cards-container">
          <Card
            title="Transact"
            description="All services within the Wesafar platform are transacted using the WER token, ensuring seamless and secure operations."
            moreInfo="Experience unparalleled security and efficiency with every transaction powered by WER tokens."
            colorIndex={0}
            bgVideo={quantumGreen}
          />
          <Card
            title="Airdrops"
            description="Trippers can receive exclusive Airdrops, offering access to special features and premium content within the ecosystem."
            moreInfo="Stay engaged and unlock unique rewards through periodic airdrops tailored for our active community members."
            colorIndex={1}
            bgVideo={quantumYellow}
          />
          <Card
            title="Rewards"
            description="Earn WER tokens as rewards for your engagement and transactions on the platform, fueling your journey within Wesafar."
            moreInfo="Your participation matters! Accumulate rewards that enhance your experience and open new possibilities within the ecosystem."
            colorIndex={2}
            bgVideo={quantumOrange}
          />
        </div>
      </div>
    </>
  );
};

export default Ecosystem;