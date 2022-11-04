import React from 'react'
import Footer from '../Footer'
import '../styles/Contact.css'

function Contact() {
  return (
    <div>
        <div className="form_wrapper">
            <h2>Contact</h2>
            <p>Hi there, contact me to ask me about 
                anything you have in mind.
            </p>
            <form action="">
                <div className="form_control">
                    <span className="label_wrap">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="first_name" id="first_name" placeholder='Enter your first name' required />
                    </span>
                    <span className="label_wrap">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="last_name" id="last_name" placeholder='Enter your last name' required />
                    </span>
                </div>
                <div className="form_control">
                    <span className="label_wrap">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" id="email" placeholder='yourname@email.com' required />
                    </span>
                </div>
                <div className="form_control">
                    <span className="label_wrap">
                        <label htmlFor="Message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Send me a message and I will reply you as soon as possible' required />
                    </span>
                </div>
                <div className="form_control">
                    <span className='check_span'><input type="checkbox" name="" id="checkbox" required /> <p>You agree to providing your data to <b>Oluwafemi O</b> who may contact you.</p></span>
                </div>
                <button type='submit' id='btn__submit'>Send Message</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default Contact