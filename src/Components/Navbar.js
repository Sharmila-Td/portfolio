import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <h3><i>Sha</i></h3>
        <ul className='nav-list'>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
        <ul className='icons'>
            <li> <BsInstagram/> </li>
            <li> <BsLinkedin/> </li>
            <li> <BsFacebook/> </li>
        </ul>
            <div classname='toggle'> <FaSun/> </div>
            
    </div>
    </>
  )
}

export default Navbar