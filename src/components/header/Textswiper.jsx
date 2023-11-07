import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./textswiper.css";
import Button from "@mui/material/Button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

SwiperCore.use([Pagination]);

const Textswiper = () => {
  return (
    <div className="banner">
      <Swiper
        loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <div className="slide-pot"></div>

        <SwiperSlide>
          <div className="slide-content">
            <h2>GET START</h2>
            <p>YOUR FAVRIOT SHOPING</p>
            <Button
              variant="contained"
              className="textslider-btn"
              sx={{
                backgroundColor: "#343a40",
                color: "white",
                marginTop: "20px",
                marginLeft: "10px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#f26522",
                },
              }}
            >
              BUY NOW
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>GET START</h2>
            <p>YOUR FAVRIOT SHOPING</p>
            <Button
              variant="contained"
              className="textslider-btn"
              sx={{
                backgroundColor: "#343a40",
                color: "white",
                marginTop: "20px",
                marginLeft: "10px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#f26522",
                },
              }}
            >
              BUY NOW
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>GET START</h2>
            <p>YOUR FAVRIOT SHOPING</p>
            <Button
              variant="contained"
              className="textslider-btn"
              sx={{
                backgroundColor: "#343a40",
                color: "white",
                marginTop: "20px",
                marginLeft: "10px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#f26522",
                },
              }}
            >
              BUY NOW
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Textswiper;
