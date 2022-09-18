import React from "react";
import SectionHeadings from "../../components/SectionHeadings/SectionHeadings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import { UilStar } from "@iconscout/react-unicons";

import { urlFor } from "../../client";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ testimonials }) => {
  return (
    <>
      <SectionHeadings
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />
      <div className="testimonial__container container">
        <div className="swiper-wrapper">
          <Swiper
            cssMode={true}
            modules={[Pagination, Autoplay]}
            loop={true}
            grabCursor={true}
            slidesPerView="auto"
            spaceBetween={48}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              568: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.testimonials?.map((item, idx) => (
              <SwiperSlide className="testimonial__content" key={idx}>
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src={urlFor(item.clientImg.asset._ref)}
                      alt=""
                      className="testimonial__img"
                      loading="lazy"
                    />

                    <div>
                      <h3 className="testimonial__name">{item.clientName}</h3>
                      <span className="testimonial__client">
                        {item.clientTitle}
                      </span>
                    </div>
                  </div>

                  <div>
                    <UilStar
                      width={20}
                      height={20}
                      className="testimonial__icon-star"
                    />
                    <UilStar
                      width={20}
                      height={20}
                      className="testimonial__icon-star"
                    />
                    <UilStar
                      width={20}
                      height={20}
                      className="testimonial__icon-star"
                    />
                    <UilStar
                      width={20}
                      height={20}
                      className="testimonial__icon-star"
                    />
                    <UilStar
                      width={20}
                      height={20}
                      className="testimonial__icon-star"
                    />
                  </div>
                </div>
                <p className="testimonial__description">{item.clientReview}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
