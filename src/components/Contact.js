import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import LinkedIn from '../assets/images/linkedin.png';
import Github from '../assets/images/github.png';
import Email from '../assets/images/email.png';
import Instagram from '../assets/images/instagram.png';
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().max(10).required(),
      email: Yup.string().email().required(),
      message: Yup.string().required()
    }),
    onSubmit: async (values, {resetForm}) => {
      try {
        console.log("form values", { ...values })
        const result = await emailjs.sendForm('service_twzmmng', 'template_marst4j', form.current, '8FWYrnzYoXmTuCwzM')
        toast.success(`Successfully send Email! ${result.text}`, {
          position: "top-right"
         }); 
         resetForm(formik.handleReset)
      } catch (error) {
        toast.error(`Something wents wrong ${error.text}`, {
          position: "top-right"
         }); 
         resetForm(formik.handleReset)
      }
    }
  })

  

  const vesting = () => {
    const pdfUrl = 'https://github.com/Ashishk279/Vesting-Platform';
    window.open(pdfUrl);
  }
  const instagram = () => {
    const pdfUrl = 'https://github.com/Ashishk279/Instagram-Backend';
    window.open(pdfUrl);
  }
  const hyperledger = () => {
    const pdfUrl = 'https://github.com/Ashishk279/Hyperledger-Besu';
    window.open(pdfUrl);
  }
  const newaapp = () => {
    const pdfUrl = 'https://github.com/Ashishk279/NewsApp';
    window.open(pdfUrl);
  }
  const staking = () => {
    const pdfUrl = 'https://github.com/Ashishk279/Staking';
    window.open(pdfUrl);
  }
  const bank = () => {
    const pdfUrl = 'https://github.com/Ashishk279/Bank-App-Project';
    window.open(pdfUrl);
  }
  return (
    <section id='contactPage'>
      <div id="clients">
        <h1 className="contactPageTitle">My Projects</h1>
        <p className="clientDesc">I am working on these projects.
        </p>
        <div className="clientImgs">
          <p className="clientImg" onClick={vesting} target='_blank'>Vesting Platform - React.js, Solidity</p>
          <p className="clientImg" onClick={instagram} target='_blank'>Social Media Backend - Node.js</p>
          <p className="clientImg" onClick={hyperledger} target='_blank'>Hyperledger Besu</p>
          <p className="clientImg" onClick={newaapp} target='_blank'>NewsApp - React.js</p>
          <p className="clientImg" onClick={staking} target='_blank'>Staking - React.js, Solidity</p>
          <p className="clientImg" onClick={bank} target='_blank'>Bank Application - React.js, Solidity</p>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work oppurtunities. </span>
        <form ref={form} className="contactForm" onSubmit={formik.handleSubmit}>
          <input type="text" className="name" placeholder="Your Name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          ) : null}
          <input type="email" className="email" placeholder="Your Email"name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input>
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
          <textarea name="message" rows="5" placeholder="Your Message" className="msg" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div style={{ color: 'red' }}>{formik.errors.message}</div>
          ) : null}
          <button className="submitBtn" type="submit" >Submit</button>
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
      <ToastContainer/>
    </section>
  )
}

export default Contact;