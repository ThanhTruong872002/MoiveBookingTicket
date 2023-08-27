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
    <div className=''>
      <Slider {...settings}>
        <div>
          <img
            src=' https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-2-2.jpg'
            alt=''
            className='h-[100%] w-[100%] object-cover'
          />
        </div>
        <div>
          <img
            src='https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-11.jpg'
            alt=''
            className='h-[100%] w-[100%] object-cover'
          />
        </div>
        <div>
          <img
            src='https://www.bhdstar.vn/wp-content/uploads/2018/03/DEAL-1K-1920x1080.png'
            alt=''
            className='h-[100%] w-[100%] object-cover'
          />
        </div>
        <div>
          <img
            src='https://www.bhdstar.vn/wp-content/uploads/2018/03/1920X1080-MI7.jpg'
            alt=''
            className='h-[100%] w-[100%] object-cover'
          />
        </div>
      </Slider>
    </div>
  )
}
