import React from 'react'
import { BiMobile } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsLinkedin, BsEnvelope } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
    <h1>Contact me</h1>
    <div className='contact'>
       
          <div className='social-icons'>
            <div className='text-me'>
                
            <p title='Email'><BsEnvelope/> </p>
               <p> <BiMobile/></p>
            </div>
              
               <div className='follow-me'>
               <p> <BsInstagram/></p>
               <p> <BsFacebook/> </p>
               <p> <BsLinkedin/> </p>
               </div>
               
                
          </div>
           <form>
                <div className='form-group'>
                    <label> Email </label>
                    <input type='email' name='email'/>
                </div> 
                <div className='form-group'>
                    <label> Your Good Name</label>
                    <input type='email' name='email'/>
                </div> 
                <div className='form-group'>
                    <label> Message</label>
                    <textarea></textarea>
                </div> 
                <button>Send</button>
            </form> 
    </div>
    </>
  )
}

export default Contact