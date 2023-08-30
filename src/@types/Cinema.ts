export interface Cinema {
  lstCumRap: Array<CinemaBranch>
  maHeThongRap: string
  tenHeThongRap: string
  logo: string
  mahom: string
}

 export interface CinemaBranch {
  danhSachPhim: Array<Movie>
  maCumRap: string
  tenCumRap: string
  diaChi: string
}

export interface Movie {
  lstLichChieuTheoPhim: Array<any>
  maPhim: number
  tenPhim: string
  hinhAnh: string
}
