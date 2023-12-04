export interface User {
  taiKhoan: string
  matKhau: string
  email: string
  soDt: string
  maNhom: string | null
  maLoaiNguoiDung: string
  hoTen: string
}

export interface ApiResponse {
  currentPage: number
  count: number
  totalPages: number
  totalCount: number
  items: User[]
}
