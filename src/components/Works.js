import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Works.css';
import Portfolio1 from '../assets/images/project1.png';
import Portfolio2 from '../assets/images/project2.png';
import Portfolio3 from '../assets/images/project3.png';
import Portfolio4 from '../assets/images/project4.png';
import Portfolio5 from '../assets/images/project5.png';

const Works = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };
 

  return (
    <section id="works">
      <h2 className='workTitle'>My Portfolio</h2>
      <span className='workDesc'>I am a highly motivated blockchain developer with 6 months of industrial training experience. During this training, I gained hands-on experience in various aspects of blockchain development, with a focus on smart contract creation.I am proficient in Solidity and have successfully built and deployed smart contracts. I have also integrated these smart contracts with user interfaces using Web3.js and Ethers.js libraries. My backend development skills include Node.js, where I can create APIs and interact with NoSQL databases like MongoDB.I am actively seeking a full-time blockchain developer position to apply my knowledge and skills in a real-world production environment. I am eager to learn from experienced developers and contribute to innovative blockchain projects.</span>
      {/* <div className="worksImgs">
        <img src={Portfolio1} alt='Decentralized Bank App' className='worksImg' />
        <img src={Portfolio2} alt='Decentralized Bank App' className='worksImg' />
        <img src={Portfolio3} alt='Decentralized Bank App' className='worksImg' />
        <img src={Portfolio4} alt='ERC20 Token' className='worksImg' />
        <img src={Portfolio5} alt='ERC721 Token' className='worksImg' />
        <img src={Portfolio6} alt='ERC721 Token' className='worksImg' />
      </div>
      <button className='workBtn'>See More</button> */}

      {/* <Carousel className='worksImgs'>
        <div className='carouselImg'>
          <h1>
          <img src={Portfolio1} alt='Decentralized Bank App' className='carouselImgs1' />
          <p className="legend">Decentralized Bank App</p>
          </h1>
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
      </Carousel> */}
      <div>
        <div className="slider-container" >
          <Slider {...settings}>
            <div className='carouselImg' >
              <img src={Portfolio1} alt="image1" className='image' />
            </div>

            <div className='carouselImg' >
              <img src={Portfolio2} alt="image1" className='image' />
            </div>

            <div className='carouselImg' >
              <img src={Portfolio3} alt="image1" className='image' />
            </div>

            <div className='carouselImg'>
              <img src={Portfolio4} alt="image1" className='image'/>
            </div>

            <div className='carouselImg'>
              <img src={Portfolio5} alt="image6" className='image'/>
            </div>

          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Works;