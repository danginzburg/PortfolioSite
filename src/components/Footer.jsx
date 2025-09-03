import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Daniel Ginzburg. All rights reserved.</p>
            <p>Made with React</p>
        </footer>
    );
};

export default Footer;