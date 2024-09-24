import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
    const navLinksRef = useRef([]);
    const activeBox = useRef(null);

    const initActiveBox = () => {
        if (navLinksRef.current[0]) {
            updateActiveBox(navLinksRef.current[0]);
        }
    };

    useEffect(initActiveBox, [navOpen]);
    const updateActiveBox = (element) => {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = element;
        activeBox.current.style.top = `${offsetTop}px`;
        activeBox.current.style.left = `${offsetLeft}px`;
        activeBox.current.style.width = `${offsetWidth}px`;
        activeBox.current.style.height = `${offsetHeight}px`;
    };

    const handleNavLinkClick = (index) => {
        const navLink = navLinksRef.current[index];
        if (navLink) {
            updateActiveBox(navLink);
        }
    };
    const navItems = [
        { label: 'Home', link: '#home' },
        { label: 'About', link: '#about' },
        { label: 'Work', link: '#work' },
        { label: 'Experience', link: '#experience' },
        { label: 'Contact', link: '#contact', className: 'contact-item' } // Add class here
    ];
    
    return (
        <nav className={`navbar ${navOpen ? 'active' : 'hidden'}`}>
            {navItems.map(({ label, link, className }, index) => (
                <a
                    key={index}
                    href={link}
                    ref={(el) => navLinksRef.current[index] = el}
                    className={`nav-link ${className === 'contact-item' ? 'hidden sm:block md:hidden' : ''}`} // Tailwind classes
                    onClick={() => handleNavLinkClick(index)}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
    
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};

export default Navbar;
