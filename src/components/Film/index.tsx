import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import axios from "axios";

interface FilmItem {
  manhom: string;
  hinhanh: string;
  tenphim: string;
}

export default function Film() {
  const [filmData, setFilmData] = useState<FilmItem[]>([]);

  console.log(filmData);

  const getFilmData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Movie");
      if (res.data) {
        setFilmData(res.data);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getFilmData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="h-[5000px] container">
      <div className="flex justify-center gap-8 mt-20">
        <h2 className="font-[600] text-[2.5rem] text-[#23966c] cursor-pointer hover:opacity-[.7]">
          Đang Chiếu
        </h2>
        <h2 className="font-[600] text-[2.5rem] text-[#23966c] cursor-pointer hover:opacity-[.7]">
          Sắp Chiếu
        </h2>
      </div>

      <div className="w-[1000px] grid grid-cols-4 gap-8 mt-[50px] mx-auto">
        {filmData.map((film) => (
          <Slider {...settings}>
            <div>
              <img
                src={`${film.hinhanh}`}
                alt=""
                className="block w-[230px] h-[350px] rounded-[4px]"
              />
              <div className="flex gap-3 items-center mt-5">
                <div className="bg-[#fb4226] text-center mr-[8px] py-[5px] text-[#fff] w-[36px] rounded-[4px] mt-[10px] font-[600]">
                  {film.manhom}
                </div>
                <h2 className="text-[1.8rem] font-[600] flex justify-center items-center">
                  {film.tenphim}
                </h2>
              </div>
            </div>
          </Slider>
        ))}
      </div>
    </div>
  );
}
