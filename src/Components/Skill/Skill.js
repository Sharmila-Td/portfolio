import React from "react";
import './Skill.css'

const Skill = () => {
  return (
    <div className="skill">
      <h3>Skills </h3>
      <p>Here are the skills, I learned</p>
      <div className="skill-box">
        <div className="part-one">
        <div className="frontend">
          <h4>Frontend</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>BOOTSTRAP</li>
          </ul>
        </div>
        <div className="backend">
          <h4>Backend</h4>
          <ul>
            <li>NODE.JS</li>
            <li>EXPRESS.JS</li>
            <li>RESTFUL API</li>
          </ul>
        </div>
        </div>
        <div className="part-two">
        <div className="database">
          <h4>Database</h4>
          <ul>
            <li>MONGODB</li>
            <li>MYSQL</li>
            <li>MONGOOSE</li>
          </ul>
        </div>
        <div className="other">
          <h4>Other tools</h4>
          <ul>
            <li>NPM</li>
            <li>POSTMAN</li>
            <li>VERCEL</li>
            <li>RENDER</li>
          </ul>
        </div>
</div>
        
        
      </div>
    </div>
  );
};

export default Skill;
