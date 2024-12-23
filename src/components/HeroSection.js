import React, { useEffect, useRef, useState } from 'react';
import { FaMapSigns } from 'react-icons/fa';
import WaitlistPortal from './WaitlistPortal';
import SiphonImage from '../img/Siphon.png'; // Import the background image

function HeroSection() {
  const typewriterRef = useRef(null);
  const caretRef = useRef(null);
  const heroRef = useRef(null);
  const [isWaitlistVisible, setIsWaitlistVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    // Typewriter effect
    const typewriter = typewriterRef.current;
    const text = typewriter.textContent;
    typewriter.textContent = '';
    let i = 0;
    function type() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100); // Speed of typing
      }
    }
    type();
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const observerOptions = {
      threshold: 0.5, // 50% visibility
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hero section is at least 50% visible
          setAnimationTriggered(true);
        } else {
          // Hero section is less than 50% visible
          setAnimationTriggered(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(heroElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
    };
  }, []);

  const handleJoinClick = () => {
    setIsWaitlistVisible(true);
  };

  const closeWaitlist = () => {
    setIsWaitlistVisible(false);
  };

  return (
    <>
      <div
        ref={heroRef}
        className={`w1s-hero-section relative flex items-center justify-center min-h-screen bg-cover bg-center
        ${animationTriggered ? 'w1s-show-hero-background' : 'w1s-hide-hero-background'}`}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.0), rgba(25, 25, 112, 0.0)), url(${SiphonImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Hero Content */}
        <div className="w1s-hero-content text-center p-5 lg:p-20 relative z-10 max-w-full">
          {/* Hero Text (Typewriter) */}
          <p
            className={`w1s-hero-text font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            ${animationTriggered ? 'w1s-show-hero-text' : 'w1s-hide-hero-text'}`}
          >
            <span className="w1s-hero-typewriter-wrapper">
              <span
                className="w1s-hero-typewriter italic text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a5c] via-[#d93775] to-[#9450a8]"
                ref={typewriterRef}
              >
                Next Adventure
              </span>
              <span className="w1s-hero-caret" ref={caretRef}>
                |
              </span>
            </span>
          </p>

          {/* Hero Subtext */}
          <p
            className={`w1s-hero-subtext text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 px-2 sm:px-0
            ${animationTriggered ? 'w1s-show-subtext' : 'w1s-hide-subtext'}`}
          >
            Explore, connect, and support local communities with Wesafar and every connection is rewarded.
          </p>

          {/* Join Button */}
          <div
            className={`flex justify-center 
            ${animationTriggered ? 'w1s-show-button' : 'w1s-hide-button'}`}
          >
            <button
              className="w1s-hero-button flex items-center justify-center px-8 py-4 rounded-[15px] bg-gradient-to-r from-[#ff6a5c] via-[#d93775] to-[#9450a8] text-white font-bold text-lg transition-transform duration-500 ease-in-out transform-gpu hover:scale-110 shadow-lg"
              onClick={handleJoinClick}
            >
              <FaMapSigns className="mr-3" /> Join the Adventure
            </button>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <div
        className={`fixed inset-0 z-20 transform ${
          isWaitlistVisible ? 'w1s-translate-y-0' : 'w1s--translate-y-full'
        } transition-transform duration-500 ease-in-out`}
        style={{
          backgroundColor: '#19072cd1',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        {isWaitlistVisible && (
          <>
            {/* Close Button */}
            <button
              onClick={closeWaitlist}
              className="w1s-close-button absolute top-4 right-4 text-white text-xl bg-red-600 p-3 rounded-full hover:bg-red-500"
            >
              &times;
            </button>
            <WaitlistPortal setIsWaitlistVisible={setIsWaitlistVisible} />
          </>
        )}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;700&display=swap');

        .w1s-hero-section,
        .w1s-hero-text,
        .w1s-hero-subtext,
        .w1s-hero-button {
          font-family: 'Muli', sans-serif;
        }

        .w1s-hero-subtext {
          background: linear-gradient(to right, #ffffff, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .w1s-hero-typewriter-wrapper {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          vertical-align: bottom;
          max-width: 100%;
        }

        .w1s-hero-typewriter {
          display: inline-block;
          font-size: 1.5em;
          text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.1);
          letter-spacing: 0.15em;
          white-space: normal;
          word-wrap: break-word;
        }

        .w1s-hero-caret {
          display: inline-block;
          font-size: 1.5em;
          color: white;
          animation: w1s-hero-blink-caret 0.75s step-end infinite;
          vertical-align: bottom;
        }

        @keyframes w1s-hero-blink-caret {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        /* Initial states */
        .w1s-hide-hero-text {
          opacity: 0;
          transform: translateY(-50px); /* Start higher for smoother slide */
        }
        .w1s-hide-hero-subtext {
          opacity: 0;
        }
        .w1s-hide-button {
          opacity: 0;
          transform: translateY(50px); /* Start lower for smoother slide */
        }
        .w1s-hide-hero-background {
          opacity: 0;
          transition: opacity 1.5s ease-in;
        }

        /* Shown states */
        .w1s-show-hero-background {
          opacity: 1;
          transition: opacity 1.5s ease-in;
        }
        .w1s-show-hero-text {
          opacity: 1;
          transform: translateY(0);
          transition:
            transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
            opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
        }
        .w1s-show-subtext {
          opacity: 1;
          transition: opacity 2.0s ease-in-out 2.0s; /* Fades in after hero text and button */
        }
        .w1s-show-button {
          opacity: 1;
          transform: translateY(0);
          transition:
            transform 0.8s ease-in-out 0.4s,
            opacity 0.8s ease-in-out 0.4s;
        }

        /* Pulse animation for larger screens */
        .w1s-hero-section {
          animation: w1s-background-pulse 7s ease-in-out infinite;
        }
        @keyframes w1s-background-pulse {
          0%,
          100% {
            background-size: 100%;
          }
          50% {
            background-size: 107%;
          }
        }

        @media (max-width: 640px) {
          .w1s-hero-section {
            animation: w1s-background-pulse-mobile 17s ease-in-out infinite;
          }
          @keyframes w1s-background-pulse-mobile {
            0%,
            100% {
              background-size: 180%;
            }
            50% {
              background-size: 305%;
            }
          }
        }

        /* Additional class transformations */
        .w1s-translate-y-0 {
          transform: translateY(0);
        }
        .w1s--translate-y-full {
          transform: translateY(-100%);
        }

        .w1s-close-button {
          /* Add any specific styles for the close button if needed */
        }
      `}</style>
    </>
  );
}

export default HeroSection;