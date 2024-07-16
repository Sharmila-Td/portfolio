import React, { useState } from 'react'
import { BiMobile } from 'react-icons/bi';
import { BsInstagram, BsLinkedin, BsEnvelope, BsGithub } from 'react-icons/bs';
import './Contact.css'

const Contact = () => {
  const [username, setUsername] = useState('')
  return (
    <div className='contact container' id='contact'>
    <h3>Get in touch</h3>
    <div className="contact-content">
          <div className="contact-dial">
            <div className="contact-group">
              <a href="sharmi.webdev@gmail.com">
                  <BsEnvelope/>
              
              <p>sharmi.webdev@gmail.com</p>
              </a>
            </div>

            <div className="contact-group">
            <a href="+91 8807689230">
                  <BiMobile/>
                  <p>+91 8807689230</p>
              </a>
          
            </div>  
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
                    <input type='text' name='message' placeholder='Subject'/>
                </div> 
                <div className='form-group'>
                    <input type="textarea" className='textarea' placeholder='message..'/>
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