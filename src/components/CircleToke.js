import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const CircleSegment = ({
  stroke,
  strokeWidth,
  percentage,
  startOffset,
  onHover,
  onHoverOut,
  onClick,
  isActive
}) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const lengthOfArc = (percentage / 100) * circumference;
  const offset = circumference - startOffset;

  const animationProps = useSpring({
    from: { strokeDashoffset: circumference },
    to: { strokeDashoffset: offset },
    config: { duration: 1200 },
  });

  return (
    <animated.circle
      fill="none"
      stroke={`url(#gradient-${stroke})`}
      cx="100"
      cy="100"
      r={radius}
      strokeWidth={strokeWidth}
      strokeDasharray={`${lengthOfArc} ${circumference - lengthOfArc}`}
      style={animationProps}
      strokeDashoffset={animationProps.strokeDashoffset}
      transform="rotate(-90 100 100)"
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
      onTouchStart={onHover}
      onTouchEnd={onHoverOut}
      onClick={onClick}
      filter={isActive ? 'url(#glow-filter)' : ''}
      cursor="pointer" // Gives a visual cue that it's clickable
    />
  );
};

const Tokenomics = () => {
  const distributions = [
    { percentage: 30, title: 'Rewards for Trippers', color: '#f47e37', description: 'Rewards for active travelers.' },
    { percentage: 25, title: 'User Incentives', color: '#e6433e', description: 'Incentives for engagement.' },
    { percentage: 20, title: 'Development Fund', color: '#cf2351', description: 'Innovation and progress.' },
    { percentage: 15, title: 'Community Governance', color: '#b01a62', description: 'Support for decision-making.' },
    { percentage: 10, title: 'Strategic Partnerships', color: '#872871', description: 'Building strong alliances.' },
  ];

  // Hover state
  const [activeIndex, setActiveIndex] = useState(2);
  // Selected (clicked) state
  const [selectedIndex, setSelectedIndex] = useState(null);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  let cumulativeOffset = 0;

  // Decide which index’s information to display:
  // If a segment is selected, show that.
  // Otherwise, show whichever segment is hovered.
  const displayIndex = selectedIndex !== null ? selectedIndex : activeIndex;

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
          
          .info-overlay {
            font-family: 'Orbitron', sans-serif;
            text-shadow: 0 0 6px rgba(255, 255, 255, 0.1);
            animation: glow-animation 1.5s infinite alternate;
          }

          @keyframes glow-animation {
            from {
              text-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
            }
            to {
              text-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
            }
          }

          @media (max-width: 768px) {
            .info-overlay {
              font-size: 16px;
            }
          }

          @media (max-width: 429px) {
            .info-overlay {
              font-size: 16px;
            }
          }
        `}
      </style>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: 'transparent',
          color: 'white',
          position: 'relative',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            backgroundImage: 'linear-gradient(to right, #ff6a5c, #ff5cdc, #d93775)',
            textShadow: '0px 0px 6px rgba(255, 255, 255, 0.1)',
          }}
        >
          Token Distribution
        </h1>

        <svg
          width="90vw"
          height="90vw"
          viewBox="0 0 200 200"
          style={{ maxWidth: '400px', maxHeight: '400px' }}
        >
          <defs>
            {distributions.map((dist, index) => (
              <linearGradient
                key={index}
                id={`gradient-${dist.color}`}
                gradientTransform="rotate(90)"
              >
                <stop offset="100%" stopColor={dist.color} />
                <stop offset="100%" stopColor={dist.color} stopOpacity="1" />
              </linearGradient>
            ))}
            <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {distributions.map((dist, index) => {
            // We mark a segment "active" if it is either being hovered or it’s currently selected.
            const isActive = index === activeIndex || index === selectedIndex;

            const segment = (
              <CircleSegment
                key={index}
                stroke={dist.color}
                strokeWidth={15}
                percentage={dist.percentage}
                startOffset={cumulativeOffset}
                onHover={() => setActiveIndex(index)}
                onHoverOut={() => setActiveIndex(2)}
                onClick={() =>
                  // If the segment is clicked again, deselect. Otherwise select it.
                  setSelectedIndex(selectedIndex === index ? null : index)
                }
                isActive={isActive}
              />
            );

            cumulativeOffset += (dist.percentage / 100) * circumference;
            return segment;
          })}
        </svg>

        <div
          className="info-overlay"
          style={{
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 1,
            color: distributions[displayIndex].color,
          }}
        >
          <div
            style={{ fontSize: '24px', marginBottom: '8px', fontWeight: 'bold' }}
          >
            {distributions[displayIndex].title}
          </div>
          <div style={{ fontSize: '16px' }}>
            {distributions[displayIndex].description}
          </div>
          <div
            style={{ fontSize: '28px', fontWeight: 'bold', marginTop: '10px' }}
          >
            {`${distributions[displayIndex].percentage}%`}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;