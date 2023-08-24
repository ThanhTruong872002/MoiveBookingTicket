import axios from 'axios'
import { useEffect, useState } from 'react'

import './showTime.css'
import Expandable from '../Expandable/expandable'
import { Link } from 'react-router-dom'

interface Cinema {
  lstCumRap: Array<CinemaBranch>
  maHeThongRap: string
  tenHeThongRap: string
  logo: string
  mahom: string
}

interface CinemaBranch {
  danhSachPhim: Array<Movie>
  maCumRap: string
  tenCumRap: string
  diaChi: string
}

interface Movie {
  lstLichChieuTheoPhim: Array<any>; // You might want to define a type for lstLichChieuTheoPhim
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
}

const ShowTime = () => {
  const initialCinemas: Cinema[] = [
    {
      lstCumRap: [
        {
          danhSachPhim: [],
          maCumRap: 'bhd-star-cineplex-3-2',
          tenCumRap: 'BHD Star Cineplex - 3/2',
          diaChi: 'L5-Vincom 3/2, 3C Đường 3/2, Q.10'
        }
      ],
      maHeThongRap: 'BHDStar',
      tenHeThongRap: 'BHD Star Cineplex',
      logo: 'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png',
      mahom: 'GP01'
    }
  ]

  const [cumRap, setCumRap] = useState<Cinema[]>(initialCinemas)

  const [activeTab, setActiveTab] = useState(0)
  const [activeTab2, setActiveTab2] = useState(0)

  useEffect(() => {
    getThongTinRapChieu()
  }, [])

  const getThongTinRapChieu = async () => {
    await axios({
      method: 'get',
      url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03'
    })
      .then(function (response) {
        console.log(response.data)
        setCumRap(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='showTime container h-[485px] px-[85px] mb-[200px]'>
      <div className='flex h-full bg-white border-2 borrder-white border-solid overflow-y-hidden'>
        <div className='flex flex-col w-[12%] border-r-gray-500 border-r-2 border-solid'>
          {cumRap.map((tab, index) => (
            <div
              key={index}
              className={`py-4 px-5 ${index === activeTab ? 'border-e-4 border-red-600 border-solid' : ''}`}
              onClick={() => {
                setActiveTab(index)
                setActiveTab2(0)
              }}
            >
              <img src={tab.logo} alt='' width={'50px'} height={'50px'} />
            </div>
          ))}
        </div>
        <div className='flex w-[88%]'>
          <div className='showTime h-full w-[35%] flex flex-col overflow-y-scroll'>
            {cumRap[activeTab].lstCumRap.map((tab, index) => (
              <div key={index} className='h-[79px]'>
                <div
                  key={index}
                  className={`p-4 flex items-center ${
                    index === activeTab2
                      ? 'border-e-4 border-red-600 border-solid'
                      : 'border-e-4 border-white border-solid'
                  }`}
                  onClick={() => setActiveTab2(index)}
                >
                  <img src={cumRap[activeTab].logo} alt='' width={'50px'} height={'50px'} />

                  <div className='mx-4 w-[80%] text-black'>
                    <p className='mb-2 font-bold'>{tab.tenCumRap}</p>
                    <p className='text-lg overflow-hidden text-nowrap text-ellipsis '>{tab.diaChi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='showTime flex flex-col h-full w-[65%] px-[20px] overflow-y-scroll'>
            {cumRap[activeTab].lstCumRap[activeTab2].danhSachPhim.slice(0, 5).map((phim, index) => (
              <div
                className='flex flex-col gap-4 py-4 border-b-2 border-gray-500 border-solid transition-height duration-300'
                key={index}
              >
                <Expandable baseHeight='70px' expandedHeight='200px'>
                  <div className='flex gap-[15px]'>
                    <div className='w-[60px] h-[70px]'>
                      <img src={phim.hinhAnh} alt='' className='w-full h-full rounded-md' />
                    </div>
                    <div className='grow-[1] py-3'>
                      <div className='flex gap-4 items-center pb-2'>
                        <p className='font-bold'>{phim.tenPhim}</p>
                        <span className='p-2 bg-orange-400 rounded text-white'>C13</span>
                      </div>
                      <p className='text-[12px] text-gray-500'>113 phút - TIX 8.5 - IMDb 0</p>
                    </div>
                  </div>
                  <div className='py-4'>
                    <h3 className='pb-2'>2D Digital</h3>
                    <div className='flex flex-wrap gap-3'>
                      {phim.lstLichChieuTheoPhim?.slice(0, 8).map((lichChieu, index) => {
                        return (
                          <Link className='p-3 rounded-md border-2 border-red-500 border-solid' key={index} to={`/checkout/${lichChieu.maLichChieu}/${phim.maPhim}`}>
                            <div className='text-md'>
                              <span className='hightlight'>
                                {new Date(lichChieu.ngayChieuGioChieu).getHours()}:
                                {new Date(lichChieu.ngayChieuGioChieu).getMinutes()}
                              </span>{' '}
                              ~ {new Date(lichChieu.ngayChieuGioChieu).getHours() + 2}:
                              {new Date(lichChieu.ngayChieuGioChieu).getMinutes()}
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </Expandable>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowTime
