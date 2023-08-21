import React from 'react'
import { CheveronDown } from '../Common/Icons'

export default function TicketBookingFast() {
  return (
    <div className='container'>
      <div className='flex justify-between items-center w-[960px] h-[80px] mx-auto bg-white relative top-[-40px] rounded-[5px] drop-shadow-5xl gap-10 px-5 text-[1.8rem] font-[500]'>
        <div className='flex justify-between items-center w-[320px] h-[68px] '>
          <h2>Phim</h2>
          <CheveronDown />
        </div>
        <div className='w-[1px] h-[30px] border-[1px] border-solid text-[#ccc]'></div>
        <div className='flex justify-between items-center w-[320px] h-[68px]'>
          <h2>Rạp</h2>
          <CheveronDown />
        </div>
        <div className='w-[1px] h-[30px] border-[1px] border-solid text-[#ccc]'></div>
        <div className='flex justify-between items-center w-[320px] h-[68px]'>
          <h2>Ngày giờ suất chiếu</h2>
          <CheveronDown />
        </div>
        <button className='w-[160px] h-[60px] bg-[#4a4a4a] font-[400] text-[1.4rem] text-white rounded-[5px]'>
          MUA VÉ NGAY
        </button>
      </div>
    </div>
  )
}
