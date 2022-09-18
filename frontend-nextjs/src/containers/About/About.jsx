import React from "react";
import { urlFor } from "../../client";
import Button from "../../components/Button/Button";
import SectionHeadings from "../../components/SectionHeadings/SectionHeadings";

const About = ({ about }) => {
  return (
    <>
      <SectionHeadings title={about.title} subtitle={about.subtitle} />

      <div className="about__container container grid">
        <img
          src={urlFor(about.about_img)}
          alt="about_img"
          className="about__img"
          loading="lazy"
        />

        <div className="about__data">
          <p className="about__description">{about.description}</p>

          <div className="about__info">
            <div>
              <span className="about__info-title">{about.yearsOfExp}+</span>
              <span className="about__info-name">
                Years <br />
                experience
              </span>
            </div>
            <div>
              <span className="about__info-title">
                {about.completedProjects}+
              </span>
              <span className="about__info-name">
                Completed <br />
                projects
              </span>
            </div>
            <div>
              <span className="about__info-title">
                {about.companiesWorked}+
              </span>
              <span className="about__info-name">
                Companies <br />
                worked
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <Button btnKey={"download"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
