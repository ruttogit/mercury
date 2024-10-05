import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import "./Nav.css"
import { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false)


  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='nav-bar'>
        <div className="nav-left">
            <a href="#home"><h1 className="logo">MERCURY</h1></a>
        </div>
        <div className={isOpen ? 'nav-center active-nav' : 'nav-center'}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#collection">Collections</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </div>
        <div className="nav-right">
            <a href="#contact"><button className="btn nav-btn">Order Now</button></a>
            <div className="nav-icons" onClick={handleClick}>
                {isOpen ? <IoMdClose /> :  <FaBars />} 
            </div>
        </div>

    </div>
  )
}

export default Nav