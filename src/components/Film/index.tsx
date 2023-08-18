import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";


export default function Film() {

  

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

      <div className="w-[960px] grid grid-cols-4 gap-4 mt-[50px] mx-auto">
        <div>
          <img
            src="http://movie0706.cybersoft.edu.vn/hinhanh/togo_gp03.jpg"
            alt=""
            className="object-fill rounded-[4px]"
          />
          <div className="flex gap-3 items-center">
            <div className="bg-[#fb4226] text-center mr-[8px] py-[5px] text-[#fff] w-[33px] rounded-[4px] mt-[10px] font-[600]">
              C18
            </div>
            <h2 className="text-[1.8rem] font-[600]">Phi Công Siêu Đẳng</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
