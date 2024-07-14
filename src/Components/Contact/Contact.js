import React, { useState } from 'react'
import { BiMobile } from 'react-icons/bi';
import { BsInstagram, BsLinkedin, BsEnvelope, BsGithub } from 'react-icons/bs';
import './Contact.css'

const Contact = () => {
  const [username, setUsername] = useState('')
  return (
    <div className='contact' id='contact'>
    <h3>Get in touch</h3>
    <div className="contact-content">
          <div className="social-icons">
              <a href="sharmi.webdev@gmail.com">
                  <BsEnvelope/>
              </a>
              <a href="+91 8807689230">
                  <BiMobile/>
              </a>
              <a href="#">
                  <BsLinkedin/>
              </a>
              <a href="#">
                  <BsGithub/>
              </a>
              <a href="#">
                 <BsInstagram/>
              </a>
          </div>
          <div className="contact-form">
          <form>
                <div className='form-group'>
                    <input type='text' name='username' placeholder='UserName' value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
                </div> 
                <div className='form-group'>
                    <input type='email' name='email' placeholder='Email'/>
                </div> 
                <div className='form-group'>
                    <textarea> Message...</textarea>
                </div> 
                <div className="btn">
                <a href="#">Send</a>
            </div>
            </form> 
          </div>
    </div>
    </div>
   
  )
}

export default Contact