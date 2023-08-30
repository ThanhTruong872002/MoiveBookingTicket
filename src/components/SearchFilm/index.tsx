import React, { useContext, useState } from 'react'
import Button from '../Common/Button'
import { LoginContext } from '../../App'
import './SearchFilm.css'
import FilmsItem from '../FilmItems'
import { FilmItem } from '../../@types/Film'
import { VoiceSearchIcon } from '../Common/Icons'
import SearchWithVoice from '../SearchWithVoice'

export default function SearchFilm() {
  const { filmData, setFilmData } = useContext(LoginContext)

  const [searchValue, setSearchValue] = useState('')

  const [filmResult, setFilmResult] = useState<FilmItem[]>([])

  const handleSearchFilm = (e: any) => {
    const searchKey = e.target.value
    setSearchValue(searchKey)
    const resultFilter = filmData.filter((value) => value.tenPhim.toLowerCase().includes(searchValue.toLowerCase()))

    if (searchKey === '') {
      setFilmResult([])
    } else {
      setFilmResult(resultFilter)
    }
  }

  console.log(searchValue)

  return (
    <div className='p-28 pb-0'>
      <div className='flex justify-center mb-8'>
        {' '}
        <Button btnSearchFilm>TÌM KIẾM PHIM</Button>
      </div>
      <div className='flex items-center flex-col relative '>
        <input
          onChange={handleSearchFilm}
          value={searchValue}
          type='text'
          name=''
          placeholder='Tìm kiếm phim'
          className=' w-[960px] h-[70px] p-10 border-solid border-[1px] text-[#4eea4b] border-[#4eea4b] placeholder:text-[#4eea4b] rounded-[4px] bg-transparent'
        />
        <div className='absolute top-7 right-[20%] z-1 '>
          {' '}
          <SearchWithVoice setSearchValue={setSearchValue} />
        </div>
        <div className='result rounded-[4px]'>
          {filmResult.map((value, index) => (
            <FilmsItem maphim={value.maPhim} tenphim={value.tenPhim} hinhanh={value.hinhAnh} />
          ))}
        </div>
      </div>
    </div>
  )
}
