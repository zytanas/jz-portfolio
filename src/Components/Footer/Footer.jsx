import React from 'react'
import './Footer.css'
import FooterInfo from './FooterInfo/FooterInfo'
import Instagram from './instagram.png'
import LinkedIn from './linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
        
        <div className='footer-content'>
            <div style={{flex: 1}}>
                <FooterInfo 
                    iconUrl={Instagram}
                    linkUrl="https://www.instagram.com/zytanas/"
                    text="Instagram"
                />
                <FooterInfo 
                    iconUrl={LinkedIn}
                    linkUrl="https://www.linkedin.com/in/almoitejuliazyrene/"
                    text="LinkedIn"
                />
            </div>
        </div>
        <h5>Copyright © 2024 Julia Zyrene Almoite, All Rights Reserved.</h5>
        </div>
  )
}

export default Footer