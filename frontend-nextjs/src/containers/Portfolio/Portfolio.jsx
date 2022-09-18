import React from "react";
import SectionHeadings from "../../components/SectionHeadings/SectionHeadings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import {
  UilArrowRight,
  UilAngleRightB,
  UilAngleLeftB,
} from "@iconscout/react-unicons";

import { urlFor } from "../../client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = ({ portfolio }) => {
  return (
    <>
      <SectionHeadings title={portfolio.title} subtitle={portfolio.subtitle} />

      <div className="portfolio__container container">
        <div className="swiper-wrapper">
          <Swiper
            cssMode={true}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
            }}
          >
            {portfolio.projects?.map((item, idx) => (
              <SwiperSlide className="portfolio__content grid" key={idx}>
                <img
                  src={urlFor(item.projectImg.asset._ref)}
                  alt=""
                  className="portfolio__img"
                />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">{item.projectName}</h3>
                  <p className="portfolio__description">{item.projectDesc}</p>
                  <a
                    href={item.projectLink}
                    target="_blank"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <UilArrowRight className="button__icon" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev">
            <UilAngleLeftB
              width={40}
              height={40}
              className="swiper-portfolio-icon"
            />
          </div>

          <div className="swiper-button-next">
            <UilAngleRightB
              width={40}
              height={40}
              className="swiper-portfolio-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
