import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Eco from '../img/Eco.png';

const Economy = () => {
  useEffect(() => {
    ScrollReveal().reveal('.economy-img-container', {
      origin: 'top',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true
    });

    ScrollReveal().reveal('.economy-text-container', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true
    });
  }, []);

  return (
    <>
      <style>
        {`
          .economy-custom-button {
            padding: 10px 20px;
            font-size: 1rem;
            font-weight: bold;
            color: white;
            border: 4px solid white;
            border-radius: 25px;
            cursor: pointer;
            background: transparent;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
          }

          .economy-custom-button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300%;
            height: 300%;
            background: radial-gradient(circle, transparent, #6e3bbc, #ff4f8b);
            transition: all 0.5s ease;
            display: block;
            opacity: 0;
            z-index: -1;
          }

          .economy-custom-button:hover::before {
            opacity: 1;
            width: 0;
            height: 0;
          }

          .economy-custom-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .economy-section-container {
            border: 2px solid #d8307c87; /* Light red border */
            border-radius: 8px; /* Rounded corners */
            padding: 50px;
          }
        `}
      </style>
      <section className="economy-section  bg-transparent text-white p-8" id="economy">
        <div className="economy-section-container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left" style={{ marginBottom: '100px' }}>
          <div className="economy-img-container w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={Eco}
              alt="Tripper 2 Business"
              className="grow-on-hover mx-auto md:justify-end"
              style={{
                width: '80%',
                maxWidth: '800px',
                height: 'auto'
              }}
            />
          </div>
          <div className="economy-text-container w-full md:w-1/2 mt-4 md:mt-8">
            <h1 className='' style={{fontSize: 'auto', color: '#ff9500', textShadow: '0px 0px 8px #ff9500',
            }}> Travel Innovation</h1>
            <p style={{fontFamily: 'Poppins'}}>
            As tourism transforms into a powerful force for change, Wesafar is pioneering a travel economy that fosters responsible tourism. By connecting trippers with local businesses and promoting sustainable practices, Wesafar aims to create a thriving community where every journey counts and every participant benefits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Economy;