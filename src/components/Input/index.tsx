import axios from 'axios'
import { stringify } from 'querystring'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { IUser } from '../../@types/User'
import { LoginContext } from '../../App'
import Button from '../Common/Button'

export default function Input() {
  const navigate = useNavigate()

  const { formData, setFormData, setAuthenticated, setProfile } = useContext(LoginContext)!

  const [checkLogin, setCheckLogin] = useState(false)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = () => {
    setCheckLogin(!checkLogin)
  }

  //Local Storage

  // useEffect(() => {
  //   const storedUsername = localStorage.getItem("username");
  //   const storedAccessToken = localStorage.getItem("acesstoken");

  //   console.log(storedAccessToken);

  //   if (storedUsername && storedAccessToken) {
  //     setAuthenticated(true);
  //   }
  // }, []);

  // Handle Login

  const handleSummit = async (e: any) => {
    e.preventDefault()

    if (checkLogin) {
      const res = await axios
        .post('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy', {
          taiKhoan: formData.username,
          matKhau: formData.password,
          hoTen: formData.fullname,
          email: formData.email,
          soDt: formData.phonenumber,
          maNhom: 'GP01',
          maLoaiNguoiDung: 'KhachHang'
        })
        .then(function (response) {
          Swal.fire({
            icon: 'success',
            title: 'Đăng Kí Thành Công',
            showConfirmButton: false,
            timer: 2000
          })
        })
        .catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Đăng Kí Thất Bại',
            showConfirmButton: false,
            text: error.response.data,
            timer: 2000
          })
        })
    } else if (!checkLogin) {
      try {
        const res = await axios.post<IUser>('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap', {
          taiKhoan: formData.username,
          matKhau: formData.password
        })
        if (res.data) {
          console.log(res.data)

          navigate('/')
          setAuthenticated(true)
          setProfile(res.data)
          localStorage.setItem(
            'profile',
            JSON.stringify({
              email: res.data.email,
              hoTen: res.data.hoTen,
              maLoaiNguoiDung: res.data.maLoaiNguoiDung,
              maNhom: res.data.maNhom,
              soDT: res.data.soDT,
              taiKhoan: res.data.taiKhoan
            })
          )
          localStorage.setItem('access_token', res.data.accessToken)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Đăng Nhập Thất Bại',
          showConfirmButton: false,
          text: 'Tài khoản hoặc mật khẩu không chính xác',
          timer: 5000
        })
      }
    }
  }

  return (
    <div>
      <form className='flex flex-col' onSubmit={(e) => handleSummit(e)}>
        <input
          value={formData.username}
          onChange={handleOnChange}
          type='text'
          name='username'
          placeholder='Username'
          className='w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none'
        />
        <input
          value={formData.password}
          onChange={handleOnChange}
          type='password'
          name='password'
          placeholder='Password'
          className='w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none'
        />
        {checkLogin && (
          <>
            <input
              value={formData.fullname}
              onChange={handleOnChange}
              type='text'
              name='fullname'
              placeholder='Fullname'
              className='w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none'
            />
            <input
              value={formData.email}
              onChange={handleOnChange}
              type='text'
              name='email'
              placeholder='Email'
              className='w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none'
            />
            <input
              value={formData.phonenumber}
              onChange={handleOnChange}
              type='text'
              name='phonenumber'
              placeholder='Phonenumber'
              className='w-[320px] h-[54px] pt-[27px] px-[12px] pb-[10px] text-[1.4rem] mt-[20px] rounded-[2px] border-none'
            />
          </>
        )}
        <p className='w-[320px] text-[1.2rem] text-white mt-[20px] text-center leading-7'>
          Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
        </p>
        {!checkLogin ? <Button primary>ĐĂNG NHẬP</Button> : <Button primary>ĐĂNG KÍ</Button>}

        <p className='block w-[320px] text-[1.2rem] text-white mt-[10px] text-center leading-7'>
          Nếu bạn chưa có tài khoản,{'  '}
          <Link to='' className='underline underline-offset-[2px]' onClick={handleLogin}>
            {!checkLogin ? 'hãy đăng kí tài khoản tại đây ' : 'hãy đăng nhập tại đây'}
          </Link>
        </p>
      </form>
    </div>
  )
}
