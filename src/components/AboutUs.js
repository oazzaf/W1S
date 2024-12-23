import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import t2b from '../img/t2b.webp';
import Siphon7 from '../img/Siphon7.webp'; // Import the Siphon7 image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Changed icon
import WaitlistPortal from './WaitlistPortal';

const SocialEngagementSection = () => {
  const [isWaitlistVisible, setIsWaitlistVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Enhanced reveal for the content (now on the left)
    ScrollReveal().reveal('.slide-in-content', {
      origin: 'left',
      distance: '100px',
      duration: 2500,
      delay: 400,
      easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
      reset: true,
      opacity: 0,
      scale: 0.9,
      rotate: { x: 10, y: 0, z: 0 },
    });

    // Enhanced reveal for the image (now on the right)
    ScrollReveal().reveal('.fade-in-image', {
      origin: 'right',
      distance: '20px',
      duration: 2000,
      easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
      reset: true,
      opacity: 0,
      scale: 0.95,
      rotate: { x: 0, y: -5, z: 0 }, // Slight tilt in opposite direction
    });
  }, []);

  const handleJoinWaitlist = () => {
    setIsWaitlistVisible(true);
  };

  // Parallax tilt effect
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      // Disable on small screens
      if (window.innerWidth < 768) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * 8;
      const rotateY = (x / rect.width) * -8;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTransform = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', resetTransform);
    window.addEventListener('resize', resetTransform);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', resetTransform);
      window.removeEventListener('resize', resetTransform);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Muli:wght@300;400;700&display=swap');

          .about-us-section {
            display: flex;
            flex-direction: row;
            align-items: stretch;
            justify-content: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            border-radius: 15px;
            color: white;
            position: relative;
            overflow: hidden;
          }

          .about-us-content {
            flex: 1;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            background-color: transparent;
            position: relative;
            z-index: 1;
            transition: transform 0.5s ease;
          }

          /* Pseudo-element for background image with reduced opacity */
          .about-us-content::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(${Siphon7}) center/contain no-repeat; /* 'contain' ensures full display */
            opacity: 0.3; /* 70% opacity */
            z-index: -1; /* Behind the content */
            animation: background-pulse 5s ease-in-out infinite;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
          }

          @keyframes background-pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.53); } /* Subtle scaling */
            100% { transform: scale(1); }
          }

          .about-us-image-container {
            flex: 1;
            overflow: hidden;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            position: relative;
            z-index: 5;
          }

          .about-us-image {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Changed from 'fit' to 'cover' for better image scaling */
            transform: scale(1);
            transition: transform 1s ease-in-out;
          }

          .about-us-image-container:hover .about-us-image {
            transform: scale(1.1);
          }

          .about-us-heading {
            font-family: 'Muli', sans-serif;
            font-size: 2.8rem;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 15px;
            position: relative;
            overflow: hidden;
          }

          .about-us-heading::after {
            content: "";
            display: block;
            width: 0px; /* Initial width for animation */
            height: 3px;
            background: linear-gradient(to right, #ff6a5c, #d93775, #9450a8);
            margin-top: 5px;
            border-radius: 2px;
            transform-origin: left; /* Animate from the left side */
            animation: line-grow-shrink 3s ease-in-out infinite; /* Apply animation */
          }

          /* Define the keyframes for the grow-shrink animation */
          @keyframes line-grow-shrink {
            0% {
              width: 0px;
            }
            50% {
              width: 320px; /* Full width */
            }
            100% {
              width: 0px;
            }
          }

          .about-us-paragraph {
            font-family: 'Muli', sans-serif;
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 30px;
            color: #e0e0e0;
          }

          .about-us-buttons {
            display: flex;
            gap: 20px;
            margin-top: 30px;
          }

          .about-us-button {
            position: relative;
            overflow: hidden; /* To contain ripple effect */
            padding: 15px 25px;
            font-size: 1.1rem;
            font-weight: bold;
            border: 0.5px solid #d93775; /* Solid border */
            border-radius: 10px;
            cursor: pointer;
            color: white;
            background: transparent; /* Transparent background */
            box-shadow: 0 0 90px rgba(144, 50, 155, 0.5);
            transition: transform 0.3s ease, box-shadow 0.1s ease, padding 0.3s ease, border-color 0.3s ease;
            /* Added for touch feedback */
            touch-action: manipulation;
          }

          /* New pseudo-element for animated moving border lines */
          .about-us-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 2px solid transparent; /* Initial border */
            border-radius: 10px;
            background: linear-gradient(90deg, #d93775, #ff6a5c, #9450a8, #d93775);
            background-size: 400% 400%;
            animation: borderMove 8s linear infinite;
            -webkit-mask: 
              linear-gradient(#fff 0 0) padding-box, 
              linear-gradient(#fff 0 0);
            mask: 
              linear-gradient(#fff 0 0) padding-box, 
              linear-gradient(#fff 0 0);
            mask-composite: exclude;
            -webkit-mask-composite: destination-out;
            pointer-events: none;
            z-index: -1; /* Place behind the button content */
          }

          @keyframes borderMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .about-us-button::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: width 0.4s ease, height 0.4s ease, opacity 0.8s ease;
          }

          .about-us-button:active::after {
            width: 200px;
            height: 200px;
            opacity: 1;
            transition: 0s;
          }

          .about-us-button:hover {
            transform: scale(1.05) rotate(1deg);
            box-shadow: 0 0 20px rgba(144, 50, 155, 0.7);
            /* Optional: Change border color on hover */
            border-color: #9450a8;
          }

          .about-us-button:active {
            transform: scale(0.98);
            box-shadow: 0 0 15px rgba(144, 50, 155, 0.6);
            /* Optional: Change border color on active */
            border-color: #ff6a5c;
          }

          .download-button {
            display: flex;
            align-items: center;
          }

          .download-icon {
            margin-left: 10px;
            font-size: 1.3rem;
          }

          @media (max-width: 768px) {
            .about-us-section {
              flex-direction: column;
              padding: 20px;
            }

            .about-us-content {
              border-radius: 15px 15px 0 0;
              padding: 20px;
              transform: none !important;
              background-size: cover;
            }

            .about-us-image-container {
              height: 300px; 
              border-radius: 0 0 15px 15px;
            }

            .about-us-heading {
              font-size: 2rem;
            }

            .about-us-paragraph {
              font-size: 1rem;
              text-align: justify;
            }

            /* Make buttons larger and more touch-friendly on mobile */
            .about-us-button {
              padding: 18px 30px; /* Increased padding for better touch targets */
              font-size: 1.2rem; /* Increased font size */
            }

            .about-us-buttons {
              flex-direction: column; /* Stack buttons vertically */
              gap: 15px; /* Increased gap */
              align-items: center; /* Center-align buttons */
            }
          }
        `}
      </style>
      <div className="about-us-section" id='about-us'>
        {/* Content Column */}
        <div className="about-us-content slide-in-content" ref={contentRef}>
          <h1 className="about-us-heading">New Travel Era</h1>
          <p className="about-us-paragraph">
            Welcome to Wesafar, the ethical and equitable social network. We’re revolutionizing online interactions with a decentralized, blockchain-secured platform that values and fairly rewards your contributions while ensuring you maintain full control over your data. Join an authentic and supportive community.
          </p>
          <div className="about-us-buttons">
            <button className="about-us-button" onClick={handleJoinWaitlist}>
              Join Waitlist
            </button>
            <button
              className="about-us-button download-button"
              onClick={() => window.open('https://wesafar.gitbook.io/whitepaper', '_blank')}
            >
              White Paper <FontAwesomeIcon icon={faDownload} className="download-icon" />
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="about-us-image-container fade-in-image">
          <img src={t2b} alt="Tripper to Business" className="about-us-image" />
        </div>
      </div>

      {/* Waitlist Modal */}
      <div
        className={`fixed inset-0 z-20 ${isWaitlistVisible ? 'visible' : 'hidden'}`}
        style={{
          backgroundColor: '#222222',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        {isWaitlistVisible && (
          <WaitlistPortal setIsWaitlistVisible={setIsWaitlistVisible} />
        )}
      </div>
    </>
  );
};

export default SocialEngagementSection;