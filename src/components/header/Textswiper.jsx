import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./textswiper.scss";
import Button from "@mui/material/Button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Textswiper = () => {
  return (
    <Swiper
    loop
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <div className="slide-pot">  <SwiperSlide>
        <div>
          <h2>GET START</h2>
          <p>YOUR FAVRIOT SHOPING</p>
          <Button variant="text" color="primary">
            BUY NOW
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2>GET START</h2>
          <p>YOUR FAVRIOT SHOPING</p>
          <Button variant="text" color="primary">
            BUY NOW
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2>GET START</h2>
          <p>YOUR FAVRIOT SHOPING</p>
          <Button variant="text" color="primary">
            BUY NOW
          </Button>
        </div>
      </SwiperSlide></div>
    
    </Swiper>
  );
};

export default Textswiper;
