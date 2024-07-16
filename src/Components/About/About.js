import React from "react";
import profile from "../image/profile2.JPG";
import { BiUser, BiMobile, BiEnvelope, BiLocationPlus } from "react-icons/bi";
import "./About.css";

const About = () => {
  return (
    <div className="about container" id="about">
        <h3>About Me</h3>
        <div className="about-content">
            <img src={profile} alt="profile" width={300} height={300}/>
            <div className="about-detail">
                  <h4>WHO AM I ?</h4>
                 <p>Built a responsive web application using React, NodeJs and MongoDB, showcasing my skills in frontend development </p>
                
                 <div className="about-info">
               <p>
                 <BiUser/> Sharmila T
               </p>

               <p>
                 <BiEnvelope/> sharmi.webdev@gmail.com
               </p>

               <p>
                 <BiMobile/> +91 8807689230
               </p>

               <p>
                 <BiLocationPlus/> Thanjavur
               </p>

               <div className='btn'>
                  <a href="#">Resume</a>
              </div>
              
              </div>
           
            </div>
        </div> 
    </div>
  )
};

export default About;
