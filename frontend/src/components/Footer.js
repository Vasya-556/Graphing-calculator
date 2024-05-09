import React, { useState } from 'react';
import './Style.css';
import Numpad from './Numpad';

function Footer(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleFooter = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleFooter} className={`footer-toggle-btn ${isOpen ? 'footer-open' : ''}`}>
                {isOpen ? 'Hide' : 'Show'} Footer
            </button>
            <div className={`footer-content ${isOpen ? 'footer-open' : ''}`}>
                <Numpad/>
            </div>
        </div>
    );
}

export default Footer;