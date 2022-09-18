import React from "react";
import { urlFor } from "../../client";
import Button from "../../components/Button/Button";

const CallToAction = ({ callToAction }) => {
  return (
    <>
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">{callToAction.title}</h2>
            <p className="project__description">{callToAction.desc}</p>
            <Button btnKey={"contact"} isWhite />
          </div>

          <img
            src={urlFor(callToAction.ctaImg.asset._ref)}
            alt=""
            className="project__img"
          />
        </div>
      </div>
    </>
  );
};

export default CallToAction;
