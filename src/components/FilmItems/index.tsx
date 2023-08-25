import React from 'react'
import { Link } from 'react-router-dom'

interface IFilmsItem {
  maphim: string
  hinhanh: string
  tenphim: string
}

const FilmsItem: React.FC<IFilmsItem> = ({ maphim, tenphim, hinhanh }) => {
  return (
   <Link to ={`/detail/${maphim}`} target='_blank' style={{textDecoration:"none"}}>
        <div className='w-full flex items-center p-6 hover:bg-gray-300 cursor-pointer'>
          <img src={hinhanh} alt='' className='w-[85px] h-[95px] object-cover rounded-md'/>
          <div className='pl-10'>
              <h2 className='font-[600] text-[1.8rem] text-[#54AB35]'>{tenphim}</h2>
              <p className='text-[1.4rem] mt-4 '>119 phút - 10 IMDB - 2D/Digital</p>
          </div>
        </div>
   </Link>
  )
}

export default FilmsItem
