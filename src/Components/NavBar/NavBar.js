import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../Images/JZ small-Logo.png';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [active, setActive] = useState(''); 

    const handleSetActive = (link) => {
        setActive(link);
    };

    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' />
            <div className='desktopMenu'>
                <Link
                    className={`desktopMenuListItem ${active === 'home' ? 'active' : ''}`}
                    to='intro'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass='active'
                    onSetActive={() => handleSetActive('home')}
                >
                    Home
                </Link>
                <Link
                    className={`desktopMenuListItem ${active === 'about' ? 'active' : ''}`}
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass='active'
                    onSetActive={() => handleSetActive('about')}
                >
                    About
                </Link>
                <Link
                    className={`desktopMenuListItem ${active === 'portfolio' ? 'active' : ''}`}
                    to='portfolio'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass='active'
                    onSetActive={() => handleSetActive('portfolio')}
                    >
                    Portfolio
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
