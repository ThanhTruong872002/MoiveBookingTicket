import React, { useContext, useState } from 'react'
import Button from '../Common/Button'
import { LoginContext } from '../../App'
import "./SearchFilm.css"
import FilmsItem from '../FilmItems'
import { FilmItem } from '../../@types/Film'

export default function SearchFilm() {
  const { filmData, setFilmData } = useContext(LoginContext)

  console.log(filmData);
  

  const [searchValue, setSearchValue] = useState('')

  const [filmResult, setFilmResult] = useState<FilmItem[]>([])


  const handleSearchFilm = (e:any) => { 
      const searchKey = e.target.value
      setSearchValue(searchKey)
      const resultFilter = filmData.filter((value) => value.tenPhim.toLowerCase().includes(searchValue.toLowerCase()))

      if(searchKey === "") {
          setFilmResult([])
      }else {
        setFilmResult(resultFilter)
      }
  }

  return (
    <div className='p-28 pb-0'>
      <div className='flex justify-center mb-8'>
        {' '}
        <Button btnSearchFilm>TÌM KIẾM PHIM</Button>
      </div>
      <div className='flex items-center flex-col'>
        <input
          onChange={handleSearchFilm}
          value={searchValue}
          type='text'
          name=''
          placeholder='Tìm kiếm phim'
          className=' w-[960px] h-[70px] p-10 border-solid border-[1px] border-[#000] rounded-[4px]'
        />
        <div className='result rounded-[4px]'>
          {filmResult.map((value, index) => (
            <FilmsItem maphim={value.maPhim} tenphim={value.tenPhim} hinhanh={value.hinhAnh} />
          ))}
        </div>
      </div>
    </div>
  )
}
