import React from 'react'
import { CoinIcon, HouseIcon, MovieIcon, ProfileIcon, TicketIcon } from '../../../Common/Icons'
import Button from '../../../Common/Button'

export default function DetailsBooked() {
  return (
    <div className='w-[600px] mx-auto h-[800px] bg-slate-200 '>
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
              <span className='font-bold mr-4'>Tài khoản:</span> thanhtruong02
            </h2>
            <h2 className='my-3'>
              <span className='font-bold mr-4'>Email:</span> truongtecu872002@gmail.com
            </h2>
            <h2>
              <span className='font-bold mr-4'>Số điện thoại:</span> 0766558051
            </h2>
          </div>
        </div>
        <div className='flex gap-10 items-center mt-20'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-[#fb4226] flex justify-center items-center'>
            <MovieIcon />
          </div>
          <h2>
            <span className='font-bold mr-4'>Tên phim: </span> Kẻ ẩn danh
          </h2>
        </div>
        <div className='flex gap-10 items-center mt-20'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-[#fb4226] flex justify-center items-center'>
            <HouseIcon />
          </div>
          <div>
            <h2>
              <span className='font-bold mr-4'>Rạp: </span> BHD Đà Nẵng - Rạp 9
            </h2>
            <h2 className='my-3'>
              <span className='font-bold mr-4 '>Thời gian chiếu: </span> 28/8/2023 - 10:00
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
              <Button booked>41</Button>
              <Button booked>42</Button>
            </div>
          </div>
        </div>
        <div className='flex gap-10 items-center mt-20'>
          <div className='w-[40px] h-[40px] rounded-[50%] bg-[#fb4226] flex justify-center items-center'>
            <CoinIcon />
          </div>
          <div>
            <h2 className='font-bold  '>
              Tổng tiền: <span className='text-[#44c020] text-[2rem] ml-4'>180.000 đ</span>
            </h2>
          </div>
        </div>
      </div>

      <div className='flex mt-10 gap-10 justify-center'>
        <div><Button bookedEnd>Về trang chủ</Button></div>
        <div><Button bookedEnd>Đặt vé mới </Button></div>
      </div>
    </div>
  )
}
