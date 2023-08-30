import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Phim, data } from '../../@types/DetailsFilm'
import { CalenderIcon } from '../Common/Icons'
import { NavLink } from 'react-router-dom'
import Expandable from '../Expandable/expandable'
import { format } from 'date-fns'
import { LoginContext } from '../../App'

export default function ShowTheaters() {
  const { codeRoom } = useContext(LoginContext)

  console.log(codeRoom)

  const { id } = useParams()

  const [detailsFilmData, setDetailsFilmData] = useState<Phim>(data)

  const [activeTab, setActiveTab] = useState(0)


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

  return (
    <div>
      <div className='w-[100%] h-[800px] bg-white mt-20 flex rounded-md '>
        <div className='w-[30%] border-r-[1px] border-solid border-[#ccc] '>
          {detailsFilmData.heThongRapChieu.map((result, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveTab(index)
              }}
              className={` p-4 transition-all  ${
                index === activeTab ? 'border-e-4 border-red-600 border-solid border-b-[#ccc]' : ''
              } cursor-pointer w-[100%] p-5 text-[1.6rem] font-[600] flex items-center gap-8`}
            >
              <img className='w-[50px] h-[50px] ' src={result.logo} alt='' />
              <h2>{result.maHeThongRap}</h2>
            </div>
          ))}
        </div>
        <div className='w-[70%] px-12'>
          {detailsFilmData.heThongRapChieu[activeTab]?.cumRapChieu.map((result) =>
            result.lichChieuPhim.map((res2, index) => (
              <div className=' pb-4 border-b-[1px]  border-[#ccc] border-solid'>
                <Expandable baseHeight='90px' expandedHeight='220px'>
                  <div className='w-[90%] '>
                    <div className='flex flex-col' key={index}>
                      <div className=' flex gap-2 items-center justify-between'>
                        <div className='flex items-center'>
                          <div className='pr-5 py-8'>
                            <img
                              className='w-[60px] h-[60px] object-cover rounded-[5%] '
                              src='https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg'
                              alt=''
                            />
                          </div>
                          <div>
                            <h2 className='text-[1.6rem] font-[600] '>{result.maCumRap}</h2>
                            <p className='text-[#9b9b9b] font-[400] text-[12px] mt-4'>113 phút - TIX 8.5 - IMDb 0</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className='font-[600] text-[1.8rem]'>2D Digital</h2>
                        {codeRoom[activeTab].lstCumRap[activeTab].danhSachPhim[activeTab].lstLichChieuTheoPhim.map(
                          (lichchieu) => (
                            <div>
                              <Link
                                key={index}
                                style={{ textDecoration: 'none' }}
                                to={`/checkout/${lichchieu.maLichChieu}`}
                              >
                                <button className=' flex items-center gap-4 rounded-md  p-3 mt-6 border-[1px] border-solid border-[#e4e4e4] text-[1.4rem] bg-gray-100'>
                                  <CalenderIcon />
                                  <h2 className='text-[#108f3e] font-[600]'>
                                    {`${format(new Date(res2.ngayChieuGioChieu), 'dd/MM/yyyy')} - ${format(
                                      new Date(res2.ngayChieuGioChieu),
                                      'HH:mm:ss'
                                    )}`}
                                  </h2>
                                </button>
                              </Link>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </Expandable>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
