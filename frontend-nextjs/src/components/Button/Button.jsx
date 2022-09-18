import React from "react";
import { UilMessage, UilDownloadAlt } from "@iconscout/react-unicons";

const Button = ({ btnKey, isWhite }) => {
  switch (btnKey) {
    case "contact":
      return (
        <a
          href="#contact"
          className={`button button--flex ${isWhite ? "button--white" : ""}`}
        >
          Contact Me{" "}
          <UilMessage width={20} height={20} className="button__icon" />
        </a>
      );
      break;
    case "download":
      return (
        <a
          download="true"
          href={`https://drive.google.com/file/d/1rX3F0ymmpugHLBvHxxXwetx--8w8mNkq/view?usp=sharing`}
          className="button button--flex"
        >
          Download CV{" "}
          <UilDownloadAlt width={20} height={20} className="button__icon" />
        </a>
      );
      break;

    default:
      break;
  }
};

export default Button;
