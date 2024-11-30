import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaMapSigns } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import xIcon from '../img/x.png'; // Ensure this path is correct
import WaitlistPortal from './WaitlistPortal';

function HeroSection() {
  const { ref: iconRef, inView: iconInView } = useInView({
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
        {/* Transparent Background */}
        <div className="absolute inset-0 bg-transparent z-1"></div>

        {/* Hero Content */}
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
          <p className="hero-subtext text-base sm:text-lg md:text-xl lg:text-2xl mb-6 px-2 sm:px-0">
            Explore, connect, and support local communities with Wesafar and every connection is rewarded.
          </p>
          <div
            className={`flex justify-center ${
              iconInView
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
          <div
            ref={iconRef}
            className={`social-icons-container mt-6 transition-all duration-1000 ease-in-out transform-gpu ${
              iconInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a href="https://www.youtube.com/@Wesafar" className="social-icon mx-2">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://x.com/wesafar?s=21&t=gR3jEokFOR3jTIpLFScRUg" className="mx-1">
              <img src={xIcon} alt="X" className="x-icon" />
            </a>
            <a href="https://www.instagram.com/wesafar.app?igsh=dThzbmNhbGI3Yml6" className="social-icon mx-6">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.tiktok.com/@wesafar?_t=8ngvcvXQJdd&_r=1" className="social-icon mx-2">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
        <div className="hero-bg absolute inset-0 bg-transparent opacity-10 hero-animate-bg-move"></div>
      </div>
      <div
        className={`fixed inset-0 z-20 transform ${
          isWaitlistVisible ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-500 ease-in-out`}
        style={{
          backgroundColor: '#19072cd1',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
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

        .hero-subtext {
          background: linear-gradient(to right, #ffffff, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
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

        .social-icons-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1rem;
        }

        .social-icon {
          font-size: 2rem !important; /* Force larger size for FontAwesome icons */
          transition: color 0.3s ease;
        }

        .x-icon {
          width: 55px !important; /* Force larger size */
          height: 40px !important; /* Force larger size */
          margin-bottom: 0.6rem;
          border-radius: 50%;
          filter: invert(1);
        }

        .social-icon:hover {
          color: #b617a1;
        }

        .x-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          filter: invert(1);
        }

        .hero-animate-bg-move {
          background-size: 300% 200%;
          animation: hero-moveGradient 15s ease infinite;
        }

        @keyframes hero-moveGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  );
}

export default HeroSection;