import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox=()=>{
        
    }
    useEffect(initActiveBox,[]);

    const activeCurrentLink=(event)=>{
        lastActiveLink.current?.className.remove('active')
        event.target.classList.add('active')
        lastActiveLink.current=event.target

        activeBox.current.style.top=event.current
        offsetTop+'px';
        
        activeBox.current.style.left=event.current
        offsetLeft+'px';
        
        activeBox.current.style.width=event.current
        offsetWidth+'px';
        
        activeBox.current.style.height=event.current
        offsetHeight+'px';
    }
    const navItems = [
        { label: 'Home', link: '#home', className: 'nav-link active', ref: lastActiveLink },
        { label: 'About', link: '#about', className: 'nav-link' },
        { label: 'Work', link: '#work', className: 'nav-link' },
        { label: 'Experience', link: '#experience', className: 'nav-link' },
        { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
    ];
    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a key={key} href={link} ref={ref} className={className} >
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
