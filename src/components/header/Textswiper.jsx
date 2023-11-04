import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./textswiper.scss";

const Textswiper = () => {
  const slides = [
    "Slide 1: Your text here",
    "Slide 2: More text goes here",
    "Slide 3: Additional content",
  ];
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {slides.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-text">{text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Textswiper;
