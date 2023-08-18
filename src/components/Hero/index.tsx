import React from "react";
import "./styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  };

  return (
    <div className="mt-9">
      <Slider {...settings}>
        <div>
          <img
            src="https://cybersoft-movie-phutran.web.app/static/media/sliderkm4.19113c07.jpg"
            alt=""
            className="h-[600px] w-[100%] object-cover"
          />
        </div>
        <div>
          <img
            src="https://cybersoft-movie-phutran.web.app/static/media/sliderkm3.41d81f51.jpg"
            alt=""
            className="h-[600px] w-[100%] object-cover"
          />
        </div>
        <div>
          <img
            src="https://cybersoft-movie-phutran.web.app/static/media/sliderkm.45e0b4c4.jpg"
            alt=""
            className="h-[600px] w-[100%] object-cover"
          />
        </div>
        <div>
          <img
            src="https://cybersoft-movie-phutran.web.app/static/media/sliderkm1.c6a9fe27.png"
            alt=""
            className="h-[600px] w-[100%] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}
