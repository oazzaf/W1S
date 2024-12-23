// src/components/Economy.js

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Eco from '../img/Siphon3.png';
import Siphon8 from '../img/Siphon8.webp';
import Siphon9 from '../img/Siphon9.webp';

const Economy = () => {
  useEffect(() => {
    // Initialize ScrollReveal with global settings
    ScrollReveal({
      reset: true, // Animations occur every time the element comes into view
      distance: '150px',
      duration: 1500,
      easing: 'ease-out',
      viewFactor: 0.2, // Percentage of element visible before animation
    });

    // Reveal Eco Image Container
    ScrollReveal().reveal('.eco-img-container', {
      origin: 'bottom',
      opacity: 0,
      scale: 0.9,
      interval: 100,
      delay: 200,
    });

    // Reveal Eco Text Container
    ScrollReveal().reveal('.eco-text-container', {
      origin: 'left',
      opacity: 0,
      scale: 0.9,
      interval: 100,
      delay: 400,
    });
  }, []);

  return (
    <section className="eco-section" id="economy">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;600;800&display=swap');

          /* Root Section Styling */
          .eco-section {
            position: relative;
            padding: 60px 20px;
            margin: 40px auto;
            max-width: 1200px;
            border-radius: 20px;
            overflow: hidden;
            font-family: 'Muli', sans-serif; /* Applying Muli Font */
            background-color: transparent;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
          }

          /* Animated Background Images */
          .eco-section::before {
            content: '';
            position: absolute;
            top: -10%;
            left: -10%;
            width: 120%;
            height: 120%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            animation: fadeBackgroundEco 7s ease-in-out infinite;
            opacity: 0.5;
            z-index: 1;
          }

          @keyframes fadeBackgroundEco {
            0% {
              background-image: url(${Siphon8});
            }
            50% {
              background-image: url(${Siphon9});
            }
            100% {
              background-image: url(${Siphon8});
            }
          }

          /* Color Overlay */
          .eco-section::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(31,31,46,0.9) 0%, rgba(31,31,46,0.5) 100%);
            z-index: -2;
            border-radius: 20px;
          }

          /* Container for Content */
          .eco-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            z-index: 1;
            background: transparent;
          }

          /* Responsive Layout */
          @media (min-width: 1024px) {
            .eco-container {
              flex-direction: row;
              text-align: left;
            }
          }

          /* Enhanced Eco Image Container */
          .eco-img-container {
            position: relative;
            width: 100%;
            max-width: 500px;
            margin-bottom: 30px;
            perspective: 1000px;
            border-radius: 20px;
            overflow: hidden;
            transition: transform 0.6s ease;
            z-index: 2;
          }

          @media (min-width: 1024px) {
            .eco-img-container {
              margin-bottom: 0;
              margin-right: 40px;
            }
          }

          /* 3D Tilt Effect */
          .eco-img-container:hover {
            transform: rotateY(10deg) rotateX(5deg);
          }

          /* Image Styling with Glow and Shadow */
          .eco-img-container img {
            width: 100%;
            height: auto;
            border-radius: 20px;
            transition: transform 0.8s ease, box-shadow 0.8s ease;
            backface-visibility: hidden;
            background: linear-gradient(
                 190deg,
                 rgba(0, 0, 0, 0.8),
                 rgba(255, 106, 92, 0.1),
                 rgba(0, 0, 0, 0.8));                 
          }

          .eco-img-container:hover img {
            transform: scale(1.05);
            box-shadow: 0 25px 50px rgba(255, 255, 255, 0.4);
          }

          /* Text Container Styling */
          .eco-text-container {
            max-width: 600px;
            color: #ffffff;
            font-family: 'Muli', sans-serif; /* Ensuring Muli Font */
          }

          /* Heading Styling */
          .eco-text-container h1 {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 20px;
            color: white;
            text-transform: uppercase;
            letter-spacing: 2px;
            position: relative;
            display: inline-block;
            font-family: 'Muli', sans-serif; /* Ensuring Muli Font */
          }

          /* Underline Animation */
          .eco-text-container h1::after {
            content: '';
            position: absolute;
            width: 50px;
            height: 4px;
            background: linear-gradient(90deg, #ff6a5c, #d93775, #9450a8);
            bottom: -10px;
            left: 0;
            border-radius: 2px;
            animation: underlinePulseEco 3s ease-in-out infinite;
          }

          @keyframes underlinePulseEco {
            0%, 100% {
              width: 50px;
            }
            50% {
              width: 380px;
            }
          }

          /* Paragraph Styling */
          .eco-text-container p {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #e0e0e0;
            margin-bottom: 25px;
            font-family: 'Muli', sans-serif; /* Ensuring Muli Font */
          }
        `}
      </style>

      {/* Content */}
      <div className="eco-container">
        {/* Eco Image */}
        <div className="eco-img-container">
          <img src={Eco} alt="Eco Innovation in Travel Economy" />
        </div>

        {/* Text Content */}
        <div className="eco-text-container">
          <h1>Innovate Travel Economy</h1>
          <p>
            In a world where tourism is evolving into a powerful agent for positive change, Wesafar stands at the forefront of this transformation. We're redefining the travel economy by fostering responsible tourism, connecting adventurers with local businesses, and promoting sustainable practices. Our mission is to cultivate a thriving community where every journey not only enriches the traveler but also empowers the destinations they visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Economy;