import Header from '../../components/Head'
import Hero from '../../components/Hero'
import SearchFilm from '../../components/SearchFilm'
import Film from '../../components/Film'
import Footer from '../../components/Footer'
import ShowTime from '../../components/TheaterDivision'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className='bg-[#1A1D29]'>
        <SearchFilm />
        <Film />
        <ShowTime />
        <Footer />
      </div>
    </>
  )
}
