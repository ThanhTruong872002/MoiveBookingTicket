import React from 'react'

export default function SearchFilm() {
  return (
    <div>
      <h2 className='flex justify-center mb-[20px] text-[2.2rem] font-[600] text-[#23966c] '>TÌM KIẾM PHIM</h2>
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
