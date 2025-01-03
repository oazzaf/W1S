import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import welogo from '../img/transwesafa.png';
import navbarStarsGif from '../img/navbarStars.gif';
import Login from '../components/login/Login'; // <-- Import our new Login component

function Navbar() {
  // Menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isTripper, setIsTripper] = useState(true);

  // Navbar scroll background
  const [navbarStyle, setNavbarStyle] = useState({});

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

  // Handle menu item clicks
  const handleMenuItemClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (id === 'whitepaper') {
      // Example: direct link to whitepaper
      window.location.href = 'https://wesafar.gitbook.io/whitepaper';
    } else {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with ID "${id}" not found.`);
      }
    }
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
          {/* Open the Login modal (defaults to Log In view) */}
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsSignUp(false);
            }}
            className="text-white font-medium hover:underline flex items-center justify-center"
          >
            <FaUser className="h-6 w-6" />
          </button>

          {/* Toggle the fullscreen menu */}
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

      {/* Fullscreen menu */}
      <div
        className={`fixed inset-0 z-20 transform ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        } transition-transform duration-500 ease-in-out`}
        style={{
          backgroundColor: '#222222',
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
                      : `#${item.toLowerCase().replace(/\s+/g, '-')}`
                  }
                  className="text-xl text-white font-light gradient-text"
                  onClick={(e) =>
                    handleMenuItemClick(
                      e,
                      item.toLowerCase().replace(/\s+/g, '-')
                    )
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Render the Login modal conditionally */}
      {isModalOpen && (
        <Login
          onClose={() => setIsModalOpen(false)}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
          isTripper={isTripper}
          setIsTripper={setIsTripper}
        />
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
              0 0 30px rgba(182, 2, 2, 0.5),
              0 0 40px rgba(129, 24, 174, 0.5);
          }
          100% {
            text-shadow: 0 0 20px rgba(0, 0, 0, 0.843),
              0 0 30px rgba(0, 0, 0, 0.843),
              0 0 40px rgba(0, 0, 0, 0.843);
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;