// src/components/Economy.js

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Eco from '../img/Siphon3.png';
import Siphon8 from '../img/Siphon8.webp';
import Siphon9 from '../img/Siphon9.webp';

const Economy = () => {
  useEffect(() => {
    // Initialize ScrollReveal animations
    ScrollReveal().reveal('.economy-img-container', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });

    ScrollReveal().reveal('.economy-text-container', {
      origin: 'top',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });
  }, []);

  return (
    <section className="economy-section" id="economy">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;700&display=swap');

          .economy-section {
            position: relative;
            padding: 20px;
            margin: 20px;
            border: 3px solid #b01a62;
            border-radius: 10px;
            background: transparent;
            overflow: hidden;
            font-family: 'Muli', sans-serif;
          }

          .economy-section-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            overflow: hidden; /* Ensures background images are clipped */
          }

          @media (min-width: 768px) {
            .economy-section-container {
              flex-direction: row;
              text-align: left;
            }
          }

          .background-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            animation: fade 10s infinite;
            opacity: 0;
            z-index: -1;
          }

          .background-image.image1 {
            background-image: url(${Siphon8});
            animation-delay: 0s;
          }

          .background-image.image2 {
            background-image: url(${Siphon9});
            animation-delay: 2s;
          }

          @keyframes fade {
            0% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }

          .economy-img-container img {
            max-width: 100%;
            border-radius: 10px;
          }

          .economy-text-container h1 {
            font-size: 2.5rem;
            color: #b01a62;
            font-family: 'Muli', sans-serif;
          }

          .economy-text-container p {
            color: white;
            font-family: 'Muli', sans-serif;
          }
        `}
      </style>

      {/* Content */}
      <div className="economy-section-container">
        {/* Background Images */}
        <div className="background-image image1"></div>
        <div className="background-image image2"></div>

        <div className="economy-img-container">
          <img src={Eco} alt="Eco Innovation" />
        </div>
        <div className="economy-text-container">
          <h1>Travel Innovation</h1>
          <p>
            As tourism transforms into a powerful force for change, Wesafar is pioneering a
            travel economy that fosters responsible tourism. By connecting trippers with local
            businesses and promoting sustainable practices, Wesafar aims to create a thriving
            community where every journey counts and every participant benefits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Economy;