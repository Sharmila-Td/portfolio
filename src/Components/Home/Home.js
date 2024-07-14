import React from "react";
import profile from "../image/profile.webp";
import { FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";
import "./Home.css";

const Main = () => {
  return (
    <div className="home" id="home">
           <img src={profile} alt="profile" width={300} height={300} />
       <div className="home-content">
            <h3>Sharmila Thirupathi</h3>
            <h2>Mern Stack Developer</h2>
               <p> As a fresher, I am enthusiastic about starting my career in
               development and eager to learn more </p>
              <div className="home-info">
               <a href="#">
                <FiInstagram/> 
            </a>
            <a href="#">
                <FiLinkedin/> 
            </a>
            <a href="#">
                <FiFacebook/> 
            </a>
              </div> 
            <div className="btn">
                <a href="#contact">Hire Me</a>
            </div>
       </div>

 
      
    </div>
  );
};

export default Main;
