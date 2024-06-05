import React, { useRef } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

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
        <h3><i>Sha</i></h3>
        <pa className='nav-open' onClick={openMenu} > <FiAlignJustify/> </pa>
        <ul className="nav-list" ref={menubar}>
          <p className="nav-close" onClick={closeMenu}> <FiX/> </p>
          <li> <a href="#" className="nav-item">Home</a> </li>
          <li> <a href="#" className="nav-item">About</a> </li>
          <li> <a href="#" className="nav-item">Project</a> </li>
          <li> <a href="#" className="nav-item">Contact</a> </li>
          <li> <a href="#" className="nav-item">Blog</a> </li>
        </ul>
        <div className="nav-hire">Hire Me </div>
      </div>
    </>
  );
};

export default Navbar;
