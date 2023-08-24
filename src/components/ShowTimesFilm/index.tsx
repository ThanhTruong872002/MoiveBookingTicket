import ShowTheaters from '../ShowTheaters'

export default function ShowTimesFilm() {
  return (
    <div className='container'>
      <div className='text-[2.2rem] text-white uppercase flex justify-center gap-16 mt-14 font-bold'>
        <h2>Lịch Chiếu</h2>
        <h2>Thông Tin</h2>
        <h2>Đánh giá</h2>
      </div>
      <ShowTheaters />
    </div>
  )
}
