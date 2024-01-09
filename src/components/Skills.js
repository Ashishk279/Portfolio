import React from 'react';
import "./Skills.css";
import Solidity from './images/solidityIcon.png';
import ReactIcon from './images/react.png';
import JavaScript from './images/JavascriptIcon.png';
import Web3 from './images/web3Icon.png';
const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle"> What I do</span>
      <span className="skillDesc" >I am a skilled blockchain developer. I am well-versed in Ethereum, capable of writing smart contracts using Solidity, and skilled in interacting with the Ethereum blockchain through Web3.js. My programming proficiency extends to languages such as C++, Rust, Java and I have experience creating Frontend applications using React.js, Javascript and some basic knowledge of Node.js for Backend development. I am actively seeking internship opportunities  to further apply and enhance my blockchain expertise. </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Solidity} alt="Solidity" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Solidity</h2>
            <p>Solidity is high-level, contract-oriented programming language used to writing smart contracts on various blockchain platforms like Ethereum.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={ReactIcon} alt="React" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>React</h2>
            <p>React is an open-source Javascript library maintained by Facebook. It is widely used for building user interfaces, particularly for single-page apllications and complex web interfaces.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={JavaScript} alt="JavaScript" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>Javascript is high-level programming language that is commonly used for web develeopment.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Web3} alt="Web3.js" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Web3.js</h2>
            <p>Web3.js is a Javascript library that provides an interface for interacting with the Ethereum blockchain. It enables tp build decentralized applications that sends transactions to, the Ethereum network.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;