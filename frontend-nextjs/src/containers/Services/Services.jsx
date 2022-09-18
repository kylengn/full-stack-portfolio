import React from "react";
import SectionHeadings from "../../components/SectionHeadings/SectionHeadings";
import ServicesContent from "../../components/Services/ServicesContent";

const Services = ({ services }) => {
  return (
    <>
      <SectionHeadings title={services.title} subtitle={services.subtitle} />

      <div className="services__container container grid">
        {services.services?.map((item, idx) => (
          <ServicesContent services={item} key={idx} />
        ))}
      </div>
    </>
  );
};

export default Services;
