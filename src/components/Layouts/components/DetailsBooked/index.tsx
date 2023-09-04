import React, { useContext } from 'react'
import { CoinIcon, HouseIcon, MovieIcon, ProfileIcon, TicketIcon } from '../../../Common/Icons'
import Button from '../../../Common/Button'
import { ContentShowTime } from '../../../../@types/ShowTimes'
import { LoginContext } from '../../../../App'
import { useNavigate, useParams } from 'react-router-dom'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

interface IDetailsBooks {
  showTimesData: ContentShowTime
  totalMoney: number
  seatsPositon: string[]
}

export default function DetailsBooked({ showTimesData, totalMoney, seatsPositon }: IDetailsBooks) {
  const { profile } = useContext(LoginContext)

  const navigate = useNavigate()

  const handleBackHome = () => {
    navigate('/')
  }

  const handleContinuteBuy = () => {
    window.location.reload()
  }

  return (
    <div className='w-[600px] mx-auto h-[700px] bg-slate-200 border-black border-[2px] border-solid'>
      <div className='p-4 bg-[#fb4226] text-center '>
        <h2 className='font-[600] text-[1.8rem] text-white'>ĐẶT VÉ THÀNH CÔNG</h2>
      </div>
      <div className='pt-20 pl-10 text-[1.6rem] text-[#000]'>
        <div className='flex gap-10 items-center'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-[#fb4226] flex justify-center items-center'>
            <ProfileIcon />
          </div>
          <div>
            <h2>
              <span className='font-bold mr-4'>Tài khoản:</span> {profile?.taiKhoan}
            </h2>
            <h2 className='my-3'>
              <span className='font-bold mr-4'>Email:</span> {profile?.email}
            </h2>
            <h2>
              <span className='font-bold mr-4'>Số điện thoại:</span> {profile?.soDT}
            </h2>
          </div>
        </div>
        <div className='flex gap-10 items-center mt-20'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-[#fb4226] flex justify-center items-center'>
            <MovieIcon />
          </div>
          <h2>
            <span className='font-bold mr-4'>Tên phim: </span> {showTimesData.thongTinPhim.tenPhim}
          </h2>
        </div>
        <div className='flex gap-10 items-center mt-20'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-[#fb4226] flex justify-center items-center'>
            <HouseIcon />
          </div>
          <div>
            <h2>
              <span className='font-bold mr-4'>Rạp: </span> {showTimesData.thongTinPhim.tenRap}
            </h2>
            <h2 className='my-3'>
              <span className='font-bold mr-4 '>Thời gian chiếu: </span> {showTimesData.thongTinPhim.ngayChieu} -{' '}
              {showTimesData.thongTinPhim.ngayChieu}
            </h2>
          </div>
        </div>
        <div className='flex gap-10 items-center mt-20'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-[#fb4226] flex justify-center items-center'>
            <TicketIcon />
          </div>
          <div>
            <h2 className='font-bold mr-4 '>Danh sách ghế được đặt:</h2>
            <div className='flex gap-3'>
              {seatsPositon.map((position) => (
                <Button booked>{position}</Button>
              ))}
            </div>
          </div>
        </div>
        <div className='flex gap-10 items-center mt-20'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-[#fb4226] flex justify-center items-center'>
            <CoinIcon />
          </div>
          <div>
            <h2 className='font-bold  '>
              Tổng tiền:{' '}
              <span className='text-[#44c020] text-[2rem] ml-4'>
                {totalMoney.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className='flex mt-10 gap-10 justify-center'>
        <div onClick={handleBackHome}>
          <Button bookedEnd>Về trang chủ</Button>
        </div>
        <div onClick={handleContinuteBuy}>
          <Button bookedEnd>Đặt vé mới </Button>
        </div>
      </div>
    </div>
  )
}
