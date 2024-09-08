import React, { useState, useEffect } from 'react';
import { FaGoogle, FaApple, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import welogo from '../img/transwesafa.png';
import navbarStarsGif from '../img/navbarStars.gif';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isTripper, setIsTripper] = useState(true);
  const [navbarStyle, setNavbarStyle] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    username: '',
    email: '',
    password: '',
    businessName: '',
  });

  const navigate = useNavigate(); // <-- Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      const opacity = window.scrollY > 50 ? 1 : 0;
      setNavbarStyle({
        background: `linear-gradient(to bottom, rgba(18, 6, 42, ${opacity}), rgba(0, 0, 0, 0))`,
        transition: 'background 0.3s ease-in-out',
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (id === 'whitepaper') {
      window.location.href = 'https://wesafar.gitbook.io/whitepaper';
    } else {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign Up data:', formData);
    } else {
      console.log('Login data:', formData);
      // Navigate to TripperHome.jsx after successful login
      navigate('/tripper/home'); // <-- This will navigate to the TripperHome page
    }

    setFormData({
      name: '',
      firstname: '',
      username: '',
      email: '',
      password: '',
      businessName: '',
    });
    setIsModalOpen(false);
  };

  const toggleUserType = () => {
    setIsTripper(!isTripper);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-30 w-full flex justify-between items-center py-3 px-4">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            ...navbarStyle,
            backgroundSize: '300% 100%',
            animation: 'moveGradient 8s linear infinite',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <img src={welogo} alt="Logo" className="h-14 z-10 relative" />
        <div className="flex items-center space-x-4 z-10 relative">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsSignUp(false);
            }}
            className="text-white font-medium hover:underline flex items-center justify-center"
          >
            <FaUser className="h-6 w-6" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <div className="menu-icon">
              <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
              <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
              <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-20 transform ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        } transition-transform duration-500 ease-in-out`}
        style={{
          backgroundColor: '#22222',
          backgroundImage: `url(${navbarStarsGif})`,
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="flex h-full items-center justify-center text-center mt-8">
          <ul className="space-y-6">
            {[
              'ABOUT US',
              'ECONOMY',
              'PRODUCT',
              'ECOSYSTEM',
              'ROADMAP',
              'TOKENOMICS',
              'WHITEPAPER',
            ].map((item) => (
              <li key={item} className="menu-item">
                <a
                  href={
                    item === 'WHITEPAPER'
                      ? 'https://wesafar.gitbook.io/whitepaper'
                      : `#${item.toLowerCase().replace(' ', '')}`
                  }
                  className="text-xl text-white font-light gradient-text"
                  onClick={(e) => handleMenuItemClick(e, item.toLowerCase().replace(' ', ''))}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-gray bg-opacity-70 overflow-y-auto">
          <div
            className={`p-8 rounded-lg shadow-lg w-full max-w-sm ${
              isTripper ? 'bg-tripper-container' : 'bg-business-container'
            } text-white max-h-screen overflow-y-auto`}
          >
            <div className="flex justify-center mb-6">
              <img src={welogo} alt="Wesafa Logo" className="h-18" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {isSignUp ? 'Sign Up' : 'Log In'}
            </h2>
            <div className="flex justify-center mb-4">
              <label className="inline-flex items-center">
                <span className="mr-2">{isTripper ? 'Tripper' : 'Business Partner'}</span>
                <input
                  type="checkbox"
                  className="toggle-switch"
                  checked={isTripper}
                  onChange={toggleUserType}
                />
              </label>
            </div>
            <form onSubmit={handleSubmit}>
              {isSignUp && isTripper && (
                <>
                  <div className="mb-4">
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      id="firstname"
                      type="text"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      id="username"
                      type="text"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Username"
                      className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}
              <div className="mb-4">
                <input
                  id="email"
                  type="text"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email or Phone"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 relative">
                <input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
            </form>
            <div className="my-4 text-center">or</div>
            <div className="flex flex-col space-y-2">
              <button className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-200 flex items-center justify-center transition-transform transform hover:scale-105">
                <FaGoogle className="h-5 w-5" />
              </button>
              <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 flex items-center justify-center transition-transform transform hover:scale-105">
                <FaApple className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-400 hover:underline"
              >
                {isSignUp
                  ? 'Already have an account? Log In'
                  : "Don't have an account? Sign Up"}
              </button>
            </div>
            <button
              className="mt-4 text-red-400 hover:underline"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: -200% 50%;
          }
        }

        .menu-icon .bar {
          width: 33px;
          height: 4px;
          background-color: gray;
          margin: 6px 0;
          transition: all 0.4s ease-in-out;
        }
        .change:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }
        .change:nth-child(2) {
          opacity: 0;
        }
        .change:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        .menu-item a {
          display: inline-block;
          padding: 5px 10px;
          transition: all 0.5s ease-in-out;
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
          animation: glow 1.5s ease-in-out infinite alternate;
        }

        .menu-item a::before,
        .menu-item a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background: rgba(255, 215, 0, 0.8);
          transition: width 0.3s ease-out;
        }
        .menu-item a::before {
          top: 0;
          left: 50%;
        }
        .menu-item a::after {
          bottom: 0;
          right: 50%;
        }
        .menu-item a:hover::before,
        .menu-item a:hover::after {
          width: 100%;
          left: 0;
          right: 0;
        }

        @keyframes glow {
          0% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
              0 0 30px rgba(182, 2, 2, 0.5), 0 0 40px rgba(129, 24, 174, 0.5);
          }
          100% {
            text-shadow: 0 0 20px rgba(0, 0, 0, 0.843),
              0 0 30px rgba(0, 0, 0, 0.843), 0 0 40px rgba(0, 0, 0, 0.843);
          }
        }

        .toggle-switch {
          appearance: none;
          width: 40px;
          height: 20px;
          background: #4caf50;
          outline: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s;
          position: relative;
        }

        .toggle-switch:checked {
          background: #ff4081;
        }

        .toggle-switch::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          transition: left 0.3s;
        }

        .toggle-switch:checked::before {
          left: 22px;
        }

        .bg-tripper-container {
          background-color: rgba(30, 30, 60, 0.8);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .bg-business-container {
          background-color: rgba(60, 30, 30, 0.8);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
}

export default Navbar;
