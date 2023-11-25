import React from 'react'
import './About.css'
import Graduate from '../../Images/Graduate.png'
import Code from '../../Images/Code.png'
import Email from '../../Images/Email.png'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <section id="about">
            <span className='aboutTitle'>Who Am I?</span>
            <span className='aboutIntro'> I'm <span className='name'>Julia Zyrene Almoite</span>, from The Philippines. I recently graduated with the degree of Bachelor of Science in Information Technology.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={Graduate} alt='code' className='skillBarImg' />
                    <div className='skillBarText'>
                        <p>
                            With the knowledge that I have as a student and individual, I accumulated the skills of developing and designing Websites with the use of <span className='name'> HTML, CSS, JavaScript, React.JS, basic usage of Figma, and version control system Git</span>.
                        </p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Code} alt='code' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>
                            Check me out on this platforms:
                        </h3>
                        <div className='aboutIcons'>
                        <a href="https://www.linkedin.com/in/almoitejuliazyrene/" target="_blank" rel="noopener noreferrer" >
                            <FaLinkedin style={{ fontSize: '40px' }} />
                        </a>
                        <a href="https://github.com/zytanas" target="_blank" rel="noopener noreferrer" >
                            <FaGithub style={{ fontSize: '40px' }} />
                        </a>
                        </div>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Email} alt='code' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h3>Contact me: </h3>
                        <p>
                            juliazyrene23@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About