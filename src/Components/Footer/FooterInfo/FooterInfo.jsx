import React from 'react'
import './FooterInfo.css'
const FooterInfo = ({iconUrl, linkUrl,text}) => {
  return (
    <div className='footer-details-card'>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <div className='icon'>
            <img src={iconUrl} alt={text} />
        </div>
        <span className='visually-hidden'>{text}</span>
        </a>
    </div>
  )
}

export default FooterInfo