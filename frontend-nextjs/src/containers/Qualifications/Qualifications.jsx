import React, { useState } from "react";
import QualificationData from "../../components/Qualifications/QualificationData";
import QualificationTab from "../../components/Qualifications/QualificationTab";
import SectionHeadings from "../../components/SectionHeadings/SectionHeadings";

const Qualifications = ({ qualifications }) => {
  const [isActive, setActive] = useState(true);
  const work = qualifications["work"];
  const workStr = work.map((item) => item._type).reduce((item) => item);
  const education = qualifications["education"];
  const educationStr = education
    .map((item) => item._type)
    .reduce((item) => item);

  // console.log(educationStr);
  // console.log(workStr);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <SectionHeadings
        title={qualifications.title}
        subtitle={qualifications.subtitle}
      />

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <QualificationTab
            target={educationStr}
            handleClick={handleClick}
            isActive={isActive}
          />
          <QualificationTab
            target={workStr}
            handleClick={handleClick}
            isActive={!isActive}
          />
        </div>

        <div className="qualification__sections">
          <QualificationData
            target={educationStr}
            data={education}
            isActive={isActive}
          />
          <QualificationData target={workStr} data={work} isActive={isActive} />
        </div>
      </div>
    </>
  );
};

export default Qualifications;
