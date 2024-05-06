import React, { useState } from 'react';
import './NavBar.css';
import Logo from "../../Images/JZ-Logo.png"
import MobileNav from './MobileNav/MobileNav';
import 'material-symbols';
import CV from './CV.pdf'
import { Link } from 'react-scroll';

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src={Logo} alt='logo' />

                    <ul>
                        <li>
                            <Link className='menu-item' to='home' offset={-100} smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to='skills' offset={-100}  smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to='work-experience' offset={-100} smooth={true} duration={500}>Work Experience</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to='contact-me' offset={-100} smooth={true} duration={500}>Contact Me</Link>
                        </li>

                        <button className='contact-btn'>
                        <a href={CV} download='CV'>Hire Me</a>
                        </button>
                    </ul>

                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
