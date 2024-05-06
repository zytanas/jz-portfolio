import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import Github from './github.png'
import Email from './email.png'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section id='contact-me' className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard 
                iconUrl= {Email}
                text="juliazyrene23@gmail.com"
                />
                <ContactInfoCard 
                iconUrl={Github}
                text="https://github.com/zytanas"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe