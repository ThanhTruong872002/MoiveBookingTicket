import React, { useEffect, useState } from 'react'
import CountDown from '../CountDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCouch } from '@fortawesome/free-solid-svg-icons'
import './Content.css'
import { ContentShowTime, Ghe } from '../../../../@types/ShowTimes'
import Swal from 'sweetalert2'

interface IshowTimesData {
  showTimesData: ContentShowTime
  setInforTicket: React.Dispatch<React.SetStateAction<Ghe[]>>
}

export default function Content({ showTimesData, setInforTicket }: IshowTimesData) {
  const [selectSeats, setSelectSeats] = useState<Ghe[]>([])

  const handleSelectSeat = (seat: Ghe) => {
    if (selectSeats.length <= 10) {
      let index = selectSeats.findIndex((res) => res.maGhe === seat.maGhe)
      if (index >= 0) {
        const newSeats = selectSeats.filter((items) => items.maGhe !== seat.maGhe)
        console.log(newSeats)

        setSelectSeats(newSeats)
      } else {
        setSelectSeats([...selectSeats, seat])
      }
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Giới hạn đặt vé là 10',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }

  useEffect(() => {
    setInforTicket(selectSeats)
  }, [selectSeats])


  // const handleClicked = (seatCode: number) => {
  // }

  return (
    <div>
      <div className='p-4 flex gap-64 items-center'>
        <div className='ml-40 flex gap-4 items-center'>
          <img className='w-[70px] h-[70px]' src='http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png' alt='' />
          <div>
            <h2 className='font-[600] text-[1.8rem]'>{showTimesData.thongTinPhim.tenCumRap}</h2>
            <p className='text-[#6a6a6a] text-[1.6rem] mt-3'>
              {showTimesData.thongTinPhim.ngayChieu} - {showTimesData.thongTinPhim.gioChieu} -{' '}
              {showTimesData.thongTinPhim.tenRap}
            </p>
          </div>
        </div>
        <div>
          <p className='text-[1.6rem] text-[#6a6a6a]'>Thời gian giữ vé</p>
          <h2 className='text-[#ff0000] text-[4rem] mt-2'> {/* <CountDown Minute='5' Seconds='0' /> */} 4:08</h2>
        </div>
      </div>
      <div className='ml-52 mt-10'>
        {/* <h2>BackHome</h2> */}
        <img className='ml-28' src='https://project-movie-hungle.vercel.app/img/checkout/screen.png' alt='' />
        <div className='flex gap-24'>
          <div className='font-bold flex flex-col gap-2 items-start'>
            <button disabled>A</button> <br />
            <button disabled>B</button> <br />
            <button disabled>C</button> <br />
            <button disabled>D</button> <br />
            <button disabled>E</button> <br />
            <button disabled>F</button> <br />
            <button disabled>G</button> <br />
            <button disabled>H</button> <br />
            <button disabled>I</button> <br />
            <button disabled>J</button> <br />
          </div>

          <div className='content -mt-6'>
            {showTimesData.danhSachGhe.map((result) => {
              const seatCode = result.maGhe
              const vipChair = result.loaiGhe === 'Vip' ? 'gheVip' : ''
              const bookedChair = result.daDat ? 'gheDaDat' : ''
              const selectedChair = selectSeats.findIndex((seat) => seat.maGhe === result.maGhe) >= 0 ? 'gheDangChon' : ''

              return (
                <button
                  onClick={() => {
                    handleSelectSeat(result)
                  }}
                  disabled={result.daDat}
                  className={` seats ${bookedChair} ${vipChair} ${selectedChair}`}
                >
                  <FontAwesomeIcon icon={faCouch} size='xl' />
                </button>
              )
            })}
          </div>
        </div>

        <div className='flex gap-32 ml-20 text-[1.8rem] font-[600] mt-16'>
          <div className='flex items-center gap-3'>
            <button disabled>
              <i className='fas fa-couch ' style={{ color: '#0af539' }}></i>
            </button>
            <br />
            <span>Ghế đang chọn</span>
          </div>
          <div className='flex items-center gap-3'>
            <button disabled>
              <i className='fas fa-couch' style={{ color: '#113f8d' }}></i>
            </button>
            <br />
            <span>Ghế thường</span>
          </div>
          <div className='flex items-center gap-3'>
            <button disabled className='ghe gheVip'>
              <i className='fas fa-couch' style={{ color: '#f5930a' }}></i>
            </button>
            <br />
            <span>Ghế vip</span>
          </div>
          <div className='flex items-center gap-3'>
            <button style={{ cursor: 'auto' }} disabled>
              <i className='fas fa-couch' style={{ color: '#afaeac' }}></i>
            </button>
            <br />
            <span>Ghế đã đặt</span>
          </div>
        </div>
      </div>
    </div>
  )
}
