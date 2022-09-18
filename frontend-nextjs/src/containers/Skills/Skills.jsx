import React from "react";
import SectionHeadings from "../../components/SectionHeadings/SectionHeadings";
import Skillset from "../../components/Skillset/Skillset";

const Skills = ({ skills }) => {
  return (
    <>
      <SectionHeadings title={skills.title} subtitle={skills.subtitle} />

      <div className="skills__container container grid">
        {skills.skillPercent?.map((item, idx) => (
          <Skillset key={idx} skillPercent={item} />
        ))}
      </div>
    </>
  );
};

export default Skills;
