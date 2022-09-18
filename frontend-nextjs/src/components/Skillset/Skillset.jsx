import React, { useState, useEffect, useRef } from "react";
import {
  UilAngleDown,
  UilBracketsCurly,
  UilCodeBranch,
  UilSwatchbook,
} from "@iconscout/react-unicons";

const Skillset = ({ skillPercent }) => {
  let skillNames = Object.keys(skillPercent).filter(
    (el) => !el.includes("_") && !el.includes("yearsExp")
  );

  for (let i = 0; i < skillNames.length; i++) {
    let skill = skillNames[i];

    switch (skill) {
      case "api":
        skillNames[i] = "API";
        break;
      case "css":
        skillNames[i] = "CSS";
        break;
      case "html":
        skillNames[i] = "HTML";
        break;
      case "react":
        skillNames[i] = "React";
        break;
      case "javascript":
        skillNames[i] = "JavaScript";
        break;
      case "adobe":
        skillNames[i] = "Adobe Suite";
        break;
      case "sketch":
        skillNames[i] = "Sketch";
        break;
      case "figma":
        skillNames[i] = "Figma";
        break;
      case "git":
        skillNames[i] = "Version Control";
        break;
      case "review":
        skillNames[i] = "Code Review";
        break;
      case "debug":
        skillNames[i] = "Debugging";
        break;
      case "scrum":
        skillNames[i] = "Scrum & Agile";
        break;

      default:
        break;
    }
  }

  let skillValues = Object.values(skillPercent).filter(
    (el) => typeof el == "number"
  );

  let yearsOfExp = Object.entries(skillPercent)
    .filter((el) => el.includes("yearsExp"))
    .map((entry) => {
      return [entry[1]];
    });

  // console.log(yearsOfExp);

  const skillRef = useRef();

  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    skillRef.current.className = "skills__content skills__close";
  }, []);

  const toggleSkill = () => {
    setToggled(!toggled);

    skillRef.current.className === "skills__content skills__open"
      ? (skillRef.current.className = "skills__content skills__close")
      : (skillRef.current.className = "skills__content skills__open");
  };

  switch (skillPercent._type) {
    case "frontend":
      return (
        <div ref={skillRef}>
          <div className="skills__header" onClick={toggleSkill}>
            <UilBracketsCurly width={30} height={30} className="skills__icon" />

            <div>
              <h1 className="skills__title">Frontend Development</h1>
              <span className="skills__subtitle">
                More Than {yearsOfExp} Years
              </span>
            </div>

            <UilAngleDown className="skills__arrow" />
          </div>

          {toggled && (
            <div className="skills__list grid">
              {skillNames?.map((item, idx) => (
                <div className="skills__data" key={idx}>
                  <div className="skills__title">
                    <h3 className="skills__name">{item}</h3>
                    <span className="skills__number">{skillValues[idx]}%</span>
                  </div>
                  <div className="skills__bar">
                    <div
                      className="skills__percentage"
                      style={{ width: `${skillValues[idx]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
      break;
    case "workflow":
      return (
        <div ref={skillRef}>
          <div className="skills__header" onClick={toggleSkill}>
            <UilCodeBranch width={30} height={30} className="skills__icon" />

            <div>
              <h1 className="skills__title">Development Workflow</h1>
              <span className="skills__subtitle">
                More Than {yearsOfExp} Years
              </span>
            </div>

            <UilAngleDown className="skills__arrow" />
          </div>

          {toggled && (
            <div className="skills__list grid">
              {skillNames?.map((item, idx) => (
                <div className="skills__data" key={idx}>
                  <div className="skills__title">
                    <h3 className="skills__name">{item}</h3>
                    <span className="skills__number">{skillValues[idx]}%</span>
                  </div>
                  <div className="skills__bar">
                    <div
                      className="skills__percentage"
                      style={{ width: `${skillValues[idx]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
      break;
    case "design":
      return (
        <div ref={skillRef}>
          <div className="skills__header" onClick={toggleSkill}>
            <UilSwatchbook width={30} height={30} className="skills__icon" />

            <div>
              <h1 className="skills__title">UI/UX Design</h1>
              <span className="skills__subtitle">
                More Than {yearsOfExp} Years
              </span>
            </div>

            <UilAngleDown className="skills__arrow" />
          </div>

          {toggled && (
            <div className="skills__list grid">
              {skillNames?.map((item, idx) => (
                <div className="skills__data" key={idx}>
                  <div className="skills__title">
                    <h3 className="skills__name">{item}</h3>
                    <span className="skills__number">{skillValues[idx]}%</span>
                  </div>
                  <div className="skills__bar">
                    <div
                      className="skills__percentage"
                      style={{ width: `${skillValues[idx]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
      break;
    default:
      break;
  }
};

export default Skillset;
