import React from 'react';
import "./Intro.css";
import bg from './images/myImage3.png';
import btnImg from './images/hire.png';
import { Link } from 'react-scroll';
const Intro = () => {
  const openEmail = () => {
    window.location.href = 'mailto:as9806767814@gmail.com';
  };
  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className="introName">Ashish</span><br />Blockchain Developer</span>
        <p className='introPara'>I am a skilled blockchain developer with experience in creating smart contracts<br /> using solidity and interact that smart contract with frontend using web3.js.</p>

        <Link  ><button onClick={openEmail} className="btn" ><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>

  )
}

export default Intro;