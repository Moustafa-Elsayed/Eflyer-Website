import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./textswiper.scss";
import Button from "@mui/material/Button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/swiper.scss";
SwiperCore.use([Pagination]);

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
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <div className="slide-pot"></div>
      <SwiperSlide>
        <div className="slide-content">
          <h2>GET START</h2>
          <p>YOUR FAVRIOT SHOPING</p>
          <Button variant="contained" className="textslider-btn">
            BUY NOW
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <h2>GET START</h2>
          <p>YOUR FAVRIOT SHOPING</p>
          <Button variant="contained" className="textslider-btn">
            BUY NOW
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <h2>GET START</h2>
          <p>YOUR FAVRIOT SHOPING</p>
          <Button variant="contained" className="textslider-btn">
            BUY NOW
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Textswiper;
