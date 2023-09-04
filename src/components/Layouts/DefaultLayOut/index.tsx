import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header'
import TicketSideBar from '../components/TicketSideBar'
import Content from '../components/Content'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ContentShowTime, Ghe, content } from '../../../@types/ShowTimes'

export default function DefaultLayOut() {
  const { id } = useParams()

  const [showTimesData, setShowTimesData] = useState<ContentShowTime>(content)

  const [infoTicket, setInforTicket] = useState<Ghe[]>([])

  const [checked, setChecked] = useState(false)

  const [totalMoney, setTotalMoney] = useState(0)

  const [seatsPositon, setSeatsPosition] = useState<string[]>([])

  console.log(seatsPositon);
  

  const bgGray = checked ? 'bg-[#ccc]' : ''

  const getListShowTimes = async () => {
    const res = await axios.get(`https://movieapi.cyberlearn.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)

    if (res) {

      setShowTimesData(res.data?.content)
    }
  }

  useEffect(() => {
    getListShowTimes()
  }, [])

  return (
    <div className={`flex shadow-[0_2px_6px_2px_rgba(60,64,67,.15)] h-[100vh] ${bgGray}`}>
      <div className='w-[70%]'>
        <Header />
        <Content
          showTimesData={showTimesData}
          setInforTicket={setInforTicket}
          checked={checked}
          totalMoney={totalMoney}
          seatsPositon={seatsPositon}
        />
      </div>
      <TicketSideBar
        showTimesData={showTimesData}
        infoTicket={infoTicket}
        setChecked={setChecked}
        totalMoney={totalMoney}
        setTotalMoney={setTotalMoney}
        seatsPositon={seatsPositon}
        setSeatsPosition={setSeatsPosition}
      />
    </div>
  )
}
