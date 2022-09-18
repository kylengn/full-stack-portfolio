import React from "react";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Kyle</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <Socials section={"footer"} />
        </div>

        <p className="footer__copy">&#169; Kyle Nguyen. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
