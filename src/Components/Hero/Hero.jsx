import React from 'react'
import "./Hero.css"
import CssIcon from '../../Images/css.webp'
import ReactIcon from '../../Images/react.png'
import Profile from '../../Images/profile.jpg'

const Hero = () => {
  return (
    <section id='home' className='hero-container'>
        <div className='hero-content'>
            <h2>Julia Zyrene Almoite</h2>
            <p>Dedicated Frontend Developer | Breathing life into ideas, one pixel at a time, to craft visually stunning web solutions that captivate and inspire.</p>
        </div>

        <div className='hero-img'>
            <div>
                    <img  src={Profile} alt=''/>
            </div>
            
            <p>Developed using:</p>
    
            <div>
                <div className='tech-icon'>
                    <img src={ReactIcon} alt=''/>
                </div>
            
                <div className='tech-icon'>
                <img src={CssIcon} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero