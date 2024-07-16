import React from "react";
import profile from "../image/profile1.jpg";
import { FiInstagram, FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";
import "./Home.css";

const Main = () => {
  return (
    <div className="home container" id="home">
      <div className="home-img-content">
      <img
        src={profile}
        alt="profile"
        className="home-img"/>
      </div>
    

      <div className="home-content">

        <h1>Sharmila Thirupathi</h1>
        <h2>Mern Stack Developer</h2>
        <p>
          As a fresher, I am enthusiastic about starting my career in
          development and eager to learn more
        </p>

        <div className="home-links">
          <a href="#">
            <FiInstagram />
          </a>
          <a href="#">
            <FiLinkedin />
          </a>
          <a href="#">
            <FiFacebook />
          </a>
          <a href="https://github.com/sharmila-developer" target="_blank">
              <FiGithub/>
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
