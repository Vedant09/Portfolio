import React from 'react'
import SectionTitle from './SectionTitle'

function ContactForm() {
    return (
        <form className='contact-form'>
            <input
            className='text-input'
                type="text"
                name="name"
                placeholder='Name'
            />
            <br />
            <input
                className='text-input'
                type="text"
                name="email"
                placeholder='E-mail'
            />
            <br />
            <textarea
                className='text-input-area'
                type="textArea"
                name="message"
                placeholder='Messasge'
            />
            <br />
            <button className='form-submit'>Submit</button>
        </form>
    )
}

export default function Contact() {
    return (
        <div className="contact-me-div" id="contact">
            <SectionTitle
                header='CONTACT ME.'
                sub_header='GET IN TOUCH'
            />
            <ContactForm />
            <div className='contact-phone-email-div'>
                <p>Phone Number : +1(571)-591-8877</p><br/>
                <p>E-mail : vyelsang@gmu.edu</p>
            </div>
        </div>
    )
}