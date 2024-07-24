import React from 'react';
import "./Intro.css";
import bg from '../assets/images/myImage.png';
import btnImg from '../assets/images/hire.png';

const Intro = () => {
  const openPdf = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1NzMOLeuATj_ixB6ZhJRWzPLo6M0kdOfj/view?usp=sharing';
    window.open(pdfUrl);
  };
  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className="introName">Ashish</span><br />Blockchain Developer</span>
        <p className='introPara'>I am a skilled Blockchain Developer with experience building Smart Contracts <br/>(Solidity) and integrating them with frontends (Web3.js/Ethers.js). Proficient <br/>in React.js for frontend and Node.js/Express.js/MongoDB for backend <br/>development.</p>

       <button  target='_blank' onClick={openPdf} className="btn" ><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>

  )
}

export default Intro;