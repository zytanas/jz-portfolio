import React from 'react'
import './Portfolio.css'
import Dashboard from '../../Images/Vndci-Dashboard.png'
import Mock from '../../Images/Mock.png'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h2 className='workTitle'>My Portfolio</h2>
      <span className='workDesc'>
        <p className='workDesc'>I take pride in paying attention to the smallest details when I design, <br /> I want the users can feel ease using the platform I made. Small thing matters.</p>
      </span>
      <div className='workImgs'>
        <div className='imageWithLabel'>
          <img src={Dashboard} alt='dashboard' className='workImg' />
          <p className='labelAndButton'>This is our capstone project, VNDCI-SYS.</p>
          <a className='activeButton' href="https://vndci-sys.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>

        <div className='imageWithLabel'>
          <img src={Mock} alt='mock-up' className='workImg' />
          <p className='labelAndButton'>This is our mock-up dashboard design for our capstone project.</p>
          <a className='activeButton' href="https://github.com/zytanas/Modernized-Dashboard" target="_blank" rel="noopener noreferrer">Visit Repository</a>
        </div>


      </div>
    </section>
  )
}

export default Portfolio