import axios from 'axios'
import React, {useEffect} from 'react'
import Header from '../../components/Head'
import DetailFilm from '../../components/DetailFilm'
import Footer from '../../components/Footer'

export default function Details() {


  return (
    <>
         <Header/> 
         <DetailFilm/>
         <Footer/>
    </>
  )
}
