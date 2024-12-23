import React, { useEffect, useState } from 'react';
import dmRoadmapImage from '../img/rm/dmRoadmap.png';
import roadBgVideo from '../video/faqBg.mp4'; // Import the video
import { 
  FaRocket, 
  FaCogs, 
  FaUsers, 
  FaGlobe, 
  FaLightbulb, 
  FaChartLine, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaStore 
} from 'react-icons/fa'; // Import all necessary icons

const points = [
  { left: '7.7%', top: '60%' },
  { left: '18%', top: '27%' },
  { left: '28.4%', top: '60%' },
  { left: '38.7%', top: '27.8%' },
  { left: '48.9%', top: '63.6%' },
  { left: '59.1%', top: '29.7%' },
  { left: '69.4%', top: '67%' },
  { left: '79.7%', top: '30.7%' },
  { left: '90%', top: '67%' },
];

const colors = [
  '#cf2351',
  '#c2255b',
  '#b62865',
  '#aa2b70',
  '#9e2d7b',
  '#933186',
  '#873491',
  '#7a379c',
  '#3c3f8f',
];

const phases = [
  {
    title: 'Phase 1: Launch of Wesafar WebApp (Q3 2024)',
    details: [
      'Open pre-registration for Trippers and Business Partners.',
      'Launch key features: Home, Search, Posting, Messaging, and Profile pages.',
      'Conduct beta testing and gather user feedback.',
      'Official launch preparation.',
    ],
    icon: <FaRocket />,
  },
  {
    title: 'Phase 2: Development and Marketing (Q4 2024)',
    details: [
      'Develop the initial version of the Wesafar app.',
      'Execute marketing campaigns to raise awareness.',
      'Collaborate with travel influencers and local partners.',
      'Expand the community with outreach events and partnerships.',
    ],
    icon: <FaCogs />,
  },
  {
    title: 'Phase 3: Wesafar V.0 Launch (Q1 2025)',
    details: [
      'Launch AI-powered recommendations, personalized profiles, and content sharing.',
      'Initial deployment in Paris.',
      'Encourage community engagement and gather feedback for improvements.',
    ],
    icon: <FaUsers />,
  },
  {
    title: 'Phase 4: Business Partner Features (Q2 2025)',
    details: [
      'Introduce features for business partners: profiles, booking tools, and messaging.',
      'Deploy the platform in Marrakesh.',
      'Promote business opportunities through analytics and tools.',
    ],
    icon: <FaGlobe />,
  },
  {
    title: 'Phase 5: Enhanced Travel Planning (Q3 2025)',
    details: [
      'Launch advanced travel planning tools, including reviews, maps, and notifications.',
      'Expand to Casablanca.',
      'Enhance user experience with tutorials and promotional campaigns.',
    ],
    icon: <FaLightbulb />, // Represents innovation and new features
  },
  {
    title: 'Phase 6: Quests and Analytics (Q4 2025)',
    details: [
      'Introduce reward-based quests for Trippers.',
      'Provide advanced analytics tools for business partners.',
      'Expand to the United States.',
      'Foster community engagement through events and feedback.',
    ],
    icon: <FaChartLine />, // Represents analytics and growth
  },
  {
    title: 'Phase 7: Multimedia & Support (Q1 2026)',
    details: [
      'Enable multimedia content uploads for business partners.',
      'Deploy 24/7 customer support systems.',
      'Expand the platform to Dubai.',
    ],
    icon: <FaMobileAlt />, // Represents mobile support and multimedia
  },
  {
    title: 'Phase 8: Advanced Planning & Virtual Events (Q2 2026)',
    details: [
      'Launch virtual event hosting and advanced search tools.',
      'Expand to Asia and reward loyal users with token airdrops.',
      'Enhance community engagement through targeted rewards.',
    ],
    icon: <FaShieldAlt />, // Represents security and advanced features
  },
  {
    title: 'Phase 9: WER Token & Marketplace (Q3-Q4 2026)',
    details: [
      'Launch WER tokens for purchases and sponsorships.',
      'Expand globally, including Morocco, Central Africa, and Asia.',
      'Integrate immersive experiences through the Wesafar Metaverse.',
    ],
    icon: <FaStore />, // Represents marketplace and commerce
  },
];

const ImageGallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pointStyle = (left, top, index) => ({
    position: 'absolute',
    left: isMobile ? `${parseFloat(left) - 1.4}%` : left,
    top: isMobile ? `${parseFloat(top) - 5}%` : top,
    width: isMobile ? '20px' : '40px',
    height: isMobile ? '20px' : '40px',
    borderRadius: '50%',
    background: colors[index],
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow:
      selectedIndex === index
        ? `0 0 20px 4px ${colors[index]}, 0 0 40px 8px ${colors[index]}`
        : `0 0 10px 2px ${colors[index]}`,
    transform: hoveredIndex === index || selectedIndex === index ? 'scale(1.5)' : 'scale(1)',
    cursor: 'pointer',
    zIndex: 5,
  });

  const handlePointClick = (index) => {
    if (index === selectedIndex) return;
    setAnimationPhase(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setAnimationPhase(false);
    }, 300); // Match duration with CSS animation
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: `7px solid ${colors[selectedIndex]}`,
    background: 'rgba(55, 5, 55, 0.2)', // Enhanced glassmorphism
    backdropFilter: 'blur(15px)', // Increased blur effect
    borderRadius: '20px',
    padding: '20px',
    margin: '30px',
    width: isMobile ? '90%' : '85%',
    color: 'white',
    fontFamily: '"Exo", sans-serif', // Futuristic font
    boxShadow: `0 0 25px 6px ${colors[selectedIndex]}`,
    animation: animationPhase ? 'fadeOut 0.5s ease-in-out' : 'fadeIn 0.5s ease-in-out',
    transition: 'all 0.5s ease-in-out',
  };

  const titleStyle = {
    fontSize: '2.5em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: '"Muli", sans-serif', // Futuristic font
    textAlign: 'center',
    color: colors[selectedIndex],
    backgroundImage: 'linear-gradient(90deg, #ff00ff, #ff6a5c, #00ffff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    marginBottom: '20px',
    animation: 'textGradient 3s ease infinite',
  };

  const detailStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2em',
    marginBottom: '1em',
    lineHeight: '1.6',
    fontFamily: '"Exo", sans-serif',
    opacity: 0,
    animation: 'fadeInDetail 0.5s forwards',
  };

  const bulletStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: colors[selectedIndex],
    marginRight: '12px',
    flexShrink: 0,
  };

  const currentPhase = phases[selectedIndex] || phases[0];

  return (
    <>
      {/* Add animations inside a <style> tag */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(-20px);
            }
          }

          @keyframes textGradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes fadeInDetail {
            to {
              opacity: 1;
              transform: translateX(0);
            }
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
          }

          .detail-animate:nth-child(1) {
            animation-delay: 0.1s;
          }

          .detail-animate:nth-child(2) {
            animation-delay: 0.2s;
          }

          .detail-animate:nth-child(3) {
            animation-delay: 0.3s;
          }

          .detail-animate:nth-child(4) {
            animation-delay: 0.4s;
          }
        `}
      </style>

      <div
        className="relative w-full h-auto flex flex-col items-center justify-center bg-transparent"
        id="roadmap"
      >
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={roadBgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-[#000000] opacity-70 z-1"></div>
        <h2
          style={{
            fontSize: isMobile ? '50px' : '70px',
            fontFamily: '"Orbitron", sans-serif',
            zIndex: '3',
            color: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #f47e37, #e6433e, #cf2351)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            animation: 'textGradient 3s ease infinite',
          }}
        >
          Roadmap
        </h2>
        <div className="relative w-full h-auto" style={{ zIndex: 5 }}>
          <img
            src={dmRoadmapImage}
            alt="dmRoadmap"
            className="w-full h-auto object-cover"
          />
          {points.map((point, index) => (
            <div
              key={index}
              style={pointStyle(point.left, point.top, index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handlePointClick(index)}
              title={phases[index]?.title || `Phase ${index + 1}`}
            />
          ))}
        </div>
        <div style={cardStyle}>
          <h3 style={titleStyle}>
            {currentPhase.icon} {currentPhase.title}
          </h3>
          <ul style={{ textAlign: 'left', padding: 0, listStyle: 'none', width: '100%' }}>
            {currentPhase.details.map((detail, index) => (
              <li key={index} className="detail-animate" style={detailStyle}>
                <span style={bulletStyle}></span> {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;