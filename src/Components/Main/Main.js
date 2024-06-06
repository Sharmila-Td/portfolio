import React from "react";
import profile from '../../image/profile.webp'
import './Main.css'

const Main = () => {
  return (
    <div className="main">
      <img src={profile} alt="profile" width={200} height={200}/>
      <h1>I'm Sharmila, Mern Stack Developer </h1>
      <p className="para-two">
        As a fresher, I am enthusiastic about starting my career in development
        and eager to learn more...{" "}
      </p>
      <div className="btn">
        <button className="btn-hire">Hire me</button>
        <button className="btn-resume">My Resume</button>
      </div>
    </div>
  );
};

export default Main;
