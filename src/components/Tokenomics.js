import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import CircleToke from '../components/CircleToke';
import WaitlistPortal from './WaitlistPortal';

function Tokenomics() {
    const [isWaitlistVisible, setIsWaitlistVisible] = useState(false);

    useEffect(() => {
        ScrollReveal().reveal('.reveal-top', {
            origin: 'top',
            distance: '80px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });
    }, []);

    const handleJoinWaitlist = () => {
        setIsWaitlistVisible(true);
    };

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

                    h1, h2, p {
                        font-family: 'Orbitron', sans-serif;
                    }
                    .call-to-action-container {
                        background-color: #000;
                        border-radius: 12px;
                        padding: 70px;
                        margin: 40px 0;
                        box-shadow: 0 0 20px 10px rgba(20, 107, 174, 0.5);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: white;
                        flex-direction: row;
                        font-family: 'Orbitron', sans-serif;
                    }
                    .call-to-action-text {
                        font-size: 2.5rem;
                        margin-right: 20px;
                    }
                    .call-to-action-button {
                        background: linear-gradient(to right, #cf2351, #3c3f8f);
                        padding: 10px 20px;
                        border: none;
                        border-radius: 12px;
                        color: white;
                        font-size: 2.2rem;
                        cursor: pointer;
                        transition: background 0.3s ease;
                    }
                    .call-to-action-button:hover {
                        background: linear-gradient(to right, #3c3f8f, #cf2351);
                    }
                    @media (max-width: 768px) {
                        .call-to-action-container {
                            flex-direction: column;
                            text-align: center;
                        }
                        .call-to-action-text {
                            margin: 0 0 10px 0;
                            font-size: 1.2rem; /* Adjust font size for smaller screens */
                        }
                        .call-to-action-button {
                            width: 100%;
                            padding: 12px;
                            font-size: 1rem; /* Adjust font size for smaller screens */
                        }
                    }
                    .waitlist-slide-in {
                        transform: translateY(-100%);
                        opacity: 0;
                        transition: transform 0.5s ease-out, opacity 0.5s ease-out;
                    }

                    .waitlist-slide-in.visible {
                        transform: translateY(0);
                        opacity: 1;
                    }
                `}
            </style>
            <div className="text-white text-center px-12 py-16 bg-transparent" id="tokenomics">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold leading-tight mx-auto reveal-top text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a5c] via-[#ff5cdc] to-[#d93775]"
                    style={{ 
                        fontWeight: '300', 
                        textShadow: '0px 0px 8px #d93775', 
                    }}>
                    Tokenomics
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center justify-items-center">
                    <div className="space-y-3 hover:scale-115 transition transform duration-300 ease-in-out reveal-top">
                        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-6xl font-bold uppercase tracking-widest "
                            style={{
                                background: 'linear-gradient(to right, #d93775, #ff6a5c)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0px 0px 4px #ff6a5c'
                            }}>
                            Supply
                        </h2>
                        <p className="text-xl md:text-2xl lg:text-3xl xl:text-8xl">21B</p>
                    </div>
                    <div className="space-y-3 hover:scale-115 transition transform duration-300 ease-in-out reveal-top">
                        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-6xl font-bold uppercase tracking-widest "
                            style={{
                                background: 'linear-gradient(to right, #7928ca, #ff0080)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0px 0px 4px #b64aa8'
                            }}>
                            Symbol
                        </h2>
                        <p className="text-xl md:text-2xl lg:text-3xl xl:text-8xl">$WER</p>
                    </div>
                    <div className="space-y-3 hover:scale-115 transition transform duration-300 ease-in-out reveal-top">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-widest" style={{ marginBottom: '-12rem', color:'transparent' }}>.</h2>
                        <div className="flex justify-center items-center">
                            <CircleToke />
                        </div>
                    </div>
                </div>
                <div className="call-to-action-container">
                    <div className="call-to-action-text">
                        Be part of the revolution. Join our exclusive waitlist now!
                    </div>
                    <button className="call-to-action-button" onClick={handleJoinWaitlist}>
                        Join the Waitlist
                    </button>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-20 waitlist-slide-in ${isWaitlistVisible ? 'visible' : ''}`}
                style={{
                    backgroundColor: '#19072cd1', // Adjusted for better transparency control
                    backdropFilter: 'blur(10px)', // Adjust the value for more or less blur
                    WebkitBackdropFilter: 'blur(10px)', // For Safari support
                }}
            >
                {isWaitlistVisible && <WaitlistPortal setIsWaitlistVisible={setIsWaitlistVisible} />}
            </div>
        </>
    );
}

export default Tokenomics;
