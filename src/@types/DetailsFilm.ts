export interface LichChieuPhim {
  maLichChieu: string
  maRap: string
  tenRap: string
  ngayChieuGioChieu: string
  giaVe: number
  thoiLuong: number
}

export interface CumRapChieu {
  lichChieuPhim: LichChieuPhim[]
  maCumRap: string
  tenCumRap: string
  hinhAnh: string | null
}

export interface HeThongRapChieu {
  cumRapChieu: CumRapChieu[]
  maHeThongRap: string
  tenHeThongRap: string
  logo: string
}

export interface Phim {
  heThongRapChieu: HeThongRapChieu[]
  maPhim: number
  tenPhim: string
  biDanh: string
  trailer: string
  hinhAnh: string
  moTa: string
  maNhom: string
  ngayKhoiChieu: string
  danhGia: number
}


export const data: Phim = {
  heThongRapChieu: [
    {
      cumRapChieu: [
        {
          lichChieuPhim: [
            {
              maLichChieu: '45719',
              maRap: '517',
              tenRap: 'Rạp 7',
              ngayChieuGioChieu: '2022-05-19T12:00:00',
              giaVe: 75000,
              thoiLuong: 120
            }
          ],
          maCumRap: 'cgv-aeon-binh-tan',
          tenCumRap: 'CGV - Aeon Bình Tân',
          hinhAnh: null
        },
        {
          lichChieuPhim: [
            {
              maLichChieu: '46197',
              maRap: '572',
              tenRap: 'Rạp 2',
              ngayChieuGioChieu: '2022-10-11T09:17:28',
              giaVe: 75000,
              thoiLuong: 120
            }
          ],
          maCumRap: 'cgv-hoang-van-thu',
          tenCumRap: 'CGV - Hoàng Văn Thụ',
          hinhAnh: null
        }
      ],
      maHeThongRap: 'CGV',
      tenHeThongRap: 'cgv',
      logo: 'http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png'
    }
  ],
  maPhim: 10561,
  tenPhim: 'Hạnh phúc mãi về sau',
  biDanh: 'hanh-phuc-mai-ve-sau',
  trailer: 'https://youtu.be/K7AL2OARpTo',
  hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/hanh-phuc-mai-ve-sau_gp03.jpg',
  moTa: 'Tessa và Hardin yêu nhau bất chấp. Nhưng khi một tiết lộ động trời và một mất mát bi thảm đẩy họ đến bờ vực, liệu mối quan hệ của cả hai có thể tiếp tục?',
  maNhom: 'GP03',
  ngayKhoiChieu: '2022-10-10T17:13:31.583',
  danhGia: 10
}