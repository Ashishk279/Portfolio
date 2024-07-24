import React, { useState } from 'react';
import './Navbar.css';
import Logo from "../assets/images/blockchain.png";
import { Link } from 'react-scroll';
import ContactImg from "../assets/images/contactImg2.png";
import Menu from "../assets/images/icons8.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="desktopMenu" >
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
      </div>
      <button className='desktopBtn' onClick={() => {
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
    }}>
        <img src={ContactImg} alt='ContactImage' className="desktopMenuImg" />Contact Me
      </button>

      <img src={Menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}
export default Navbar;