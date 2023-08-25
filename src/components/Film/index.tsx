import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { LoginContext } from '../../App'
import { FilmItem } from '../../@types/Film'
import LazyLoad from 'react-lazyload'
import Button from '../Common/Button'
import './Film.css'
import {  NavLink } from 'react-router-dom'

export default function Film() {
  const { filmData, setFilmData } = useContext(LoginContext)

  const [statusFilm, setStatusFilm] = useState(true)

  console.log('filmData', filmData)

  const handleMovieShowing = () => {
    setStatusFilm(true)
  }

  const handleMovieComming = () => {
    setStatusFilm(false)
  }

  useEffect(() => {
    if (statusFilm) {
      const getFilmData = async () => {
        const res = await axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03')

        if (res) {
          setFilmData(res.data)
        }
      }
      getFilmData()
    } else if (!statusFilm) {
      const getFilmDataCommingSoon = async () => {
        const res = await axios.get('https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04')
        if (res.data) {
          setFilmData(res.data?.content)
        }
      }
      getFilmDataCommingSoon()
    }
  }, [statusFilm])
  return (
    <div className='pt-20 mt-36'>
      <div className='container  '>
        <div className='flex justify-center gap-8 mt-20 '>
          <div onClick={handleMovieShowing}>
            {' '}
            <Button btnShowingFilm>ĐANG CHIẾU</Button>
          </div>
          <div onClick={handleMovieComming}>
            {' '}
            <Button btnShowingFilm>SẮP CHIẾU</Button>
          </div>
        </div>

        <div className='w-[1000px] grid grid-cols-4 gap-8 mt-[50px] mx-auto'>
          {filmData.map((film: FilmItem) => (
            <div className='movie-item' key={film.maPhim}>
              <LazyLoad>
                <img
                  src={`${film.hinhAnh}`}
                  alt=''
                  className='block w-[230px] h-[350px] rounded-[4px] object-cover cursor-pointer'
                  onError={(event) => {
                    event.currentTarget.src =
                      'https://th.bing.com/th/id/R.815ba06ac795a89cfc979687071be296?rik=gltXSX1%2bzm8Qhw&pid=ImgRaw&r=0'
                  }}
                />
                <div className='relative icon-play  '>
                  <a className='popup-youtube' href={film.trailer} data-lity>
                    <img
                      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABvFBMVEUAAABPT08AAAAAAABFRUX////+/v5RUVFLS0s/Pz9NTU3///8KCgpKSkr5+fn+/v7////////////////////////8/Pz///////9paWlXV1eWlpYQEBD7+/v///+6uroqKirX19eVlZWIiIhQUFAfHx/////19fX39/f////////////////////////n5+fZ2dnj4+O4uLiNjY09PT3///////////////////////////+zs7P///8VFRX///9HR0cxMTH////////////p6en////n5+fb29vq6urU1NTAwMCnp6d5eXlxcXFzc3NeXl5qamoeHh5BQUE4ODj////8/Pzt7e3a2trQ0ND///////+9vb3Pz8/GxsacnJyYmJiUlJSmpqZ2dnb////////////+/v7x8fH09PT///+5ubnU1NSsrKyhoaGJiYmcnJxaWlqRkZE4ODj////x8fHn5+f////////U1NTIyMj///+/v7+1tbWJiYn///+fn5////9BQUEyMjJgYGD////////s7Ozc3NzJycna2tq/v7+GhoZCQkIWFhb///////////////////8kNpXEAAAAk3RSTlNrawBnaPz6a2pmagZraPP8KRY59PIM9M+ti22La/PMnWu3hoCAawLx6+aomoZZGsrJxq+dawT2xLaxo5yciW5ra2toXAre1tXOzcajl5SQi4V0c2trTfbc1MXBvrSvpqShm4x5ZE9A7Onj1Lewq6aaj4aDeDjezsm9sqygoJ+cl5J/enZvQyLj1MC7tIt7Z04kIw15AUOJAAAFPElEQVRYw6XZd3/SQBgH8NBcEgKEQJiitIW2tBXpslRrl917L23VWq177733Hr837KnVEAOXEJ//+X6eu+dy44GrYIY3GMj1xGONYUEIN8biPblA0Mv+BcfStK0H5wUYQjj/YEvzOgG9gT2VYQokbzWnjnVPPX061X0s1XwrKQDhyj0Bb5ng0HI8BPhHj56YT0gehRBZJkTxSIn5E0dH/UAovjxUBpjPrQHi+KMaRSYelyE8RCY1j8ZFYC2XtwtqnQL8remErhnCTeREutUPoVOzBTZlQ1hJ1RC3WdPzdJOa1ApC2SZrULsDtTmtEJdFECXdrOKOZgFmts6goUrRx8rIkihVDTizlWGBkSfA6nXZZTPk66vAk0hpMLgb6r2XxGU7yMt7KnYHS4Gv15GcVNyuMsKtTCax/ro4GLyLaJVp9ixnsiqKu8FiYGQ3og8V6pUpKg+j2B0pAmZpfgyPIdIcs2awD+okcbschJtMquj7FzwdxkVWPdiVuYjwaSPYFENrgnoOxUQrYk2FYKYLDSeJy3GQkw3oyhSAN0WxSveciFWiqOmgdz+a9fE6G3Uz9nv/gjkhmib/B5J0VMj9ASP7kCKe/+EkyaWksC+yDS6r/hriHKPjXVzq/zxXry7/BjNxtBKnmbkPtlfX7fJxHMcfRjzzCwyExLTbmdbeX7eL2w5+TgwFfoF7MJ7wMD8td7GBupcoVhi+Mez5CQ5VoltmeAdPXjdVjOZWTTVj8HtROUTBmyF2SeSrZ+4niGGoi7pWCNbWh25ScACjiocF7gRu18j6WBerfbpiEA9hoILzHsBR2cUERdCT0PV7IunMUa4E2IYDXi54XjhBLEGI7+dlml17ndnRwVl1JMgFhOi8xxoEVneSRZodKxb8QoA7hXMJlx0Qyfu9PMeOVeS4ZxiX7IHAWK2F2IIeLo6Uxy6Ihg2ORfJH0MnFcEyxDUJ9d4NngJcR4xrRTeyDwPAMXxp8jEYujKmyQKx8WCgJTiPMAVdllifJHwUY4xJfCpwBrEDp4K4dRtC/0csxQKsht+/ijeDoDp5jDpldlCUfZwBXLtHFzSwKe9n0+zgD+GaaZ67DDcQYC1ty0X2qEBQmTIvQvLBZn141xxWCDZs+6ll+evrmYPYM4Fv6IVvFMAYN25fJ08GoXg2L7Ss4QjfYEp4ODs/q1WBvsCWOAKnfp4O0Gi8MHPMI+HlImQ/edh+ng+eumKrBOKQqNPMxKi0WbvUvPrE44zGq6Qe98fu1A5Q66OlV5LbxKuKuc8DpV5GKQIfxsiRVO/L4a2JH4BeYN17npCWfM5Be5/LFLpysCWSXRP1ScCXWrzd1nDPwAr0SF7m0S/0OvbmkMGh6VrBXDBts0Z8VNLTth4/zAW+KolbkaSa1O/RunEVX3vx4lNwOB+ybQKypyPPW47QibQifLvYAlx0u6Q3R/ACvyGSRnOKdbQpJZDNFmxj+47wD77i/eBOjIrgO/16+/Pz8WA8WbwR9W2PkyMhv7SujVSW2+fgyOF+byGhV0XnMAhPPedve8wkg+53V7sv3hXF2k+dtcfzmWYT78hYNyVeVUFvmKGnJzbWoqHxlo2Xa1YHkhVpKMrnaC0l0dDXZa+ruF1B/+FovNUtovdcO10PYr9ltO3sH9wHi2N5a3mzyNLm9YyKwb9BbRmM8cireAdQfaptd8FFkO+i2sjDbdqge6Iifijho3YcA1T/ccuTylemZmekrl4+0DPtVIFRm6143tYEDI/gnRg4MMP9csP77Y7CnM9YYAkKNsc6eQcu/P34ANod6sZ/pavoAAAAASUVORK5CYII='
                      alt=''
                      className='absolute bottom-52 left-28 cursor-pointer '
                    />
                  </a>
                </div>
              </LazyLoad>

              <div className='button-datve relative overflow-hidden'>
                <div className='flex gap-3 items-center mt-6 h-[62px]'>
                  {/* <div className='bg-[#fb4226] text-center mr-[8px] py-[5px] text-[#fff] w-auto p-2 rounded-[4px] font-[600]'>
                    C18
                  </div> */}
                  <h2 className='text-[1.6rem] font-[600] w-auto h-auto text-white  uppercase mx-auto leading-10 max-h-[50px] text-ellipsis overflow-hidden' >
                    {film.tenPhim}
                  </h2>
                  <div className='absolute -translate-y-4 ml-[-100%] btn-booking'>
                    <NavLink style={{textDecoration:"none"}} to={`/detail/${film.maPhim}`}>
                      <Button small>MUA VÉ</Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
