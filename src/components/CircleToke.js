import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const CircleSegment = ({
  stroke, strokeWidth, percentage, startOffset, onHover, onHoverOut, isActive
}) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const lengthOfArc = (percentage / 100) * circumference;
  const offset = circumference - startOffset;

  const animationProps = useSpring({
    from: { strokeDashoffset: circumference },
    to: { strokeDashoffset: offset },
    config: { duration: 1500 },
  });

  const whiteFilterId = 'glow-white';

  return (
    <>
      <defs>
        <filter id={whiteFilterId} x="-50%" y="-50%" width="200%" height="200%">
          <feFlood result="flood" flood-color="#ffffff" flood-opacity="1"></feFlood>
          <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
          <feGaussianBlur in="mask" stdDeviation="3" result="blurred"></feGaussianBlur>
          <feMerge>
            <feMergeNode in="blurred"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <animated.circle
        fill="none"
        stroke={stroke}
        cx="100"
        cy="100"
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={`${lengthOfArc} ${circumference - lengthOfArc}`}
        style={animationProps}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
        onTouchStart={onHover}  // Added for touch support
        onTouchEnd={onHoverOut}
        filter={isActive ? `url(#${whiteFilterId})` : ''}
      />
    </>
  );
};

const Tokenomics = () => {
  const distributions = [
    { percentage: 30, title: 'Rewards for trippers', color: '#5723f5', description: 'Rewards.' },
    { percentage: 25, title: 'Incentives for active users', color: '#e03791', description: 'Incentives.' },
    { percentage: 20, title: 'Development and innovation fund', color: '#b01a62', description: 'Development.' },
    { percentage: 15, title: 'Staking for community governance', color: '#9450a8', description: 'Governance.' },
    { percentage: 10, title: 'Reserve for strategic partnerships', color: '#3c3f8f', description: 'Partnerships.' },
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  let cumulativeOffset = 0;

  const blackFilterId = 'glow-black';

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        
        {`
          h1, p, .info-overlay {
            font-family: 'Orbitron', sans-serif;
          }
        `}
      </style>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'transparent',
        color: 'white',
        position: 'relative',
      }}>
        <h1 className='italic text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a5c] via-[#ff5cdc] to-[#d93775]' style={{
                              
                              textShadow: '0px 0px 4px #ff5cdc'
                          }}>DISTRIBUTION</h1>
        <svg width="90vw" height="90vw" viewBox="0 0 200 200" style={{ maxWidth: '400px', maxHeight: '400px', position: 'relative', zIndex: 0 }}>
          <defs>
            <filter id={blackFilterId} x="-50%" y="-50%" width="200%" height="200%">
              <feFlood result="flood" flood-color="#000000" flood-opacity="1"></feFlood>
              <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
              <feGaussianBlur in="mask" stdDeviation="5" result="blurred"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="blurred"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          {distributions.map((dist, index) => {
            const segment = (
              <CircleSegment
                key={index}
                stroke={dist.color}
                strokeWidth={12}
                percentage={dist.percentage}
                startOffset={cumulativeOffset}
                onHover={() => setActiveIndex(index)}
                onHoverOut={() => setActiveIndex(2)}
                isActive={index === activeIndex}
              />
            );
            cumulativeOffset += (dist.percentage / 100) * circumference;
            return segment;
          })}
        </svg>
        {/* Info Overlay */}
        <div className="info-overlay" style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, 10%)',
          textAlign: 'center',
          zIndex: 1,
          color: distributions[activeIndex].color,
          filter: `url(#${blackFilterId})`
        }}>
          <div style={{ fontSize: '28px', marginTop: '8px' }}>{distributions[activeIndex].description}</div>
          <div style={{ fontSize: '34px', fontWeight: '600' }}>{`${distributions[activeIndex].percentage}%`}</div>
        </div>
        
      </div>
    </>
  );
};

export default Tokenomics;
