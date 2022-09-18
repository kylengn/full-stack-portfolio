import React from "react";
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilAt,
  UilTimes,
  UilApps,
  UilMoon,
} from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Kyle
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <UilEstate className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <UilUser className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <UilFileAlt className="nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <UilBriefcaseAlt className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <UilScenery className="nav__icon" /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <UilAt className="nav__icon" /> Contact
              </a>
            </li>
          </ul>
          <UilTimes className="nav__close" id="nav-close" />
        </div>
        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          {/* <UilMoon className="uil uil-moon change-theme" id="theme-button" /> */}

          <div className="nav__toggle" id="nav-toggle">
            <UilApps className="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
