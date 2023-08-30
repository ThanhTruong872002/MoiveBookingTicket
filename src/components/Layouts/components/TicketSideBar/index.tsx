import './TicketSideBar.css'
import { WarningIcon } from '../../../Common/Icons'
import Button from '../../../Common/Button'
import { ContentShowTime, Ghe } from '../../../../@types/ShowTimes'
import { LoginContext } from '../../../../App'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { access } from 'fs'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

interface IshowTimesData {
  showTimesData: ContentShowTime
  infoTicket: Ghe[]
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  totalMoney: number
  setTotalMoney: React.Dispatch<React.SetStateAction<number>>
  seatsPositon: string[]
  setSeatsPosition: React.Dispatch<React.SetStateAction<string[]>>
}

export default function TicketSideBar({
  showTimesData,
  infoTicket,
  setChecked,
  setTotalMoney,
  totalMoney,
  setSeatsPosition,
  seatsPositon
}: IshowTimesData) {
  const { profile } = useContext(LoginContext)

  const { id } = useParams()

  const handleTotalMoney = () => {
    let sum = 0
    infoTicket.map((res) => (sum += res.giaVe))
    setTotalMoney(sum)
  }

  const renderSeatPosition = () =>
    infoTicket.map((selected) => {
      let seatPosition = ''
      let seatRow = Number(selected.stt) / 16
      let seatNumber = Number(selected.stt) % 16
      if (seatNumber === 0) {
        seatNumber = 16
      }
      if (seatRow <= 1) {
        seatPosition = `A${seatNumber}`
      } else if (seatRow <= 2) {
        seatPosition = `B${seatNumber}`
      } else if (seatRow <= 3) {
        seatPosition = `C${seatNumber}`
      } else if (seatRow <= 4) {
        seatPosition = `D${seatNumber}`
      } else if (seatRow <= 5) {
        seatPosition = `E${seatNumber}`
      } else if (seatRow <= 6) {
        seatPosition = `F${seatNumber}`
      } else if (seatRow <= 7) {
        seatPosition = `G${seatNumber}`
      } else if (seatRow <= 8) {
        seatPosition = `H${seatNumber}`
      } else if (seatRow <= 9) {
        seatPosition = `I${seatNumber}`
      } else if (seatRow <= 10) {
        seatPosition = `J${seatNumber}`
      }

      // setSeatsPosition((prev) => [...prev, seatPosition])
      return (
        <span>
          {seatPosition} {''}{' '}
        </span>
      )
    })

  useEffect(() => {
    renderSeatPosition()
  }, [seatsPositon])

  useEffect(() => {
    handleTotalMoney()
  }, [infoTicket])

  // POST
  const bookTicket = async () => {
    if (infoTicket.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Vui lòng đặt ghế',
        text: 'Bạn phải chọn ghế trước khi đặt vé',
        showConfirmButton: true,
        timer: 2000
      })
    } else {
      const accessToken = localStorage.getItem('access_token')
      const headers = {
        Authorization: `Bearer ${accessToken}`
      }

      try {
        const res = await axios.post(
          'https://movieapi.cyberlearn.vn/api/QuanLyDatVe/DatVe',
          {
            maLichChieu: id,
            danhSachVe: infoTicket
          },
          { headers }
        )
        if (res.status === 200) {
          setChecked(true)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <div className='ticket p-10 bg-white flex flex-col gap-6 w-[30%]'>
      <h2 className='text-[3.2rem] text-[#00b943] font-bold text-center'>
        {totalMoney.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}{' '}
      </h2>
      <span className='block w-[80%] h-[1px] bg-[#ccc] mt-10'></span>
      <div className='flex flex-col gap-4 '>
        <h2 className='text-[2rem] text-black font-bold'>{showTimesData.thongTinPhim.tenPhim}</h2>
        <p className='text-[1.6rem] text-[#6a6a6a]'>Địa điểm: {showTimesData.thongTinPhim.tenCumRap}</p>
        <p className='text-[1.6rem] text-[#6a6a6a]'>
          Ngày chiếu: {showTimesData.thongTinPhim.ngayChieu} - {showTimesData.thongTinPhim.gioChieu} -{' '}
          {showTimesData.thongTinPhim.tenRap}
        </p>
        <span className='block w-[80%] h-[1px] bg-[#ccc] mt-10'></span>
      </div>
      <div>
        <div className='flex items-center gap-8'>
          <h2 className='text-[#FF0000] text-[1.8rem]'>Vị Trí Ghế:</h2>
          <p className='text-[2rem] text-[rgba(0,185,67)] font-bold'>{renderSeatPosition()}</p>
        </div>
        <span className='block w-[80%] h-[1px] bg-[#ccc] mt-10'></span>
      </div>

      <div className='text-[#6a6a6a] text-[1.6rem] mt-8'>
        <h2 className='mb-3'>Email</h2>
        <h2>{profile?.email}</h2>
        <span className='block w-[80%] h-[1px] bg-[#ccc] mt-10'></span>
      </div>
      <div className='text-[#6a6a6a] text-[1.6rem] mt-8'>
        <h2 className='mb-3'>Số điện thoại</h2>
        <h2>{profile?.soDT}</h2>
        <span className='block w-[80%] h-[1px] bg-[#ccc] mt-10'></span>
      </div>
      <div>
        <div className='flex gap-3 justify-center mt-10'>
          <p>
            <WarningIcon />
          </p>
          <p className='text-[1.4rem] text-[#000000D9] w-[300px] '>
            Vé đã mua không thể đổi hoặc hoàn tiền .Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
          </p>
        </div>
        <div className='flex justify-center mt-6' onClick={bookTicket}>
          {' '}
          <Button small>Đặt Vé</Button>
        </div>
      </div>
    </div>
  )
}
