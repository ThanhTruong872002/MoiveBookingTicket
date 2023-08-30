import axios from 'axios'
import { useEffect, useState, useContext } from 'react'

import './showTime.css'
import Expandable from '../Expandable/expandable'
import { Link } from 'react-router-dom'
import { CalenderIcon } from '../Common/Icons'
import { format } from 'date-fns'
import { Cinema } from '../../@types/Cinema'
import { LoginContext, initialCinemas } from '../../App'


const ShowTime = () => {

  const {  setCodeRoom } = useContext(LoginContext)

 
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
        setCumRap(response.data)
        setCodeRoom(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='container'>
      <div className='showTime h-[650px]  my-[200px]'>
        <div className=' flex h-full bg-white border-[1px] border-[#ccc] border-solid overflow-y-hidden py-10'>
          <div className='flex flex-col w-[12%] border-r-gray-500 border-r-[1px] border-solid'>
            {cumRap.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer h-[100px] py-10 px-5 ${
                  index === activeTab ? 'border-e-[3px] border-red-600 border-solid' : ''
                }`}
                onClick={() => {
                  setActiveTab(index)
                  setActiveTab2(0)
                }}
              >
                <img src={tab.logo} alt='' width={'50px'} height={'50px'} className='mx-auto' />
              </div>
            ))}
          </div>
          <div className='flex w-[88%]'>
            <div className='showTime h-[auto] w-[35%] flex flex-col overflow-y-scroll'>
              {cumRap[activeTab].lstCumRap.map((tab, index) => (
                <div key={index} className='cursor-pointer h-[100px]'>
                  <div
                    key={index}
                    className={`p-10 flex items-center ${
                      index === activeTab2
                        ? 'border-e-[3px] border-red-600 border-solid'
                        : 'border-e-[3px] border-white border-solid'
                    }`}
                    onClick={() => setActiveTab2(index)}
                  >
                    <img src={cumRap[activeTab].logo} alt='' width={'50px'} height={'50px'} />

                    <div className='mx-4 w-[80%] text-black'>
                      <p className='mb-2 font-[600]'>{tab.tenCumRap}</p>
                      <p className='text-lg overflow-hidden text-nowrap text-ellipsis '>{tab.diaChi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='showTime flex flex-col h-full w-[65%] px-[20px] overflow-y-scroll'>
              {cumRap[activeTab].lstCumRap[activeTab2].danhSachPhim.slice(0, 5).map((phim, index) => (
                <div
                  className='cursor-pointer flex flex-col gap-4 py-4 border-b-2 border-gray-500 border-solid transition-height duration-300'
                  key={index}
                >
                  <Expandable baseHeight='70px' expandedHeight='230px'>
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
                      <h3 className='pb-2 mb-2'>2D Digital</h3>
                      <div className='flex flex-wrap gap-3'>
                        {phim.lstLichChieuTheoPhim?.slice(0, 8).map((lichChieu, index) => {
                          return (
                            <Link
                              style={{ textDecoration: 'none' }}
                              key={index}
                              to={`/checkout/${lichChieu.maLichChieu}`}
                            >
                              <button className=' flex items-center gap-4 rounded-md  p-3 mt-6 border-[1px] border-solid border-[#e4e4e4] text-[1.4rem] bg-gray-100'>
                                <CalenderIcon />
                                <h2 className='text-[#108f3e] font-[600]'>
                                  {`${format(new Date(lichChieu.ngayChieuGioChieu), 'HH:mm:ss')}`}
                                </h2>
                              </button>
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
    </div>
  )
}

export default ShowTime
