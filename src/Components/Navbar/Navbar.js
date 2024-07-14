import React, { useRef } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import './Navbar.css'


const Navbar = () => {
  const menubar = useRef();

  const openMenu = () => {
    menubar.current.style.left = '0'
  }
  const closeMenu = () => {
    menubar.current.style.left = "-350px"
  }
  return (
    <>
      <div className="nav">
        <a href="#home" className="nav-logo">
          Sha
        </a>

        <a className='nav-open' onClick={openMenu} > <FiAlignJustify/> </a>

        <ul className="nav-list" ref={menubar}>
          <p className="nav-close" onClick={closeMenu}> <FiX/> </p>

          <li className="nav-item">
             <a href="#home" className="nav-link">Home</a>
           </li>

          <li className="nav-item"> 
            <a href="#about" className="nav-link">About</a> 
          </li>

          <li className="nav-item"> 
            <a href="#service" className="nav-link">Service</a> 
          </li>

          <li className="nav-item"> 
            <a href="#skill" className="nav-link">Skill</a>
          </li>

          <li className="nav-item"> 
            <a href="#" className="nav-link">Project</a>
          </li>

          <li className="nav-item"> 
            <a href="#contact" className="nav-link">Contact</a>
          </li>

        </ul>

        <div classNam="setting">
            <CiSettings/> 
        </div>
      </div>
     
    </>
  );
};

export default Navbar;
