import React from "react";
import { UilMouseAlt, UilArrowDown } from "@iconscout/react-unicons";

const HomeScroll = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <UilMouseAlt width={30} height={30} className="home__scroll-mouse" />
        <span className="home__scroll-name">Scroll Down</span>
        <UilArrowDown width={20} height={20} className="home__scroll-arrow" />
      </a>
    </div>
  );
};

export default HomeScroll;
