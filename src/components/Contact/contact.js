import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import FacebookIcon from "../../assets/facebook-icon.png";
import InstaIcon from "../../assets/instagram.png";
import GitIcon from "../../assets/git.png";
import LinkedInIcon from "../../assets/linkedIn.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Form submitted');
    console.log(form.current);

    emailjs.sendForm('service_fnr03ma', 'template_sgx144k', form.current)
      .then((result) => {
        console.log(result.text);
        alert('Email Sent!');
        e.target.reset();
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name' />
          <input type="email" className="email" placeholder='Your Email' name='your_email' />
          <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
          <button className="submitBtn" type='submit' value='submit' onClick={sendEmail}>Submit</button>
          <div className="links">
            <a href='https://www.facebook.com/Gautam5458Sharma?mibextid=ZbWKwL' target='#'><img src={FacebookIcon} alt="Facebook" className="link" /></a>
            <a href='https://www.instagram.com/gautam1314' target='#'><img src={InstaIcon} alt="Instagram" className="link" /></a>
            <a a href='https://github.com/Gautam1275'  target='#'><img src={GitIcon} alt="GitHub" className="link" /></a>
            <a href='www.linkedin.com/in/gautam-sharma-6a7175177' target='#'><img src={LinkedInIcon} alt="LinkedIn" className="link" /></a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
