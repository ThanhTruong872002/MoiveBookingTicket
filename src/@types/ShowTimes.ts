export interface Ghe {
  daDat: boolean
  giaVe: number
  loaiGhe: string
  maGhe: number
  maRap: number
  stt: string
  taiKhoanNguoiDat: null | string
  tenGhe: string
}

export interface ThongTinPhim {
  diaChi: string
  gioChieu: string
  hinhAnh: string
  maLichChieu: number
  ngayChieu: string
  tenCumRap: string
  tenPhim: string
  tenRap: string
}

export interface ContentShowTime {
  danhSachGhe: Ghe[]
  thongTinPhim: ThongTinPhim
}

export const content: ContentShowTime = {
  danhSachGhe: [
    {
      daDat: false,
      giaVe: 75000,
      loaiGhe: 'Thuong',
      maGhe: 47721,
      maRap: 453,
      stt: '01',
      taiKhoanNguoiDat: null,
      tenGhe: '01'
    }
  ],
  thongTinPhim: {
    diaChi: 'L5-Vincom 3/2, 3C Đường 3/2, Q.10',
    gioChieu: '01:12',
    hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/lua-deu-gap-lua-dao_gp03.jpg',
    maLichChieu: 40207,
    ngayChieu: '08/12/2019',
    tenCumRap: 'BHD Star Cineplex - 3/2',
    tenPhim: 'Lừa Đểu Gặp Lừa Đảo 2',
    tenRap: 'Rạp 3'
  }
}
