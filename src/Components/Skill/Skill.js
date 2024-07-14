import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill" id="skill">
      <h3>Skills </h3>
      <p>Here are the skills, I learned</p>
      <div className="skill-item">
        <div className="skill-link">
          <p>Frontend</p>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-link">
          <p>Backend</p>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-link">
          <p>Database</p>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-link">
          <p>Others</p>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
