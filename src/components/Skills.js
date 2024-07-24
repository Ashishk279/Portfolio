import React from 'react';
import "./Skills.css";
import Solidity from '../assets/images/solidityIcon.png';
import ReactIcon from '../assets/images/react.png';
import JavaScript from '../assets/images/JavascriptIcon.png';
import Web3 from '../assets/images/web3Icon.png';
import Node from '../assets/images/nodejs.png';
import Express from '../assets/images/expressjs.png';
import Mongodb from '../assets/images/mongodb.png'
import Besu from '../assets/images/besu.jpg'
const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle"> What I do</span>
      <span className="skillDesc" >I'm a skilled blockchain developer with a strong focus on the Ethereum ecosystem. I'm proficient in writing secure and efficient smart contracts using Solidity. I leverage both Web3.js and ethers.js to seamlessly interact with the Ethereum blockchain for data retrieval and transaction execution. My programming skillset is diverse, encompassing languages like Solidity, JavaScript (including React.js for frontend development), C++, Rust, and Java. Additionally, I have backend experience with Node.js, Express.js, and MongoDB. I'm actively seeking a full-time blockchain developer role to further my expertise and contribute to innovative blockchain projects. </span>
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
        <div className="skillBar">
          <img src={Node} alt="Node.js" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Node.js</h2>
            <p>Node.js is a cross-platform, open-source runtime environment built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code outside of a web browser, enabling the creation of server-side applications and network tools.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Express} alt="Express.js" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Express.js</h2>
            <p>Express.js is a popular web framework built on top of Node.js. It provides a robust set of features and simplifies the process of creating web applications and APIs. </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Mongodb} alt="MongoDB" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>MongoDB</h2>
            <p>MongoDB is a popular NoSQL (Not Only SQL) document-oriented database.MongoDB stores data in flexible JSON-like documents. This makes it ideal for storing and managing complex data structures and evolving schemas.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Besu} alt="Hyperledger Besu" className="skillBarImg" style={{width:"8.5rem"}}></img>
          <div className="skillBarText">
            <h2>Hyperledger Besu</h2>
            <p>Hyperledger Besu is an open-source Ethereum client designed for enterprise use cases. It provides a robust and secure platform for building and deploying blockchain applications on both public and private permissioned networks. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;