import React, { useState } from 'react'
import Users from './Users/users'
import { ApiResponse, User } from '../../@types/Admin'
import { ListFilm } from '../../@types/Film'

export default function Admin() {
  const [listUsers, setListUsers] = useState<User[]>([
    {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: null,
      maLoaiNguoiDung: '',
      hoTen: ''
    }
  ])
  const [pagination, setPagination] = useState<ApiResponse>({
    currentPage: 0,
    count: 0,
    totalPages: 0,
    totalCount: 0,
    items: [
      {
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: null,
        maLoaiNguoiDung: '',
        hoTen: ''
      }
    ]
  })


  const [checked, setChecked] = useState<1 | 2 | 3 | 4>(1)

  const [checkedSidebar, setCheckSideBar] = useState(true)


  return (
    <div>
      <Users
        listUsers={listUsers}
        setListUsers={setListUsers}
        pagination={pagination}
        setPagination={setPagination}
        checked={checked}
        setChecked={setChecked}
        checkedSidebar={checkedSidebar}
        setCheckSideBar={setCheckSideBar}
      />
    </div>
  )
}
