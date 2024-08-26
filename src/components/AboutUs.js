import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import t2b from '../img/t2b.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import WaitlistPortal from './WaitlistPortal';

const SocialEngagementSection = () => {
  const [isWaitlistVisible, setIsWaitlistVisible] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal('.fade-top', {
      origin: 'top',
      distance: '100px',
      duration: 1000,
      easing: 'ease',
      reset: true
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
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;700&display=swap');

          .custom-button {
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
          }

          .custom-button:hover, .custom-button:focus {
            background: deeppink;
            border-color: transparent;
            color: purple;
          }

          .custom-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .whitepaper-button {
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
          }

          .whitepaper-button:hover, .whitepaper-button:focus {
            color: #b617a1;
          }

          .whitepaper-button .icon {
            margin-left: 8px;
          }

          h1 {
            font-family: 'Orbitron', sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #f0f0f0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }

          p {
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            color: #ddd;
          }

          section {
            background-color: transparent;
            padding: 20px;
            border-radius: 8px;
          }

          img {
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            border-radius: 8px;
            margin-top: 10px;
          }

          img:hover {
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            .custom-button {
              padding: 8px 16px;
              font-size: 1.1rem;
            }

            h1 {
              font-size: 2rem;
            }
          }

          .waitlist-slide-in {
            transform: translateY(-100%);
            opacity: 0;
            transition: transform 0.5s ease-out, opacity 0.5s ease-out;
          }

          .waitlist-slide-in.visible {
            transform: translateY(0);
            opacity: 1;
          }
        `}
      </style>
      <section className="text-white p-8 min-h-screen bg-gradient-to-bl from-purple-950 to-black via-black" id="aboutus">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left">
          <div className="fade-top w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={t2b}
              alt="Tripper 2 Business"
              className="grow-on-hover mx-auto md:mx-0"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                boxShadow: '0 0 20px 10px rgba(182, 74, 168, 0.8)',
              }}
            />
          </div>
          <div className="fade-top w-full md:w-1/2 mt-4 md:mt-8">
            <h1 className='' style={{fontSize: '3rem', color: '#fff', textShadow: '0px 0px 8px #b64aa8',}}>New Travel Era</h1>
            <p style={{color: '#fff', fontFamily: 'Poppins' }}>
              Welcome to Wesafar, the catalyst for responsible and committed tourism. Discover new destinations, share your travel stories, and earn rewards with WER tokens. Join our community of Trippers and local businesses striving for a sustainable and enriching travel experience.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <button  style={{ fontFamily: 'Orbitron' }}
                className="custom-button join-waitlist"
                onClick={handleJoinWaitlist}
              >
                Join the Waitlist
              </button>
              <button
                 style={{ fontFamily: 'Orbitron' }}
                className="whitepaper-button"
                onClick={handleWhitepaperClick}
              >
                Whitepaper
                <FontAwesomeIcon icon={faDownload} className="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`fixed inset-0 z-20 waitlist-slide-in ${isWaitlistVisible ? 'visible' : ''}`}
        style={{
          backgroundColor: '#19072cd1', // Adjusted for better transparency control
          backdropFilter: 'blur(10px)', // Adjust the value for more or less blur
          WebkitBackdropFilter: 'blur(10px)', // For Safari support
        }}
      >
        {isWaitlistVisible && <WaitlistPortal setIsWaitlistVisible={setIsWaitlistVisible} />}
      </div>
    </>
  );
};

export default SocialEngagementSection;
