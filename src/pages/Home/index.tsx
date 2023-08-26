import React from 'react'
import Header from '../../components/Head'
import Hero from '../../components/Hero'
import TicketBookingFast from '../../components/TicketBookingFast'
import SearchFilm from '../../components/SearchFilm'
import Film from '../../components/Film'
import Footer from '../../components/Footer'
import ShowTime from '../../components/TheaterDivision'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className='bg-[url("https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg")]'>
        {/* <TicketBookingFast /> */}
        <SearchFilm />
        <Film />
        <ShowTime />
        <Footer />
      </div>
    </>
  )
}
