import React from 'react'
import "./Hero.css"
import Avatar from '../../Images/id.png'
import HtmlIcon from '../../Images/html.webp'
import CssIcon from '../../Images/css.webp'
import JsIcon from '../../Images/js.png'
import ReactIcon from '../../Images/react.png'
import NodeIcon from '../../Images/node.png'

const Hero = () => {
  return (
    <section id='home' className='hero-container'>
        <div className='hero-content'>
            <h2>Creating Inspiring Digital Experiences</h2>
            <p>Dedicated Frontend Developer | Breathing life into ideas, one pixel at a time, to craft visually stunning web solutions that captivate and inspire.</p>
        </div>

        <div className='hero-img'>
            <div>
            {/* <div className='tech-icon'>
                    <img src={ReactIcon} alt=''/>
                </div> */}
                    <img  src={Avatar} alt=''/>
            </div>

            <div>
                <div className='tech-icon'>
                    <img src={HtmlIcon} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src={CssIcon} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src={JsIcon} alt=''/>
                </div>
                <div className='tech-icon'>
                <img src={ReactIcon} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero