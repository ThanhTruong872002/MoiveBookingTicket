import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import TicketSideBar from '../components/TicketSideBar'
import Content from '../components/Content'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ContentShowTime,Ghe,content } from '../../../@types/ShowTimes'

export default function DefaultLayOut() {

   const { id } = useParams()

   const [showTimesData, setShowTimesData] = useState<ContentShowTime>(content)

   const [infoTicket, setInforTicket] = useState<Ghe[]>([])



   const getListShowTimes = async () => {
     const res = await axios.get(`https://movieapi.cyberlearn.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)

     if (res) {
       console.log(res.data)

       setShowTimesData(res.data?.content)
     }
   }

   useEffect(() => {
     getListShowTimes()
   }, [])
  return (
    <div className='flex shadow-[0_2px_6px_2px_rgba(60,64,67,.15)] h-[100vh]'>
      <div className='w-[70%]'>
        <Header />
        <Content showTimesData={showTimesData} setInforTicket={setInforTicket} />
      </div>
      <TicketSideBar showTimesData={showTimesData} infoTicket={infoTicket} />
    </div>
  )
}
