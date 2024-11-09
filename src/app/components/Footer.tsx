import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "../../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
             <p>© Esha 2024. All rights reserved.</p>

                <div className="footer-links">
                    <a href="home">Home</a>
                    <a href="about">About</a>
                    <a href="contact">Contact</a>
                </div>

                <div className="footer-icons">
                    <a href="https://github.com/eshaidrees" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/esha-idrees-1379692b7" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;