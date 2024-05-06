import React from 'react'
import './SkillCard.css'

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
    // console.log("iconUrl:", iconUrl); // Add this console.log
    return (
        <div className={`skills-card ${isActive ? "active" : ""}`}
            onClick={() => onClick()}
        >
            <div className='skills-icon'>
                <img src={iconUrl} alt='' />
            </div>

            <span>{title}</span>
        </div>
    )
}

export default SkillCard