import React, { useState } from "react";
import {
  UilArrowRight,
  UilTimes,
  UilWebGrid,
  UilArrow,
  UilPen,
} from "@iconscout/react-unicons";
import ServiceDesc from "./ServiceDesc";

const ServiceIcon = ({ title }) => {
  switch (title) {
    case "Frontend Development":
      return (
        <>
          <UilArrow width={30} height={30} className="services__icon" />
        </>
      );
      break;
    case "UI/UX Design":
      return (
        <>
          <UilWebGrid width={30} height={30} className="services__icon" />
        </>
      );
      break;
    case "Copywriting":
      return (
        <>
          <UilPen width={30} height={30} className="services__icon" />
        </>
      );
      break;

    default:
      break;
  }
};

const ServicesContent = ({ services }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModalOpen = () => {
    setIsModalActive(!isModalActive);
  };

  const handleModalClose = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <div className="services__content">
      <div>
        <ServiceIcon title={services.serviceTitle} />
        <h3 className="services__title">{services.serviceTitle}</h3>
      </div>

      <span
        className="button button--flex button--small button--link services__button"
        onClick={handleModalOpen}
      >
        View More
        <UilArrowRight className="button__icon" />
      </span>

      <div
        className={
          isModalActive ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <h4 className="services__modal-title">{services.serviceTitle}</h4>
          <UilTimes
            className="services__modal-close"
            onClick={handleModalClose}
          />

          <ul className="services__modal-services grid">
            {services.serviceModalDesc?.map((item, idx) => (
              <ServiceDesc desc={item} key={idx} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
