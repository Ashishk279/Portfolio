import React from 'react';
import './Works.css';
import Portfolio1 from './images/home.jpeg';
import Portfolio2 from './images/login.jpeg';
import Portfolio3 from './images/account.jpeg';
import Portfolio4 from './images/erc20.jpeg';
import Portfolio5 from './images/erc721.jpeg';
import Portfolio6 from './images/erc7211.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Works = () => {
  return (
    <section id="works">
      <h2 className='workTitle'>My Portfolio</h2>
      <span className='workDesc'>While I currently have no professional experience, during a comprehensive 45-day training program in blockchain technology, I gained hands-on experience in various aspects of blockchain development. I focusing on the development and implementation of smart contracts using Solidity, successfully integrated smart contracts with frontend applications using Web3.js. I am also familar with Node.js for backend development.I am enthusiastic about applying my skills and knowledge to real-world projects and contributing to innovative blockchain solutions in the industry. For that I am seeking for internship oppurtunities on the field of blockchain technology. </span>
      {/* <div className="worksImgs">
        <img src={Portfolio1} alt='Decentralized Bank App' className='worksImg' />
        <img src={Portfolio2} alt='Decentralized Bank App' className='worksImg' />
        <img src={Portfolio3} alt='Decentralized Bank App' className='worksImg' />
        <img src={Portfolio4} alt='ERC20 Token' className='worksImg' />
        <img src={Portfolio5} alt='ERC721 Token' className='worksImg' />
        <img src={Portfolio6} alt='ERC721 Token' className='worksImg' />
      </div>
      <button className='workBtn'>See More</button> */}

      <Carousel className='worksImgs'>
        <div className='carouselImg'>
          <img src={Portfolio1} alt='Decentralized Bank App' className='carouselImgs1' />
          <p className="legend">Decentralized Bank App</p>
        </div>
        <div className='carouselImg'>
          <img src={Portfolio2} alt='Decentralized Bank App' className='carouselImgs1' />
          <p className="legend">Decentralized Bank App</p>
        </div>
        <div className='carouselImg'>
          <img src={Portfolio3} alt='Decentralized Bank App' className='carouselImgs1' />
          <p className="legend">Decentralized Bank App</p>
        </div>
        <div className='carouselImg'>
          <img src={Portfolio4} alt='ERC20 Token' className='carouselImgs' />
          <p className="legend">ERC20 Token</p>
        </div>
        <div className='carouselImg'>
          <img src={Portfolio5} alt='ERC721 Token' className='carouselImgs' />
          <p className="legend">ERC721 Token</p>
        </div>
        <div className='carouselImg'>
          <img src={Portfolio6} alt='ERC721 Token' className='carouselImgs' />
          <p className="legend">ERC721 Token</p>
        </div>
      </Carousel>

    </section>
  )
}

export default Works;