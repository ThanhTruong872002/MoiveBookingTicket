import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { LoginContext } from '../../App'
import { FilmItem } from '../../@types/Film'
import LazyLoad from 'react-lazyload'
import Button from '../Common/Button'
import styles from './FIlm.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Film() {
  const { filmData, setFilmData } = useContext(LoginContext)

  const [statusFilm, setStatusFilm] = useState(true)

  const [actionBtn, setActionBtn] = useState<boolean[]>(Array(filmData.length).fill(false))

  console.log('filmData', filmData)

  const handleMovieShowing = () => {
    setStatusFilm(true)
  }

  const handleMovieComming = () => {
    setStatusFilm(false)
  }

  const hanldeOnMouseEnter = (index: number) => {
    const updatedHoverItems = [...actionBtn]
    updatedHoverItems[index] = true
    setActionBtn(updatedHoverItems)
  }

  const handleOnMouseLeave = (index: number) => {
    const updatedHoverItems = [...actionBtn]
    updatedHoverItems[index] = false
    setActionBtn(updatedHoverItems)
  }

  useEffect(() => {
    if (statusFilm) {
      const getFilmData = async () => {
        const res = await axios.get('https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01')

        if (res.data) {
          setFilmData(res.data?.content)
        }
      }
      getFilmData()
    } else if (!statusFilm) {
      const getFilmDataCommingSoon = async () => {
        const res = await axios.get('https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02')
        if (res.data) {
          setFilmData(res.data?.content)
        }
      }
      getFilmDataCommingSoon()
    }
  }, [statusFilm])

  return (
    <div className='h-[5000px] container'>
      <div className='flex justify-center gap-8 mt-20'>
        <h2
          className='font-[600] text-[2.5rem] text-[#23966c] cursor-pointer hover:opacity-[.7]'
          onClick={handleMovieShowing}
        >
          Đang Chiếu
        </h2>
        <h2
          className='font-[600] text-[2.5rem] text-[#23966c] cursor-pointer hover:opacity-[.7]'
          onClick={handleMovieComming}
        >
          Sắp Chiếu
        </h2>
      </div>

      <div className='w-[1000px] grid grid-cols-4 gap-8 mt-[50px] mx-auto'>
        {filmData.map((film: FilmItem, index: number) => (
          <div key={index} onMouseMove={() => hanldeOnMouseEnter(index)} onMouseOut={() => handleOnMouseLeave(index)}>
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
            </LazyLoad>

            <div className='flex gap-3 items-center mt-5'>
              <div className='bg-[#fb4226] text-center mr-[8px] py-[5px] text-[#fff] w-auto p-2 rounded-[4px] mt-[10px] font-[600]'>
                {film.maNhom}
              </div>
              <h2 className='text-[1.6rem] font-[600] flex justify-center items-center'>{film.tenPhim}</h2>

              {actionBtn[index] && (
                <div className={cx('absolute -translate-y-4 movie-action')}>
                  <Button small>MUA VÉ</Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
