import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import tiktokIcon from '../img/tiktokpng.png'; // Ensure this path is correct
import xIcon from '../img/x.png'; // Add this line for the new X logo

const Footer = () => {

    useEffect(() => {
        ScrollReveal().reveal('.reveal-bottom', {
            origin: 'bottom',
            distance: '80px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });

        document.body.style.overflowX = 'hidden';
    }, []);

    return (
        <>
            <style>
                {`
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                }

                #root {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                .content {
                    flex: 1;
                }

                .social-icon {
                    color: white;
                    font-size: 1.5rem;
                    transition: color 0.3s ease;
                }

                .social-icon:hover {
                    color: #b617a1;
                }

                footer {
                    font-family: 'Orbitron', sans-serif;
                    background-color: black;
                }

                .footer-heading {
                    font-size: 2rem;
                    color: #f0f0f0;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }

                .footer-text {
                    font-family: 'Poppins', sans-serif;
                    color: #ddd;
                }

                .hover-underline:hover {
                    text-decoration: underline;
                }

                .footer-container {
                    background-color: black;
                    padding: 20px 8px;
                    border-radius: 8px;
                }

                .footer-bottom {
                    background-color: black;
                    padding: 10px 8px;
                    text-align: center;
                }

                .social-icons-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 1rem;
                }

                .tiktok-icon, .x-icon {
                    width: 50px; /* Adjust size as needed */
                    height: 40px; /* Adjust size as needed */
                    border-radius: 50%;
                    filter: invert(1); /* Optional: to match the white color */
                }
                `}
            </style>
            <div className="content">
                {/* Other content of your app */}
            </div>
            <footer className="footer-container text-white" id="footer">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4 reveal-bottom">
                        <h2 className="footer-heading">About Wesafar</h2>
                        <p className="footer-text">
                            Wesafar is a social network dedicated to responsible and engaged tourism, integrating smart technologies to create a fair and enriching travel experience.
                        </p>
                    </div>
                    <div className="space-y-4 reveal-bottom">
                        <h2 className="footer-heading">Quick Links</h2>
                        <ul className="text-sm space-y-2 footer-text">
                            <li><a href="#herosection" className="hover-underline">Home</a></li>
                            <li><a href="#roadmap" className="hover-underline">Features</a></li>
                            <li><a href="#tokenomics" className="hover-underline">Tokenomics</a></li>
                            <li><a href="#aboutus" className="hover-underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4 reveal-bottom">
                        <h2 className="footer-heading">Community</h2>
                        <ul className="text-sm space-y-2 footer-text">
                            <li><a href="#product" className="hover-underline">Events</a></li>
                            <li><a href="#product" className="hover-underline">Marketplace</a></li>
                            <li><a href="#product" className="hover-underline">Metaverse</a></li>
                            <li><a href="#product" className="hover-underline">Rewards</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4 reveal-bottom">
                        <h2 className="footer-heading">Follow Us</h2>
                        <div className="social-icons-container">
                            <a href="https://www.youtube.com/@Wesafar" className="social-icon mx-2"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="https://x.com/wesafar?s=21&t=gR3jEokFOR3jTIpLFScRUg" className="mx-2"><img src={xIcon} alt="X" className="x-icon" /></a>
                            <a href="https://www.instagram.com/wesafar.app?igsh=dThzbmNhbGI3Yml6" className="social-icon mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.tiktok.com/@wesafar?_t=8ngvcvXQJdd&_r=1" className="mx-2"><img src={tiktokIcon} alt="TikTok" className="tiktok-icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom footer-text">
                    <p>© {new Date().getFullYear()} Wesafar. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
