import React from 'react'
import './styles.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  }

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src=' https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-2-2.jpg'
            alt=''
            className='h-[100%] w-[100%] object-cover'
          />
        </div>
        <div>
          <img src='./image/banner1.png' alt='' className='h-[100%] w-[100%] object-cover' />
        </div>
        <div>
          <img src='./image/banner2.png' alt='' className='h-[100%] w-[100%] object-cover' />
        </div>
        <div>
          <img src='./image/banner3.jpg' alt='' className='h-[100%] w-[100%] object-cover' />
        </div>
        <div>
          <img src='./image/App.jpg' alt='' className='h-[100%] w-[100%] object-cover' />
        </div>
        <div>
          <img src='./image/Banner-BHD.jpeg' alt='' className='h-[100%] w-[100%] object-cover' />
        </div>
      </Slider>
    </div>
  )
}
