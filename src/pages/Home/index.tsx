import React from 'react'
import Header from '../../components/Head'
import Hero from '../../components/Hero'
import TicketBookingFast from '../../components/TicketBookingFast'
import SearchFilm from '../../components/SearchFilm'
import Film from '../../components/Film'

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <TicketBookingFast />
        <SearchFilm />
        <Film />
      </div>
    </div>
  )
}
