import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

import flutterIcon from '../../assets/images/flutter.svg'; // Import SVG icon

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.skillName === 'Flutter' && (
                  <img src={flutterIcon} alt="Flutter Icon" className="svg-icon" />
                )}
                {skills.skillName !== 'Flutter' && (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
