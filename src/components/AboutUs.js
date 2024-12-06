import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import t2b from '../img/t2b.webp';
import siphon2 from '../img/Siphon2.png'; // Importing the background image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import WaitlistPortal from './WaitlistPortal';

const SocialEngagementSection = () => {
  const [isWaitlistVisible, setIsWaitlistVisible] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal('.social-fade-top', {
      origin: 'top',
      distance: '100px',
      duration: 1000,
      easing: 'ease',
      reset: true,
    });

    document.body.style.overflowX = 'hidden';
  }, []);

  const handleJoinWaitlist = () => {
    setIsWaitlistVisible(true);
  };

  const handleWhitepaperClick = () => {
    window.location.href = 'https://wesafar.gitbook.io/whitepaper';
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

          .social-engagement-section {
            /* Root styles if needed */
          }

          .social-engagement-section .social-background-container {
            background-image: url(${siphon2});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            min-height: 100vh;
          }

          .social-engagement-section .social-custom-button {
            padding: 10px 20px;
            font-size: 1.25rem;
            font-weight: bold;
            color: deeppink;
            border: 2px solid deeppink;
            border-radius: 15px;
            cursor: pointer;
            background: transparent;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            font-family: 'Montserrat', sans-serif;
          }

          .social-engagement-section .social-custom-button:hover,
          .social-engagement-section .social-custom-button:focus {
            background: deeppink;
            border-color: transparent;
            color: purple;
          }

          .social-engagement-section .social-custom-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .social-engagement-section .social-whitepaper-button {
            display: block;
            align-items: center;
            padding: 10px 20px;
            font-size: 1.25rem;
            font-weight: bold;
            color: white;
            border: none;
            background: transparent;
            cursor: pointer;
            position: relative;
            font-family: 'Montserrat', sans-serif;
          }

          .social-engagement-section .social-whitepaper-button:hover,
          .social-engagement-section .social-whitepaper-button:focus {
            color: #b617a1;
          }

          .social-engagement-section .social-whitepaper-button .icon {
            margin-left: 8px;
          }

          .social-engagement-section .social-heading {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #f0f0f0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }

          .social-engagement-section .social-paragraph {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            color: #ddd;
          }

          .social-engagement-section .social-section {
            background: transparent;
            padding: 20px;
            border-radius: 8px;
          }

          .social-engagement-section .social-grow-on-hover {
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            border-radius: 8px;
            margin-top: 10px;
          }

          .social-engagement-section .social-grow-on-hover:hover {
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            .social-engagement-section .social-custom-button {
              padding: 8px 16px;
              font-size: 1.1rem;
            }

            .social-engagement-section .social-heading {
              font-size: 2rem;
            }
          }

          .social-engagement-section .social-waitlist-slide-in {
            transform: translateY(-100%);
            opacity: 0;
            transition: transform 0.5s ease-out, opacity 0.5s ease-out;
          }

          .social-engagement-section .social-waitlist-slide-in.visible {
            transform: translateY(0);
            opacity: 1;
          }
        `}
      </style>
      <div className="social-engagement-section">
        <div className="social-background-container">
          <section className="social-section text-white p-8 min-h-screen bg-transparent">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left">
              <div className="social-fade-top w-full md:w-1/2 mt-8 md:mt-0">
                <img
                  src={t2b}
                  alt="Tripper 2 Business"
                  className="social-grow-on-hover mx-auto md:mx-0"
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    boxShadow: '0 0 20px 10px rgba(182, 74, 168, 0.8)',
                  }}
                />
              </div>
              <div className="social-fade-top w-full md:w-1/2 mt-4 md:mt-8">
                <h1
                  className="social-heading text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a5c] via-[#ff5cdc] to-[#d93775]"
                  style={{ fontSize: '3rem', textShadow: '0px 0px 8px #d93775' }}
                >
                  New Travel Era
                </h1>
                <p className="social-paragraph" style={{ color: 'white' }}>
                  Welcome to Wesafar, the catalyst for responsible and committed tourism. Discover new destinations, share your travel stories, and earn rewards with WER tokens. Join our community of Trippers and local businesses striving for a sustainable and enriching travel experience.
                </p>
                <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
                  <button
                    className="social-custom-button join-waitlist"
                    onClick={handleJoinWaitlist}
                  >
                    Join the Waitlist
                  </button>
                  <button
                    className="social-whitepaper-button"
                    onClick={handleWhitepaperClick}
                  >
                    Whitepaper
                    <FontAwesomeIcon icon={faDownload} className="icon" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className={`fixed inset-0 z-20 social-waitlist-slide-in ${
            isWaitlistVisible ? 'visible' : ''
          }`}
          style={{
            backgroundColor: '#19072cd1',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          {isWaitlistVisible && (
            <WaitlistPortal setIsWaitlistVisible={setIsWaitlistVisible} />
          )}
        </div>
      </div>
    </>
  );
};

export default SocialEngagementSection;
