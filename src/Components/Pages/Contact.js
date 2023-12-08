import React, { useEffect } from 'react';
import './Contact.css'

//Contact Page 
function Contact() {
    //open email
    const sendEmail = () => window.open('mailto:email@example.com?');

    //automatically scroll to top of page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='contact-container'>
            <div className='contact-title'><br></br>
                <h1>Contact us anytime at: </h1>
                <br></br>
            </div>
            <div className='email'>
                <h2>Email</h2>
                <button className='contact-bttn' onClick={sendEmail}>email@example.com</button>
            </div>
            <div className='phone'>
                <h2>Phone</h2>
                <p className='phone'>1(999)999-9999</p><br></br>
            </div>
            <br></br>
            <br></br>
            <div className='form-container'>
                <h2>Careers</h2>
                <form id='contact-form'>
                    <p>
                        <label for="fname">First Name: </label>
                        <input type="text" id="fname" name="fname"></input>
                    </p><br></br><br></br>
                    <p><label for="fname">First Name: </label>
                        <input type="email" id="career-email" name="career-email"></input></p><br></br><br></br>
                    <p><label for="career-email">Email: </label>
                        <input type="text" id="lname" name="lname"></input></p><br></br><br></br>
                    <p><label for="resume"> Resume (.pdf) </label>
                        <input type='file' id="resume" name="resume" accept='pdf' />
                    </p>
                </form>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Contact;
