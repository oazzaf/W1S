import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import CircleToke from '../components/CircleToke';
import WaitlistPortal from './WaitlistPortal';
import roadBgVideo from '../video/traveller.mp4';

function Tokenomics() {
    const [isWaitlistVisible, setIsWaitlistVisible] = useState(false);

    useEffect(() => {
        if (typeof ScrollReveal !== 'undefined') {
            ScrollReveal().reveal('.reveal-top', {
                origin: 'top',
                distance: '60px',
                duration: 800,
                easing: 'ease-in-out',
                reset: true,
            });
        }
    }, []);

    const handleJoinWaitlist = () => setIsWaitlistVisible(true);

    return (
        <div id="tokenomics" style={styles.container}>
            <video
                      className="absolute inset-0 w-full h-full object-cover z-0"
                      src={roadBgVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
            <h1 className="reveal-top" style={styles.title}>
                Tokenomics
            </h1>
            <div className="grid-container reveal-top" style={styles.gridContainer}>
                <div style={styles.gridItem}>
                    <h2 style={styles.subtitle}>Supply</h2>
                    <p style={styles.text}>21B</p>
                </div>
                <div style={styles.gridItem}>
                    <h2 style={styles.subtitle}>Symbol</h2>
                    <p style={styles.text}>$WER</p>
                </div>
                <div className="circle-toke-container" style={styles.circleTokeContainer}>
                    <CircleToke />
                </div>
            </div>
            <div className="call-to-action-container reveal-top" style={styles.callToActionContainer}>
                <div className="call-to-action-text" style={styles.callToActionText}>
                    Be part of the revolution.
                </div>
                <button
                    className="call-to-action-button"
                    style={styles.callToActionButton}
                    onClick={handleJoinWaitlist}
                >
                    Join the Waitlist
                </button>
            </div>
            {isWaitlistVisible && (
                <div style={styles.waitlistOverlay}>
                    <WaitlistPortal setIsWaitlistVisible={setIsWaitlistVisible} />
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        color: '#fff',
        textAlign: 'center',
        padding: '2px',
    },
    title: {
        fontSize: '3rem',
        textTransform: 'uppercase',
        background: 'linear-gradient(to right, #ff44ec, #44ffe7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0px 0px 10px rgba(255, 68, 236, 0.7)',
        animation: 'glow 2s ease-in-out infinite alternate',
        margin: '0 0 20px',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',
        margin: '20px auto',
        maxWidth: '1000px',
    },
    gridItem: {
        marginBottom: '20px',
    },
    subtitle: {
        fontSize: '2.5rem',
            textAlign: 'center',
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            backgroundImage: 'linear-gradient(to right, #ff6a5c, #ff5cdc, #d93775)',
            textShadow: '0px 0px 6px rgba(255, 255, 255, 0.1)',
    },
    text: {
        fontSize: '1.9rem',
        margin: 0,
        color: 'transparent',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        backgroundImage: 'linear-gradient(to right, #ff6a5c, #ff44ec, #ff009d)',
        textShadow: '0px 0px 6px rgba(255, 255, 255, 0.9)',
    },
    circleTokeContainer: {
        maxWidth: '250px',
        margin: 'auto',
        position: 'relative',
    },
    callToActionContainer: {
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '20px 30px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '500px',
        margin: '4px auto',
        boxShadow: '0px 0px 20px rgba(147, 46, 255, 0.5)',
    },
    callToActionText: {
        fontSize: '1.8rem',
        textAlign: 'center',
    },
    callToActionButton: {
        padding: '12px 20px',
        borderRadius: '12px',
        border: 'none',
        fontSize: '1.2rem',
        cursor: 'pointer',
        color: '#fff',
        background: 'linear-gradient(to right, #cf2351, #3c3f8f)',
        transition: 'background 0.3s ease, transform 0.3s ease',
    },
    waitlistOverlay: {
        position: 'fixed',
        inset: 0,
        zIndex: 20,
        backgroundColor: '#19072cd1',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
    },
};

export default Tokenomics;