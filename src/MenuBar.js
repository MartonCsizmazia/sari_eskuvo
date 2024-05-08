// MenuBar.js
import React from 'react';
import './menuBar.css';

const MenuBar = () => {
    const scrollToSection = (id, e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="menu">
            <div className="menu-button"><a onClick={(e) => scrollToSection('kezdolap', e)} href="#kezdolap">Kezdőlap</a></div>
            <div className="menu-button"><a onClick={(e) => scrollToSection('datum', e)} href="#datum">Dátum</a></div>
            <div className="menu-button"><a onClick={(e) => scrollToSection('helyszin', e)} href="#datum">Helyszín</a></div>
            <div className="menu-button"><a onClick={(e) => scrollToSection('program', e)} href="#program">Program</a></div>
            {/* Add more menu items as needed */}
        </div>
    );
};

export default MenuBar;
