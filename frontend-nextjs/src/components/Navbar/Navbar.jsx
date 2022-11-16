import React, { useState, useEffect } from "react";
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
  UilSun,
} from "@iconscout/react-unicons";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Dark Mode Theme
    let selectedTheme = localStorage.getItem("selected-theme");
    if (!darkMode && selectedTheme !== "dark-theme") {
      selectedTheme = "light-theme";
      setDarkMode(!darkMode);
    } else {
      selectedTheme = "dark-theme";
      setDarkMode(darkMode);
    }
    localStorage.setItem("selected-theme", selectedTheme);
    document.body.classList.toggle(selectedTheme);
  }, [darkMode]);

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

          {darkMode ? (
            <UilMoon
              className="change-theme"
              onClick={handleDarkMode}
              id="theme-button"
            />
          ) : (
            <UilSun
              className="change-theme"
              onClick={handleDarkMode}
              id="theme-button"
            />
          )}

          <div className="nav__toggle" id="nav-toggle">
            <UilApps className="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
