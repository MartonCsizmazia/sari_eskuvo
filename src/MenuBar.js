import React, { useEffect } from 'react';
import './menuBar.scss';

const MenuBar = () => {

    useEffect(() => {
        const handleClick = (event) => {
            const isArrowClicked = event.target.closest('#icon-3');
            const dropdown = document.getElementById('dropdown-3');

            if (isArrowClicked) {
                // Toggle the 'close' class if the arrow is clicked
                dropdown.classList.toggle('close');
            } else {
                // Remove the 'close' class if clicking outside the arrow
                dropdown.classList.remove('close');
            }
        };

        const icon3 = document.getElementById('icon-3');
        icon3.addEventListener('click', handleClick);

        // Add a click event listener to the document to handle clicks anywhere on the page
        document.addEventListener('click', handleClick);

        return () => {
            icon3.removeEventListener('click', handleClick);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const scrollToSection = (id, e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="menu">
            <div className="menu-button" onClick={(e) => scrollToSection('kezdolap', e)}><a>Kezdőlap</a></div>
            <div className="menu-button" onClick={(e) => scrollToSection('datum', e)}><a>Dátum</a></div>
            <div className="menu-button" onClick={(e) => scrollToSection('helyszin', e)}><a>Helyszín</a></div>
            <div className="menu-button" onClick={(e) => scrollToSection('program', e)}><a>Program</a></div>

            <div className="mobile-dropdown">
                <a className="dropdown-title">Menü</a>
                <div id="icon-3" className="icon">
                    <div id="dropdown-3" className="dropdown"></div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
