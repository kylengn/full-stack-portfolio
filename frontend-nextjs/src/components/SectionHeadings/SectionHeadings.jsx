import React from "react";

const SectionHeadings = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
    </>
  );
};

export default SectionHeadings;
