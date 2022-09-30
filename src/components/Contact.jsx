import React from 'react';
import '../scss/components/_contact.scss';

const Contact = () => {
  return (
    <div name='contact' className='contact-container'>
        <form action="" className='contact-form-section' method='POST'>
            <div className='contact-intro-container'>
                <p className='contact-title'>Contact</p>
                <p className='contact-subtitle'>Submit the form below or shoot me an email</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='contact-name' />
            <input type="email" placeholder='Email' name='email' className='contact-email' />
            <textarea name="message" placeholder='Message' cols="30" rows="10" className='contact-textarea'></textarea>
            <button className='contact-button'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;