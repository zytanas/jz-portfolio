import React from 'react'
import { Link } from 'react-scroll';
import './MobileNav.css'
import Logo from './JZ-Logo.png'
import CV from '../CV.pdf'

const MobileNav = ({ isOpen, toggleMenu }) => {

    const handleDownload = () => {
        window.open(CV, '_blank');
    };
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className='mobile-menu-container'>
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
                        <button className='contact-btn' onClick={handleDownload}>
                                Hire Me
                            </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav