import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Lab4GPS. All rights reserved.</p>
            <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
