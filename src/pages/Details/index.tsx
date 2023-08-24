import axios from 'axios'
import React, {useEffect} from 'react'
import Header from '../../components/Head'
import DetailFilm from '../../components/DetailFilm'
import Footer from '../../components/Footer'
import ShowTime from '../../components/TheaterDivision'

export default function Details() {


  return (
    <>
         <Header/> 
         <DetailFilm/>
         <Footer/>
    </>
  )
}
