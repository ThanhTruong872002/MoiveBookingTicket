import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { Card, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { ArrowLeftIcon, ArrowRightIcon } from '../../../components/Common/Icons'
import Pagination from './Pagination'
import { ApiResponse, User } from '../../../@types/Admin'
import AddUser from './AddUser'
import Film from '../Films/AddFilms'
import { LoginContext } from '../../../App'
import AddFilm from '../Films/AddFilms'

const TABLE_HEAD = ['Tài khoản', 'Mật khẩu', 'Họ Tên', 'Email', 'SĐT', 'Thao Tác']
const TABLE_HEAD_FILM = ['Mã Phim', 'Hình Ảnh', 'Tên Phim', 'Đánh Giá', 'Thao Tác']

interface ITypeUser {
  listUsers: User[]
  setListUsers: Dispatch<SetStateAction<User[]>>
  pagination: ApiResponse
  setPagination: Dispatch<SetStateAction<ApiResponse>>
  checked: 1 | 2 | 3 | 4
  setChecked: React.Dispatch<React.SetStateAction<2 | 1 | 3 | 4>>
  checkedSidebar: boolean
  setCheckSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Users({
  listUsers,
  setListUsers,
  pagination,
  setPagination,
  checked,
  setChecked,
  checkedSidebar,
  setCheckSideBar
}: ITypeUser) {
  const [changeWidthTable, setChangeWidthTable] = useState(false)

  const { filmData, setFilmData } = useContext(LoginContext)



  const getListUsers = async (index: number) => {
    const res = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${index}&soPhanTuTrenTrang=10`
    )
    if (res) {
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
        <div className='w-[15%] h-[114vh] flex flex-col justify-between bg-[url("https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg")] py-10'>
          <div>
            <div
              onClick={() => {
                setChecked(1)
                setCheckSideBar(true)
              }}
              className='flex gap-10 items-center cursor-pointer h-[54px] justify-center hover:bg-[#1890ff]'
            >
              <FontAwesomeIcon icon={faUser} size='xl' style={{ color: 'white' }} />
              <h2 className='text-[2rem] text-white'>Users</h2>
            </div>
            <div
              onClick={() => setCheckSideBar(false)}
              className='flex gap-10 items-center mt-10 cursor-pointer h-[54px] justify-center hover:bg-[#1890ff] mr-3'
            >
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
        <div className='w-[5%]  h-[100vh]  flex flex-col justify-between bg-[url("https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg")] py-10'>
          <div>
            <div className='flex gap-10 items-center cursor-pointer h-[54px] justify-center hover:bg-[#1890ff]'>
              <FontAwesomeIcon icon={faUser} size='xl' style={{ color: 'white' }} />
            </div>
            <div className='flex gap-10 items-center mt-10 cursor-pointer h-[54px] justify-center hover:bg-[#1890ff] mr-3'>
              <FontAwesomeIcon icon={faFilm} size='xl' style={{ color: 'white' }} />
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
        <div className='h-[60px] shadow-md flex justify-end items-center p-10'>
          <h2 className='text-[1.8rem] font-[500] cursor-pointer'>Đăng xuất</h2>
        </div>
        <div className='pr-10 p-4'>
          {checked === 1 && checkedSidebar && (
            <>
              <h2 className='text-[3rem] font-[600] mt-6 '>Quản Lý Người Dùng</h2>
              <div className='flex justify-between mt-20 mb-10'>
                {' '}
                <button
                  onClick={() => setChecked(2)}
                  className='w-[170px] h-[40px] cursor-pointer font-[500] border-[1px] border-solid border-[#ccc] p-3'
                >
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
            </>
          )}

          {/* LIST USER  */}
          {checked === 1 && checkedSidebar && (
            <Card className=' w-full'>
              <table className='w-full min-w-max table-auto text-left text-[1.8rem]'>
                <thead className='sticky top-0'>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className='border-b border-blue-gray-200  py-8 px-4 bg-gray-200'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal text-[1.8rem] leading-none '
                        >
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
              </table>
              <Pagination
                count={pagination.count}
                currentPage={pagination.currentPage}
                totalCount={pagination.totalCount}
                totalPage={pagination.totalPages}
                getListUsers={getListUsers}
              />
            </Card>
          )}

          {/* ADD USER  */}
          {checked === 2 && checkedSidebar && <AddUser />}

          {/* FIlm  */}
          {checked === 1 && !checkedSidebar && (
            <>
              <h2 className='text-[3rem] font-[600] mt-6 '>Quản Lý Film</h2>
              <div className='flex justify-between mt-20 mb-10'>
                {' '}
                <button
                  onClick={() => setChecked(2)}
                  className='w-[170px] h-[40px] cursor-pointer font-[500] border-[1px] border-solid border-[#ccc] p-3'
                >
                  Thêm Film
                </button>
                <div className='flex items-center'>
                  <input
                    className='w-[325px] h-[48px] border-[1px] border-solid border-[#ccc] p-3 border-r-0'
                    type='text'
                    placeholder='Tìm kiếm film'
                  />
                  <div className='flex justify-center items-center text-white w-[50px] h-[50px] bg-[#1890FF]'>
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
              </div>
              <Card className=' w-full h-[70vh] overflow-scroll'>
                <table className='w-full min-w-max table-auto text-left text-[1.8rem] '>
                  <thead className='sticky top-0 z-50'>
                    <tr>
                      {TABLE_HEAD_FILM.map((head) => (
                        <th key={head} className='border-b border-blue-gray-200  py-8 px-4 bg-gray-200'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal text-[1.8rem] leading-none '
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filmData.map((films) => (
                      <tr className='even:bg-blue-gray-50/50 leading-10 '>
                        <td className='p-4'>
                          <Typography color='blue-gray' className='font-normal '>
                            {films.maPhim}
                          </Typography>
                        </td>
                        <td className='p-4'>
                          <Typography color='blue-gray' className='font-normal'>
                            <img
                              className='w-[100px] h-[120px] object-cover translate-y-[40px]'
                              src={films.hinhAnh}
                              alt=''
                            />
                          </Typography>
                        </td>
                        <td className='p-4 w-[300px]'>
                          <Typography color='blue-gray' className='font-normal'>
                            {films.tenPhim}
                          </Typography>
                        </td>
                        <td className='p-4 w-[200px] h-[100px] '>
                          <Typography color='blue-gray' className='font-normal pl-16'>
                            {films.danhGia}
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
                </table>
              </Card>
            </>
          )}

          {checked === 2 && !checkedSidebar && <AddFilm/>}
        </div>
      </div>
    </div>
  )
}
