import React, { useEffect, useState } from 'react'
import { Card, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { IUser } from '../../../@types/User'
import axios from 'axios'
import { ArrowLeftIcon, ArrowRightIcon } from '../../../components/Common/Icons'
import Pagination from './Pagination'

const TABLE_HEAD = ['Tài khoản', 'Mật khẩu', 'Họ Tên', 'Email', 'SĐT', 'Thao Tác']

interface User {
  taiKhoan: string
  matKhau: string
  email: string
  soDt: string
  maNhom: string | null
  maLoaiNguoiDung: string
  hoTen: string
}

interface ApiResponse {
  currentPage: number
  count: number
  totalPages: number
  totalCount: number
  items: User[]
}
export default function Users() {
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
  
  

  const [changeWidthTable, setChangeWidthTable] = useState(true)

  // const []

  const getListUsers = async (index:number) => {
    const res = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${index}&soPhanTuTrenTrang=10`
    )
    if (res) {
      // console.log(res.data)
      setListUsers(res.data.items)
      setPagination(res.data)
    }
  }

  

  useEffect(() => {
    getListUsers(1)
  }, [])

  const changeWidth = changeWidthTable ? 'w-[95%]' : 'w-[85%]'

  return (
    <div className='flex h-auto'>
      {!changeWidthTable && (
        <div className='w-[15%] flex flex-col justify-between bg-[url("https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg")] py-10'>
          <div>
            <div className='flex gap-10 items-center cursor-pointer h-[54px] justify-center hover:bg-[#1890ff]'>
              <FontAwesomeIcon icon={faUser} size='xl' style={{ color: 'white' }} />
              <h2 className='text-[2rem] text-white'>Users</h2>
            </div>
            <div className='flex gap-10 items-center mt-10 cursor-pointer h-[54px] justify-center hover:bg-[#1890ff] mr-3'>
              <FontAwesomeIcon icon={faFilm} size='xl' style={{ color: 'white' }} />
              <h2 className='text-[2rem] text-white'>Film</h2>
            </div>
          </div>
          <div
            className='flex justify-center cursor-pointer p-4'
            onClick={() => setChangeWidthTable(!changeWidthTable)}
          >
            <ArrowLeftIcon />
          </div>
        </div>
      )}

      {changeWidthTable && (
        <div className='w-[5%]  flex flex-col justify-between bg-[url("https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg")] py-10'>
          <div>
            <div className='flex gap-10 items-center cursor-pointer h-[54px] justify-center hover:bg-[#1890ff]'>
              <FontAwesomeIcon icon={faUser} size='xl' style={{ color: 'white' }} />
            </div>
            <div className='flex gap-10 items-center mt-10 cursor-pointer h-[54px] justify-center hover:bg-[#1890ff] mr-3'>
              <FontAwesomeIcon icon={faFilm} size='xl' style={{ color: 'white' }} />
            </div>
          </div>
          <div
            className='flex justify-center cursor-pointer p-4'
            onClick={() => setChangeWidthTable(!changeWidthTable)}
          >
            <ArrowRightIcon />
          </div>
        </div>
      )}

      <div className={`${changeWidth}`}>
        <div className='h-[80px] shadow-md flex justify-end items-center p-10'>
          <h2 className='text-[1.8rem] font-[500] cursor-pointer'>Đăng xuất</h2>
        </div>
        <div className='pr-10 p-4'>
          <h2 className='text-[3rem] font-[600] mt-6 '>Quản Lý Người Dùng</h2>
          <div className='flex justify-between mt-20 mb-10'>
            {' '}
            <button className='w-[170px] h-[40px] cursor-pointer font-[500] border-[1px] border-solid border-[#ccc] p-3'>
              Thêm Người Dùng
            </button>
            <div className='flex items-center'>
              <input
                className='w-[325px] h-[48px] border-[1px] border-solid border-[#ccc] p-3 border-r-0'
                type='text'
                placeholder='Tìm kiếm tài khoản'
              />
              <div className='flex justify-center items-center text-white w-[50px] h-[50px] bg-[#1890FF]'>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
          <Card className=' w-full h-[550px] overflow-hidden'>
            {/* <table className='w-full min-w-max table-auto text-left text-[1.8rem]'>
              <thead className='sticky top-0'>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className='border-b border-blue-gray-200  py-8 px-4 bg-gray-200'>
                      <Typography variant='small' color='blue-gray' className='font-normal text-[1.8rem] leading-none '>
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {listUsers.map((users) => (
                  <tr className='even:bg-blue-gray-50/50 leading-10 '>
                    <td className='p-4'>
                      <Typography color='blue-gray' className='font-normal '>
                        {users.taiKhoan}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography color='blue-gray' className='font-normal'>
                        {users.matKhau}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography color='blue-gray' className='font-normal'>
                        {users.hoTen}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography color='blue-gray' className='font-normal'>
                        {users.email}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography color='blue-gray' className='font-normal'>
                        {users.soDt}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography color='blue-gray' className='font-medium'>
                        <div className='flex gap-6 '>
                          <span className='text-[#1890ff] cursor-pointer'>Edit</span>
                          <span className='text-[#ff4f4f] cursor-pointer'>Remove</span>
                        </div>
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <Pagination
              count={pagination.count}
              currentPage={pagination.currentPage}
              totalCount={pagination.totalCount}
              totalPage={pagination.totalPages}
              getListUsers={getListUsers}
            />
          </Card>
        </div>
      </div>
    </div>
  )
}
