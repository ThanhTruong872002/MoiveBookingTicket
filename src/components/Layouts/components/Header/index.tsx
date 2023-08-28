import React, { useContext } from 'react'
import TicketSideBar from '../TicketSideBar'
import { LoginContext } from '../../../../App'

export default function Header() {

  const { profile } = useContext(LoginContext)

  return (
    <div className=' pr-10 flex justify-between items-center py-6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]'>
      <div className='text-[2rem] flex gap-24 ml-[80px] font-[600] '>
        <h2 className='hover:text-[#ff5400] cursor-pointer'>CHỌN GHẾ VÀ THANH TOÁN</h2>
        <h2 className='hover:text-[#ff5400] cursor-pointer'>KẾT QUẢ ĐẶT VÉ</h2>
      </div>
      <div className='flex items-center gap-4 '>
        <img
          src='https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/364743708_1725906504494525_1533049139051175614_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dTDhbyvNbbYAX-Z5Okk&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBzGGr_Cwfmlmd5MSxjddeu7sUBAuX4OH5TZ7-7T_wgLg&oe=64E38399'
          alt=''
          className='w-[35px] h-35px] rounded-[50%]'
        />
        <h2 className='text-[1.6rem] font-[600] text-[#6d6b6b]'>{profile?.taiKhoan}</h2>
      </div>
    </div>
  )
}
