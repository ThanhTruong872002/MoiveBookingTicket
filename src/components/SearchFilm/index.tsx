import React from 'react'
import Button from '../Common/Button'

export default function SearchFilm() {
  return (
    <div className='p-28 pb-0'>
    <div className='flex justify-center mb-8'>  <Button btnSearchFilm>TÌM KIẾM PHIM</Button></div>
      <div>
        <input
          type='text'
          name=''
          placeholder='Tìm kiếm phim'
          className='block  mx-auto w-[960px] h-[70px] p-10 border-solid border-[1px] border-[#000] rounded-[4px]'
        />
      </div>
    </div>
  )
}
