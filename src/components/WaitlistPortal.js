import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import navbarStarsGif from '../img/navbarStars.gif';

function WaitlistPortal({ setIsWaitlistVisible }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isTripper, setIsTripper] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleBusinessNameChange = (e) => {
    setBusinessName(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (isTripper && (!firstName || !lastName)) {
      setError('Please enter your first and last name.');
      return;
    }

    if (!isTripper && !businessName) {
      setError('Please enter the name of your business.');
      return;
    }

    try {
      const response = await fetch('https://api.wesafar.com/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName, lastName, businessName, isTripper }),
      });

      const data = await response.json();
      console.log('Server response:', data); // Log the server response
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setFirstName('');
        setLastName('');
        setBusinessName('');
      } else {
        setError(data.error);
      }
    } catch (err) {
      console.error('Fetch error:', err); // Log fetch error
      setError('An error occurred. Please try again.');
    }
  };

  const handleClose = () => {
    setIsWaitlistVisible(false);
  };

  const handleFormSwitch = () => {
    setIsTripper(!isTripper);
    setError('');
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 flex items-center justify-center bg-[#19072c8c] bg-no-repeat bg-center bg-cover transition-transform duration-500 ease-in-out transform translate-y-0"
        style={{
          backgroundImage: `url(${navbarStarsGif})`,
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
        }}
      >
        <div
          className={`waitlist-content relative bg-gray-800 bg-opacity-40 p-8 rounded-lg text-center text-white ${isTripper ? 'tripper-box-shadow' : 'business-box-shadow'}`}
          style={{
            width: '85%',
            maxWidth: '500px',
          }}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            style={{
              fontSize: '24px',
            }}
          >
            <IoCloseSharp />
          </button>
          <h1 className={`text-3xl mb-4 ${isTripper ? 'gradient-text' : 'business-gradient-text'}`}>
            {isTripper ? 'Join the Tripper Waitlist' : 'Join the Business Partners Waitlist'}
          </h1>
          <p className="mb-8 text-center">
            {isTripper
              ? 'Be the first to experience the revolution in responsible and engaged tourism. Sign up for early access and stay updated!'
              : 'Partner with us to revolutionize responsible and engaged tourism. Sign up now to offer your services and attract new customers!'}
          </p>
          {isSubmitted ? (
            <div className="submitted-message text-green-400 text-center">
              <h2 className="text-2xl mb-4">Thank You!</h2>
              <p>You have successfully joined the waitlist. We will keep you updated with the latest news.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md">
              {isTripper ? (
                <>
                  <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder="Enter your first name"
                    className="mb-4 p-2 w-full text-black rounded input-field"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    placeholder="Enter your last name"
                    className="mb-4 p-2 w-full text-black rounded input-field"
                  />
                </>
              ) : (
                <input
                  type="text"
                  value={businessName}
                  onChange={handleBusinessNameChange}
                  placeholder="Enter your business name"
                  className="mb-4 p-2 w-full text-black rounded input-field"
                />
              )}
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="mb-4 p-2 w-full text-black rounded input-field"
              />
              {error && <p className="text-red-400 mb-4">{error}</p>}
              <button type="submit" className={`call-to-action-button1 btn-orbitron ${isTripper ? '' : 'business-join-button'}`}>
                Join Waitlist
              </button>
            </form>
          )}
          <button
            onClick={handleFormSwitch}
            className={`switch-button btn-orbitron mt-4 text-sm ${isTripper ? 'business-join-button' : 'business-switch-button'}`}
          >
            {isTripper ? 'Switch to Business Partner' : 'Switch to Tripper'}
          </button>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        .gradient-text {
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 0.5s ease-in-out infinite alternate;
        }
        @keyframes glow {
          0% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(182, 2, 2, 0.5), 0 0 40px rgba(129, 24, 174, 0.5); }
          100% { text-shadow: 0 0 20px rgba(0, 0, 0, 0.843), 0 0 30px rgba(0, 0, 0, 0.843), 0 0 40px rgba(0, 0, 0, 0.843); }
        }
        .business-gradient-text {
          background: linear-gradient(90deg, #1c92d2, #3a3fda);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: business-glow 0.5s ease-in-out infinite alternate;
        }
        @keyframes business-glow {
          0% { text-shadow: 0 0 20px rgba(28, 146, 210, 0.5), 0 0 30px rgba(58, 63, 218, 0.5), 0 0 40px rgba(58, 63, 218, 0.5); }
          100% { text-shadow: 0 0 20px rgba(0, 0, 0, 0.843), 0 0 30px rgba(0, 0, 0, 0.843), 0 0 40px rgba(0, 0, 0, 0.843); }
        }
        .btn-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        .call-to-action-button1 {
          background: linear-gradient(to right, #cf2351, #3c3f8f);
          padding: 10px 20px;
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .call-to-action-button1:hover {
          background: linear-gradient(to right, #3c3f8f, #cf2351);
        }
        .business-join-button {
          background: linear-gradient(to right, #1c92d2, #3a3fda);
        }
        .business-join-button:hover {
          background: linear-gradient(to right, #3a3fda, #1c92d2);
        }
        .switch-button {
          background: linear-gradient(to right, #1c92d2, #3a3fda);
          padding: 10px 20px;
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .switch-button:hover {
          transform: scale(1.05);
          background: linear-gradient(to right, #3a3fda, #1c92d2);
        }
        .business-switch-button {
          background: linear-gradient(to right, #cf2351, #3c3f8f);
        }
        .business-switch-button:hover {
          background: linear-gradient(to right, #3c3f8f, #cf2351);
        }
        .tripper-box-shadow {
          box-shadow: 0 0 20px 10px rgba(255, 20, 147, 0.7);
        }
        .business-box-shadow {
          box-shadow: 0 0 20px 10px rgba(20, 107, 174, 0.5);
        }
        .input-field {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          padding: 10px 15px;
          color: white;
          font-size: 1rem;
          transition: background 0.3s ease, border 0.3s ease;
        }
        .input-field:focus {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.4);
          outline: none;
        }
        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </>
  );
}

export default WaitlistPortal;
