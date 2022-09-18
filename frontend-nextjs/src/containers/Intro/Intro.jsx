import React, { useState, useEffect } from "react";
import Socials from "../../components/Socials/Socials";
import Button from "../../components/Button/Button";
import HomeScroll from "../../components/HomeScroll";
import { urlFor } from "../../client";

const Intro = ({ intro }) => {
  return (
    <div className="home__container container grid">
      <div className="home__content grid">
        {/* Home Socials */}
        <Socials section={"home"} />
        {/* Home Img */}
        <div className="home__img">
          <svg
            className="home__blob"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 200 187"
          >
            <mask id="mask0" style={{ maskType: "alpha" }}>
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                x="30"
                y="8"
                className="home__blob-img"
                xlinkHref="data:image/png;base64"
                href={urlFor(intro.home_img)}
                loading="lazy"
              />
            </g>
          </svg>
        </div>
        {/* Home Data */}
        <div className="home__data">
          <h1 className="home__title">{intro.title}</h1>
          <h3 className="home__subtitle">{intro.subtitle}</h3>
          <p className="home__description">{intro.description}</p>
          <Button btnKey={"contact"} />
        </div>
      </div>
      {/* Home Scroll */}
      <HomeScroll />
    </div>
  );
};

export default Intro;
