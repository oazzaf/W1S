import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Eco from '../img/Siphon3.png';

const Economy = () => {
  useEffect(() => {
    ScrollReveal().reveal('.economy-img-container', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });

    ScrollReveal().reveal('.economy-text-container', {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });
  }, []);

  return (
    <>
      <style>
        {`
          /* General layout for the section */
          .economy-section-container {
            display: flex;
            flex-direction: column; /* Default: stack vertically */
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            gap: 30px;
            text-align: center;
            background: transparent;
          }

          @media (min-width: 768px) {
            .economy-section-container {
              flex-direction: row; /* Side-by-side on larger screens */
              text-align: left;
              gap: 50px; /* Larger spacing */
            }
          }

          /* Image container styling */
          .economy-img-container img {
            width: 100%; /* Full width by default */
            max-width: 800px; /* Very large for impact */
            height: auto; /* Maintain aspect ratio */
            border-radius: 20px; /* Rounded corners for a modern look */
            margin: 0 auto;
          }

          @media (min-width: 768px) {
            .economy-img-container {
              flex: 1; /* Allow image to take up half the space */
            }
          }

          /* Text container styling */
          .economy-text-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .economy-text-container h1 {
            font-size: 3rem; /* Large title size */
            color: #ff5cdc; /* Eye-catching color */
            margin-bottom: 20px;
            text-shadow: 0 0 15px rgba(255, 92, 220, 0.8); /* Glow effect */
          }

          .economy-text-container p {
            font-size: 1.25rem; /* Readable size */
            line-height: 1.8;
            color: #ddd; /* Softer white */
          }

          @media (max-width: 480px) {
            .economy-img-container img {
              max-width: 100%; /* Take full screen width on mobile */
            }

            .economy-text-container h1 {
              font-size: 2.5rem; /* Slightly smaller for small screens */
            }

            .economy-text-container p {
              font-size: 1rem; /* Adjust text for readability */
            }
          }
        `}
      </style>
      <section className="economy-section relative text-white" id="economy">
        <div className="economy-section-container max-w-7xl mx-auto">
          {/* Image Container */}
          <div className="economy-img-container">
            <img src={Eco} alt="Eco Innovation" />
          </div>

          {/* Text Container */}
          <div className="economy-text-container">
            <h1>Travel Innovation</h1>
            <p>
              As tourism transforms into a powerful force for change, Wesafar is pioneering a travel economy that fosters responsible tourism. By connecting trippers with local businesses and promoting sustainable practices, Wesafar aims to create a thriving community where every journey counts and every participant benefits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Economy;