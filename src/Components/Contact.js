import React from 'react'
import SectionTitle from './SectionTitle'

function ContactForm() {
    const [formdata, setFormData] = React.useState({
        name: "",
        email: "",
        message: ""
    });

    function handleSubmit(event) {
        const { name, email, message } = event.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: name.value,
            [email]: email.value,
            [message]: message.value
        }));
    }


    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    console.log("hi",formdata)
    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <input
                className='text-input'
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleInputChange}
                placeholder='Name'
            />
            <br />
            <input
                className='text-input'
                type="text"
                name="email"
                value={formdata.email}
                onChange={handleInputChange}
                placeholder='E-mail'
            />
            <br />
            <textarea
                className='text-input-area'
                type="textArea"
                name="message"
                value={formdata.message}
                onChange={handleInputChange}
                placeholder='Message'
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
                <p>Phone Number : +1(571)-591-8877</p><br />
                <p>E-mail : vyelsang@gmu.edu</p>
            </div>
        </div>
    )
}