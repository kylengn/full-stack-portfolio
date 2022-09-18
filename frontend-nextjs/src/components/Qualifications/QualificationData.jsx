import React from "react";
import { UilCalendarAlt } from "@iconscout/react-unicons";

const RenderQualData = ({ data, index }) => {
  // console.log(index);

  switch (data._type) {
    case "education":
      if (index % 2 == 0) {
        return (
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">{data.major}</h3>
              <span className="qualification__subtitle">{data.school}</span>
              <div className="qualification__calendar">
                <UilCalendarAlt width={12} height={12} />
                <span>{data.duration}</span>
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        );
      } else {
        return (
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">{data.major}</h3>
              <span className="qualification__subtitle">{data.school}</span>
              <div className="qualification__calendar">
                <UilCalendarAlt width={12} height={12} />
                <span>{data.duration}</span>
              </div>
            </div>
          </div>
        );
      }
      break;
    case "work":
      if (index % 2 == 0) {
        return (
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">{data.position}</h3>
              <span className="qualification__subtitle">{data.company}</span>
              <div className="qualification__calendar">
                <UilCalendarAlt width={12} height={12} />
                <span>{data.duration}</span>
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        );
      } else {
        return (
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">{data.position}</h3>
              <span className="qualification__subtitle">{data.company}</span>
              <div className="qualification__calendar">
                <UilCalendarAlt width={12} height={12} />
                <span>{data.duration}</span>
              </div>
            </div>
          </div>
        );
      }
      break;

    default:
      break;
  }
};

const QualificationContent = ({ target, data, isActive }) => {
  return (
    <div
      className={`qualification__content ${
        isActive ? "qualification__active" : ""
      }`}
      data-content
      id={`${target}`}
    >
      {data?.map((item, idx) => (
        <RenderQualData data={item} key={item._key} index={idx} />
      ))}
    </div>
  );
};

const QualificationData = ({ target, data, isActive }) => {
  // console.log(data);

  switch (target) {
    case "education":
      return (
        <>
          <QualificationContent
            target={target}
            data={data}
            isActive={isActive}
          />
        </>
      );
      break;
    case "work":
      return (
        <>
          <QualificationContent
            target={target}
            data={data}
            isActive={!isActive}
          />
        </>
      );
      break;

    default:
      break;
  }
};

export default QualificationData;
