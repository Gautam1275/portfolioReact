import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.jpg'
import contactImg from '../../assets/contact.png'
import { Link } from  'react-scroll'
import menu from '../../assets/menu.png'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={300}  className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={300}  className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={300}  className="desktopMenuListItem">Portfolio</Link>
        </div>
        <button  className="desktopMenuBtn" onClick = { () => {
          document.getElementById('contactPage').scrollIntoView({behavior : 'smooth'});
        }}>
            <img src={contactImg} alt="contactImg" className="desktopMenuImg" />Contact me</button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display : showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={300}  className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={300}  className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={300}  className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={300}  className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar 