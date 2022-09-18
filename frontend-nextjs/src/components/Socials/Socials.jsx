import React from "react";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilInstagram,
} from "@iconscout/react-unicons";

const Socials = ({ section }) => {
  switch (section) {
    case "home":
      return (
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/kyle-ngn"
            target="_blank"
            className="home__social-icon"
          >
            <UilLinkedinAlt width={20} height={20} />
          </a>
          <a
            href="https://github.com/kylengn"
            target="_blank"
            className="home__social-icon"
          >
            <UilGithubAlt width={20} height={20} />
          </a>
          <a
            href="https://www.instagram.com/kyle.ngn"
            target="_blank"
            className="home__social-icon"
          >
            <UilInstagram width={20} height={20} />
          </a>
        </div>
      );
      break;
    case "footer":
      return (
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/kyle-ngn"
            target="_blank"
            className="footer__social"
          >
            <UilLinkedinAlt width={20} height={20} />
          </a>
          <a
            href="https://github.com/kylengn"
            target="_blank"
            className="footer__social"
          >
            <UilGithubAlt width={20} height={20} />
          </a>
          <a
            href="https://www.instagram.com/kyle.ngn"
            target="_blank"
            className="footer__social"
          >
            <UilInstagram width={20} height={20} />
          </a>
        </div>
      );
      break;

    default:
      break;
  }
};

export default Socials;
