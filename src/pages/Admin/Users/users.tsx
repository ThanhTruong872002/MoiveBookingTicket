import React, {useEffect, useState } from 'react'
import { Card, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { IUser } from '../../../@types/User'
import axios from 'axios'

const TABLE_HEAD = ['Tài khoản', 'Mật khẩu', 'Họ Tên', 'Email', 'SĐT', 'Thao Tác']


interface IInforUser {
  taiKhoan: string
  hoTen: string
  email: string
  soDt: string
  matKhau: string
  maLoaiNguoiDung: string
}

export default function Users() {

  const [listUsers, setListUsers] = useState<IInforUser[]>([
    {
      taiKhoan: '',
      hoTen: '',
      email: '',
      soDt: '',
      matKhau: '',
      maLoaiNguoiDung: '',
    }
  ])

  const getListUsers = async () => {
    const res = await axios.get(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
    )
    if(res) {
      console.log(res.data);
      setListUsers(res.data)
    }
  }
  

  useEffect(() => {
    
  getListUsers()
    
  }, [])
  



  return (
    <div className='flex h-[100vh]'>
      <div className='w-[15%] bg-[url("https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg")] py-10'>
        <img src='' alt='' />
        <div className='flex gap-10 items-center cursor-pointer h-[54px] justify-center hover:bg-[#1890ff]'>
          <FontAwesomeIcon icon={faUser} size='xl' style={{ color: 'white' }} />
          <h2 className='text-[2rem] text-white'>Users</h2>
        </div>
        <div className='flex gap-10 items-center mt-10 cursor-pointer h-[54px] justify-center hover:bg-[#1890ff] mr-3'>
          <FontAwesomeIcon icon={faFilm} size='xl' style={{ color: 'white' }} />
          <h2 className='text-[2rem] text-white'>Film</h2>
        </div>
      </div>
      <div className='w-[85%]'>
        <div className='h-[80px] shadow-md flex justify-end items-center p-10'>
          <h2 className='text-[1.8rem] font-[500]'>Đăng xuất</h2>
        </div>
        <div className='pr-10 p-10'>
          <h2 className='text-[3rem] font-[600] mt-6 '>Quản Lý Người Dùng</h2>
          <div className='flex justify-between mt-32 mb-10'>
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
          <Card className=' w-full h-[680px] overflow-scroll'>
            <table className='w-full min-w-max table-auto text-left'>
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className='border-b border-blue-gray-200  py-14 px-4 bg-gray-200'>
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
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {users.taiKhoan}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {users.matKhau}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {users.hoTen}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {users.email}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {users.soDt}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography as='a' href='#' variant='small' color='blue-gray' className='font-medium'>
                        <div className='flex gap-6'>
                          <span className='text-[#1890ff]'>Edit</span>
                          <span className='text-[#ff4f4f]'>Remove</span>
                        </div>
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  )
}
