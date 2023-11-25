import React from 'react'
import './Home.css';
import Profile from '../../Images/Profile Logo.png'

const Home = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'> I'm <span className='introName'> Julia</span> <br/> Front-End Developer <br/> Web UX Designer</span>
            <p className='introPara'>Can work on a team/individual as a Web Developer, efficient on given tasks,<br/> has good conceptual designs when it comes to user experience.<br/> <span className='introPara1'> Focused on Front-End Web Development.</span> </p>
        </div>
        <img src={Profile} alt='Profile' className='profile' />
    </section>
  )
}

export default Home