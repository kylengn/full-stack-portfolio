import React from "react";
import { UilGraduationCap, UilBriefcaseAlt } from "@iconscout/react-unicons";
import { capitalize } from "../../utils/capitalize";

const QualificationTab = ({ target, handleClick, isActive }) => {
  switch (target) {
    case "education":
      return (
        <div
          data-target={`#${target}`}
          className={`qualification__button button--flex ${
            isActive ? "qualification__active" : ""
          }`}
          onClick={handleClick}
        >
          <UilGraduationCap className="qualification__icon" />
          {capitalize(target)}
        </div>
      );
      break;
    case "work":
      return (
        <div
          data-target={`#${target}`}
          className={`qualification__button button--flex ${
            isActive ? "qualification__active" : ""
          }`}
          onClick={handleClick}
        >
          <UilBriefcaseAlt className="qualification__icon" />
          {capitalize(target)}
        </div>
      );
      break;

    default:
      break;
  }
};

export default QualificationTab;
