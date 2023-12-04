import { useEffect, useState } from 'react'
import { InputAddUser } from '../../../components/Common/InputAddUser'
import { User } from '../../../@types/Admin'
import axios from 'axios'

export default function AddUser() {

  const [formListData, setFormListData] = useState<User>({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: 'GP01',
    maLoaiNguoiDung: '',
    hoTen: ''
  })
  console.log(formListData)

  const isUserNameValid = (username: string) => {
    return /^([A-Za-z]+)\s([A-Za-z]+)$/i.test(username)
  }

  const isPasswordValid = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`])[\w!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`]{8,}$/.test(
      password
    )
  }

  const isEmailValid = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    return emailRegex.test(email)
  }
  const isPhoneNumberValid = (phoneNumber: string) => {
    const phoneRegex = /^\d{10}$/
    return phoneRegex.test(phoneNumber)
  }

  const isFullNameValid = (fullName: string) => {
    const nameRegex = /^[A-Za-z\s]+$/
    return nameRegex.test(fullName)
  }

  const [renderError, setRenderError] = useState({
    accountError: '',
    emailError: '',
    passError: '',
    phoneError: '',
    nameError: '',
    message: ''
  })

  const postUsers = async (e: any) => {
    e.preventDefault()
    try {
      if (!isUserNameValid(formListData.taiKhoan)) {
        setRenderError((prev) => ({ ...prev, accountError: 'Tài Khoản Không Hợp Lệ' }))
      }
      if (!isPasswordValid(formListData.matKhau)) {
        setRenderError((prev) => ({ ...prev, passError: 'Mật Khẩu Không Hợp Lệ' }))
      }
      if (!isEmailValid(formListData.email) && formListData.email !== '') {
        setRenderError((prev) => ({ ...prev, emailError: 'Email Không Hợp Lệ' }))
      }
      if (!isPhoneNumberValid(formListData.soDt) && formListData.soDt !== '') {
        setRenderError((prev) => ({ ...prev, phoneError: 'Số điện thoại không hợp lệ' }))
      }
      if (!isFullNameValid(formListData.hoTen) && formListData.hoTen !== '') {
        setRenderError((prev) => ({ ...prev, nameError: 'Ho Ten Không Hợp Lệ' }))
      }
      const accessToken = localStorage.getItem('access_token')
      const headers = {
        Authorization: `Bearer ${accessToken}`
      }

      const res = await axios.post(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
        {
          taiKhoan: formListData.taiKhoan,
          matKhau: formListData.matKhau,
          email: formListData.email,
          soDt: formListData.soDt,
          maNhom: formListData.maNhom,
          maLoaiNguoiDung: formListData.maLoaiNguoiDung,
          hoTen: formListData.hoTen
        },
        {
          headers
        }
      )

      if (res) {
        console.log(res.data)
      }
    } catch (error) {
      // setRenderError((prev) => ({ ...prev, message: error.response.data }))
    }
  }

  useEffect(() => {}, [formListData])

  return (
    <div>
      <h2 className='font-[600] text-[3rem] p-8'>Thêm Người Dùng</h2>
      <div>
        <form className='ml-10'>
          <div className='flex items-center'>
            <h2 className='w-[170px]'>Tài Khoản:</h2>
            <label>
              <InputAddUser
                value={formListData.taiKhoan}
                type='text'
                onChange={(e) => {
                  setFormListData((prev) => ({ ...prev, taiKhoan: e.target.value }))
                }}
                setRenderError={setRenderError}
              />
              <div className=' mt-2 w-[720px] ml-8 text-center p-4 bg-[#f8d7da] text-[#721c24]'>
                {' '}
                {renderError.accountError}
              </div>
            </label>
          </div>
          <div className='flex items-center'>
            <h2 className='w-[170px]'> Mật khẩu:</h2>
            <label className='mt-4'>
              <InputAddUser
                value={formListData.matKhau}
                type='password'
                onChange={(e) => {
                  setFormListData((prev) => ({ ...prev, matKhau: e.target.value }))
                }}
                setRenderError={setRenderError}
              />
              <div className='mt-2 w-[720px] ml-8 text-center p-4 bg-[#f8d7da] text-[#721c24]'>
                {' '}
                {renderError.passError}
              </div>
            </label>
          </div>
          <div className='flex items-center'>
            <h2 className='w-[170px]'>Email:</h2>
            <label className='mt-4'>
              <InputAddUser
                value={formListData.email}
                type='email'
                onChange={(e) => {
                  setFormListData((prev) => ({ ...prev, email: e.target.value }))
                }}
                setRenderError={setRenderError}
              />
              <div className='mt-2 w-[720px] ml-8 text-center p-4 bg-[#f8d7da] text-[#721c24]'>
                {' '}
                {renderError.emailError}
              </div>
            </label>
          </div>
          <div className='flex items-center'>
            <h2 className='w-[170px]'>Số điện thoại:</h2>
            <label className='mt-4'>
              <InputAddUser
                value={formListData.soDt}
                type='text'
                onChange={(e) => {
                  setFormListData((prev) => ({ ...prev, soDt: e.target.value }))
                }}
                setRenderError={setRenderError}
              />
              <div className='mt-2 w-[720px] ml-8 text-center p-4 bg-[#f8d7da] text-[#721c24]'>
                {' '}
                {renderError.phoneError}
              </div>
            </label>
          </div>
          <div className='flex items-center'>
            <h2 className='w-[170px]'>Họ Tên:</h2>
            <label className='mt-8'>
              <InputAddUser
                value={formListData.hoTen}
                type='text'
                onChange={(e) => {
                  setFormListData((prev) => ({ ...prev, hoTen: e.target.value }))
                }}
                setRenderError={setRenderError}
              />
              <div className='mt-2 w-[720px] ml-8 text-center p-4 bg-[#f8d7da] text-[#721c24]'>
                {' '}
                {renderError.nameError}
              </div>
            </label>
          </div>
          <div className='flex items-center'>
            <h2 className='w-[170px]'> Mã loại người dùng:</h2>
            <label className='mt-4'>
              <div>
                <select
                  className='ml-8 p-3 w-[720px] h-[45px] border-[1px] border-solid border-[#ccc]'
                  value={formListData.maLoaiNguoiDung}
                  onChange={(e) => {
                    setFormListData((prev) => ({ ...prev, maLoaiNguoiDung: e.target.value }))
                  }}
                >
                  <option value='KhachHang'>Khách Hàng</option>
                  <option value='QuanTri'>Quản Trị</option>
                </select>
              </div>
            </label>
          </div>
          <div className='flex items-center'>
            <h2 className='w-[170px]'> Tác vụ:</h2>
            <label className='mt-4'>
              <button
                onClick={postUsers}
                className='border-[1px] border-solid bg-[#1890ff] text-white w-[200px] h-[50px] ml-8 rounded-md'
              >
                Thêm Users
              </button>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}
