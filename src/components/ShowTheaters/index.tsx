import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Phim, data } from '../../@types/DetailsFilm'
import { CalenderIcon, CheveronDown } from '../Common/Icons'
import { NavLink } from 'react-router-dom'



export default function ShowTheaters() {
  const { id } = useParams()

  const [detailsFilmData, setDetailsFilmData] = useState<Phim>(data)

  const [checked, setChecked] = useState(false)


  const handleClick = () => {
    setChecked(!checked)
  }

  // const handleClickCinema = (cinemaID :any) => {
  //     setCinemaChecked(prev => ({
  //       ...prev,
  //       [cinemaID] : !prev[cinemaID]
  //     }))
  // }

  const getDetailsFilm = async () => {
    const res = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
    )
    if (res.data) {
      setDetailsFilmData(res.data)
    }
  }
  useEffect(() => {
    getDetailsFilm()
  }, [])

  const [activeTab, setActiveTab] = useState(0)

  console.log(detailsFilmData.heThongRapChieu)

  return (
    <div>
      <div className='w-[100%] h-[800px] bg-white mt-20 flex rounded-md '>
        <div className='w-[30%] overflow-scroll'>
          {detailsFilmData.heThongRapChieu.map((result, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveTab(index)
              }}
              className={` p-4 transition-all  ${
                index === activeTab ? 'border-e-4 border-red-600 border-solid border-b-[#ccc]' : ''
              } cursor-pointer w-[100%] p-5 text-[1.6rem] font-[600] flex items-center gap-8 border-b-[1px] border-solid border-[#ccc]`}
            >
              <img className='w-[50px] h-[50px] ' src={result.logo} alt='' />
              <h2>{result.maHeThongRap}</h2>
            </div>
          ))}
        </div>

        <div className='w-[70%] border-l-[1px] border-solid border-[#ccc] overflow-scroll'>
          {detailsFilmData.heThongRapChieu.map((result) =>
            result.cumRapChieu.map((res, index) =>
              res.lichChieuPhim.map((res2) => (
                <div className='flex flex-col' key={index}>
                  <div className=' flex gap-2 items-center justify-between'>
                    <div className='flex items-center'>
                      <div className='px-5 py-8'>
                        <img
                          className='w-[60px] h-[60px] object-cover rounded-[5%] '
                          src='https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg'
                          alt=''
                        />
                      </div>
                      <div>
                        <h2 className='text-[1.6rem] font-[600] '>{res.maCumRap}</h2>
                        <p className='text-[#9b9b9b] font-[400] text-[12px] mt-4'>113 phút - TIX 8.5 - IMDb 0</p>
                      </div>
                    </div>
                    <div onClick={handleClick} className='w-8 h-8 cursor-pointer mr-20'>
                      <CheveronDown />
                    </div>
                  </div>
                  {checked && (
                    <div>
                      <h2 className='font-[600] text-[1.8rem] pl-12'>2D Digital</h2>
                      <div>
                        <NavLink to='#'>
                          <button className='flex items-center gap-4 rounded-md ml-12 p-3 mt-6 border-[1px] border-solid border-[#e4e4e4] text-[1.4rem] bg-gray-100'>
                            <CalenderIcon />
                            <h2 className='text-[#108f3e] font-[600]'>{res2.ngayChieuGioChieu}</h2>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )
          )}
        </div>
      </div>
    </div>
  )
}

{
  /* <div className='container h-[480px] flex border-2 borrder-white border-solid overflow-y-hidden'>
      <div className='flex flex-col border-r'>
        {cumRap.map((tab, index) => (
          <div
            key={index}
            className={`p-4 transition-all ${index === activeTab ? 'border-e-4 border-red-600 border-solid' : ''}`}
            onClick={() => {
              setActiveTab(index)
            }}
          >
            <img src={`${tab.logo}`} alt='' width={'50px'} height={'50px'} />
          </div>
        ))}
      </div>
      <div>
          {cumRap[activeTab].content}
           
      </div>
    </div> */
}
