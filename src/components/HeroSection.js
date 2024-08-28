import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaMapSigns } from 'react-icons/fa';
import welogo from '../img/transwesafa.png';
import WaitlistPortal from './WaitlistPortal';

function HeroSection() {
  const { ref: logoRef, inView: logoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const typewriterRef = useRef(null);
  const caretRef = useRef(null);
  const [isWaitlistVisible, setIsWaitlistVisible] = useState(false);

  useEffect(() => {
    const typewriter = typewriterRef.current;
    const text = typewriter.textContent;
    typewriter.textContent = '';
    let i = 0;

    function type() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 150);
      }
    }

    type();
  }, []);

  const handleJoinClick = () => {
    setIsWaitlistVisible(true);
  };

  return (
    <>
      <div className="hero-section relative flex items-center justify-center min-h-screen bg-transparent">
        <div className="hero-content text-center p-5 lg:p-20 relative z-10 max-w-full">
          <p className="hero-text font-bold mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="hero-typewriter-wrapper">
              <span
                className="hero-typewriter italic text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a5c] via-[#d93775] to-[#9450a8]"
                ref={typewriterRef}
              >
                Next Adventure
              </span>
              <span className="hero-caret" ref={caretRef}>
                |
              </span>
            </span>
          </p>
          <p className="hero-subtext  text-base sm:text-lg md:text-xl lg:text-2xl mb-6 px-2 sm:px-0">
            Explore, connect, and support local communities with Wesafar.
          </p>
          <div
            className={`flex justify-center ${
              logoInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            } transition-all duration-1000 ease-in-out transform-gpu`}
          >
            <button
              className="hero-button flex items-center justify-center px-8 py-4 rounded-[15px] bg-gradient-to-r from-[#ff6a5c] via-[#d93775] to-[#9450a8] text-white font-bold text-lg transition-transform duration-500 ease-in-out transform-gpu hover:scale-110 shadow-lg"
              onClick={handleJoinClick}
            >
              <FaMapSigns className="mr-3" /> Join the Adventure
            </button>
          </div>
          <img
            src={welogo}
            alt="Wesafar Logo"
            ref={logoRef}
            className={`hero-logo mx-auto mb-6 transition-all duration-1000 ease-in-out transform-gpu ${
              logoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4`}
          />
        </div>
        <div className="hero-bg absolute inset-0 bg-transparent opacity-10 hero-animate-bg-move"></div>
      </div>
      <div
        className={`fixed inset-0 z-20 transform ${
          isWaitlistVisible ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-500 ease-in-out`}
        style={{
          backgroundColor: '#19072cd1', // Adjusted for better transparency control
          backdropFilter: 'blur(10px)', // Adjust the value for more or less blur
          WebkitBackdropFilter: 'blur(10px)', // For Safari support
        }}
      >
        {isWaitlistVisible && <WaitlistPortal setIsWaitlistVisible={setIsWaitlistVisible} />}
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

        .hero-section,
        .hero-text,
        .hero-subtext,
        .hero-button {
          font-family: 'Orbitron', sans-serif;
        }
        
        .hero-subtext{
          color: gray;
        }

        .hero-typewriter-wrapper {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          vertical-align: bottom;
          max-width: 100%;
        }

        .hero-typewriter {
          display: inline-block;
          font-size: 1.5em;
          text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.1);
          letter-spacing: 0.15em;
          white-space: normal;
          word-wrap: break-word;
        }

        .hero-caret {
          display: inline-block;
          font-size: 1.5em;
          color: white;
          animation: hero-blink-caret 0.75s step-end infinite;
          vertical-align: bottom;
        }

        @keyframes hero-blink-caret {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes hero-moveGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .hero-animate-bg-move {
          background-size: 300% 200%;
          animation: hero-moveGradient 15s ease infinite;
        }

        @keyframes hero-levitate {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .hero-logo-levitate {
          animation: hero-levitate 3s ease-in-out infinite;
        }

        .hero-button {
          background-size: 200% 200%;
          animation: hero-button-gradient 2s linear infinite;
        }

        @keyframes hero-button-gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .waitlist-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default HeroSection;
