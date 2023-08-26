import axios from 'axios'
import Button from '../Common/Button'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowTimesFilm from '../ShowTimesFilm'

interface IDetailFilm {
  biDanh: string
  danhGia: number
  hinhAnh: string
  lichChieu: never[]
  maNhom: string
  maPhim: number
  moTa: string
  ngayKhoiChieu: string
  tenPhim: string
  trailer: string
}

export default function DetailFilm() {
  const [detailFilmData, setDetailFilmData] = useState<IDetailFilm>({
    biDanh: '',
    danhGia: 0,
    hinhAnh: '',
    lichChieu: [],
    maNhom: '',
    maPhim: 0,
    moTa: '',
    ngayKhoiChieu: '',
    tenPhim: '',
    trailer: ''
  })


  const { id } = useParams()
  const GetDetailsData = async () => {
    const res = await axios.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)

    if (res.data) {
      
      setDetailFilmData(res.data)
    }
  }
  useEffect(() => {
    GetDetailsData()
  }, [])

  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <div className='bg-[url("https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg")] py-40'>
      <div className='container'>
        <div className='flex gap-4 items-center text-[2.4rem] text-white pt-12'>
          <h2>Trang chủ - </h2>
          <h2>{detailFilmData.tenPhim}</h2>
        </div>
        <div className='mt-10 flex'>
          <div className='mr-16 w-[35%]'>
            <img className='w-[100%] h-[100%] object-cover' src={detailFilmData.hinhAnh} alt='' />
          </div>
          <div className='w-[70%]'>
            <h2 className='text-[3rem] text-white uppercase font-bold'>{detailFilmData.tenPhim}</h2>
            <p className='text-[#a6b2c9] py-5 leading-[2.6rem]'>{detailFilmData.moTa}</p>
            <div className='flex flex-col gap-16'>
              <div className='text-[1.7rem] flex gap-24'>
                <h2 className='text-[#e8eff5] w-[90px]'>Phân loại</h2>
                <h2 className='text-[#f8090f] font-[600]'>T13 - PHIM DÀNH CHO KHÁN GIẢ TỪ 13 TUỔI TRỞ LÊN</h2>
              </div>
              <div className='text-[1.7rem] flex gap-24 text-[#e8eff5]'>
                <h2 className='w-[90px]'>Thể loại</h2>
                <h2>Action</h2>
              </div>
              <div className='text-[1.7rem] flex gap-24 text-[#e8eff5]'>
                <h2 className='w-[90px]'>Khởi chiếu</h2>
                <h2>{detailFilmData.ngayKhoiChieu}</h2>
              </div>
              <div className='text-[1.7rem] flex gap-24 text-[#e8eff5]'>
                <h2 className='w-[90px]'>Thời lượng</h2>
                <h2>128 phút</h2>
              </div>
              <div className='text-[1.7rem] flex gap-24 text-[#e8eff5]'>
                <h2 className='w-[90px]'>Ngôn ngữ</h2>
                <h2>Phim có phụ đề</h2>
              </div>
              <div className='text-[1.7rem] flex gap-24 text-[#e8eff5]'>
                <h2 className='w-[90px]'>Đánh giá </h2>
                <h2>{detailFilmData.danhGia}/10</h2>
              </div>
              <div className='flex gap-6'>
                <div>
                  <a className='popup-youtube' href={detailFilmData.trailer} data-lity>
                    <Button btnLogin>XEM TRAILER</Button>
                  </a>
                </div>
                <div>
                  <Button btnLogin>MUA VÉ NGAY</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className='py-10 mt-20 text-center text-[2.4rem] text-white border-b-2 border-solid border-[#608a2e]'>
            VUI LÒNG CHỌN THÔNG TIN VỀ
          </h2>
          <ShowTimesFilm />
        </div>
      </div>
    </div>
  )
}
