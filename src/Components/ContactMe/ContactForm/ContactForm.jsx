import React, { useState } from 'react'
import './ContactForm.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_07rdjm8';
    const templateId = 'template_mjkhnmt';
    const publicKey = 'O4nWsPE0bZFP4IrN6';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: fullName,
        from_email: email,
        to_name: 'Julia Zyrene Almoite',
        message: message,
      }
    }
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
      console.log(res.data);
      setFullName('');
      setEmail('');
      setMessage('');
      toast.success('Message sent successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message. Please try again later.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  return (
    <div className='contact-form-content'>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form onSubmit={handleSubmit}>
        <div className='name-container'>
          <input
            type='text'
            value={fullName}
            name='fullname'
            placeholder='Full Name'
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <input
          type='text'
          value={email}
          name='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          type='text'
          value={message}
          name='message'
          placeholder='Message'
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type='submit'>SEND</button>
      </form>
    </div>
  )
}

export default ContactForm