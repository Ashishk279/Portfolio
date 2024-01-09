import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Blockchain from './images/blockchainlogo.svg';
import BTCMarkets from './images/btcmarketslogo.svg';
import DeriveDAO from './images/derivadaologo.svg';
import IOTChain from './images/iotchainlogo.svg';
import LinkedIn from './images/linkedin.png';
import Github from './images/github.png';
import Email from './images/email.png';
import Instagram from './images/instagram.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_twzmmng', 'template_marst4j', form.current, '8FWYrnzYoXmTuCwzM')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">I want to work with the companies includes.
        </p>
        <div className="clientImgs">
          <img src={Blockchain} alt="Blockchain" className="clientImg"></img>
          <img src={BTCMarkets} alt="BTCMarkets" className="clientImg"></img>
          <img src={DeriveDAO} alt="DeriveDAO" className="clientImg"></img>
          <img src={IOTChain} alt="IOTChain" className="clientImg"></img>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work oppurtunities. </span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name"></input>
          <input type="email" className="email" placeholder="Your Email" name="from_email"></input>
          <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
          <button className="submitBtn" type="submit" value="Send">Submit</button>
          <div className="links">
            <a href="https://www.linkedin.com/in/ashish-324188202" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" className="link" /></a>
            <a href="https://github.com/Ashishk279" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="Github" className="link" /></a>
            <a href="mailto:as98016767814@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={Email} alt="Email" className="link" /></a>
            <a href="https://instagram.com/ashish_kumar279?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="link" /></a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;