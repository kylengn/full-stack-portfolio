import React from "react";
import { UilCheckCircle } from "@iconscout/react-unicons";

const ServiceDesc = ({ desc }) => {
  return (
    <li className="services__modal-service">
      <UilCheckCircle className="services__modal-icon" />
      <p>{desc}</p>
    </li>
  );
};

export default ServiceDesc;
