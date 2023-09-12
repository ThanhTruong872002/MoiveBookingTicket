import React, { useContext, useState, useEffect } from 'react'
import { LogOutIcon } from '../../components/Common/Icons'
import { useNavigate } from 'react-router-dom'
import { clearAccessToken } from '../../utils/auth'
import { LoginContext } from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faBars,
  faEnvelope,
  faGear,
  faIdBadge,
  faLock,
  faMobileScreen,
  faShoppingCart,
  faUnlock,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/Common/Input'
import Button from '../../components/Common/Button'
import Swal from 'sweetalert2'
import axios from 'axios'
import { format } from 'date-fns'

interface IFormData {
  password: string
  newPassword: string
  confirmNewPassword: string
  account: string | undefined
  phoneNumber: string | undefined
  email: string | undefined
  customerName: string | undefined
}

interface Ghe {
  maHeThongRap: string
  tenHeThongRap: string
  maCumRap: string
  tenCumRap: string
  maRap: number
  tenRap: string
  maGhe: number
  tenGhe: string
}

interface VeDat {
  danhSachGhe: Ghe[]
  maVe: number
  ngayDat: string
  tenPhim: string
  giaVe: number
  thoiLuongPhim: number
}

interface NguoiDung {
  taiKhoan: string
  matKhau: string
  hoTen: string
  email: string
  soDT: string
  maNhom: string
  loaiNguoiDung: string | null
  thongTinDatVe: VeDat[]
}

const Profile = () => {
  const { setProfile, profile, setAuthenticated } = useContext(LoginContext)
  const navigate = useNavigate()

  const [changleBg, setChangeBg] = useState(false)
  const [changeBgTickets, setChangeBgTickets] = useState(false)
  const [personalInfo, setPersonalInfo] = useState(false)
  const [formData, setFormData] = useState<IFormData>({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
    account: profile?.taiKhoan,
    phoneNumber: profile?.soDT,
    email: profile?.email,
    customerName: profile?.hoTen
  })

  const [disabledButton, setDisabledButton] = useState(true)

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const [checkedChangeProfile, setCheckedChangeProfile] = useState<0 | 1 | 2>(0)

  const handleLogout = () => {
    clearAccessToken()
    setProfile(null)
    setAuthenticated(false)
    navigate('/Signin')
  }

  const handleClick = () => {
    setChangeBg(!changleBg)
    setChangeBgTickets(false)
    setPersonalInfo(false)
  }

  const handleToChangePassword = () => {
    setCheckedChangeProfile(1)
  }
  const handleClickPersonal = () => {
    setChangeBgTickets(!changeBgTickets)
    setChangeBg(false)
    setPersonalInfo(true)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSubmitted(true)
  }

  useEffect(() => {
    if (isFormSubmitted) {
      if (formData.newPassword !== '') {
        if (formData.password === formData.newPassword) {
          Swal.fire({
            icon: 'error',
            title: 'Mật khẩu mới trùng với mật khẩu cũ',
            showConfirmButton: false,
            text: 'Vui lòng nhập lại',
            timer: 2000
          })
          setIsFormSubmitted(false)
        } else if (formData.confirmNewPassword !== formData.newPassword) {
          Swal.fire({
            icon: 'error',
            title: 'Xác nhận mật khẩu chưa chính xác',
            showConfirmButton: false,
            text: 'Vui lòng nhập lại',
            timer: 2000
          })
          setIsFormSubmitted(false)
        }
      }
    }
    if (formData.password !== '' && formData.newPassword !== '' && formData.confirmNewPassword !== '') {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [formData, isFormSubmitted])

  const putChangePassword = async () => {
    const accessToken = localStorage.getItem('access_token')
    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    try {
      const res = await axios.put(
        'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
        {
          taiKhoan: formData.account || usersProfile?.taiKhoan,
          matKhau: formData.newPassword === '' ? usersProfile.matKhau : formData.newPassword,
          email: formData.email || usersProfile?.email,
          soDt: formData.phoneNumber || usersProfile?.soDT,
          maNhom: profile?.maNhom,
          maLoaiNguoiDung: profile?.maLoaiNguoiDung,
          hoTen: formData.customerName || usersProfile?.hoTen
        },
        {
          headers
        }
      )
      if (res.status === 200) {
        if (formData.newPassword !== '') {
          Swal.fire({
            icon: 'success',
            title: 'Bạn đã thay đổi mật khẩu thành công ',
            showConfirmButton: true,
            timer: 2000
          }).then((result) => {
            if (result.isConfirmed) {
              setCheckedChangeProfile(0)
              setFormData({
                password: '',
                newPassword: '',
                confirmNewPassword: '',
                account: profile?.taiKhoan,
                phoneNumber: profile?.soDT,
                email: profile?.email,
                customerName: profile?.hoTen
              })
            }
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Bạn đã thay đổi thông tin cá nhân thành công ',
            showConfirmButton: true,
            timer: 2000
          }).then((result) => {
            if (result.isConfirmed) {
              setCheckedChangeProfile(0)
            }
          })
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'error',
        showConfirmButton: true,
        timer: 2000
      })
    }
  }

  const [usersProfile, setUserProfile] = useState<NguoiDung>({
    taiKhoan: 'thanhtruong02',
    matKhau: '12345',
    hoTen: 'Thanh Truong',
    email: 'truongtecu872202@gmail.com',
    soDT: '076655805',
    maNhom: 'GP03',
    loaiNguoiDung: null,
    thongTinDatVe: [
      {
        danhSachGhe: [
          {
            maHeThongRap: 'BHDStar',
            tenHeThongRap: 'BHD Star Cineplex - 3/2',
            maCumRap: 'Rạp 1',
            tenCumRap: 'Rạp 1',
            maRap: 451,
            tenRap: 'Rạp 1',
            maGhe: 47465,
            tenGhe: '65'
          }
        ],
        maVe: 110079,
        ngayDat: '2023-08-27T17:01:17.313',
        tenPhim: 'Black Window',
        giaVe: 75000,
        thoiLuongPhim: 120
      }
    ]
  })

  console.log(usersProfile.thongTinDatVe[9])

  useEffect(() => {
    const getProfile = async () => {
      const res = await axios.post('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan', {
        taiKhoan: profile?.taiKhoan
      })

      if (res.status === 200) {
        setUserProfile(res.data)
      }
    }

    getProfile()
  }, [])

  const changeBgSideBar = changleBg ? 'bg-[#f55960] text-white transition-all' : ''
  const changeBgTicketStyle = changeBgTickets ? 'bg-[#f55960] text-white transi9tion-all' : ''

  return (
    <div>
      <div className='flex justify-between items-center px-20 py-3 shadow-md z-10'>
        <div>
          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABNVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////7QibkNivkNCn/+/v9q577Si/+8/L/7uz62tj8jHvvh4D8g3HqX1bMzc37SC3Rvrv+9/bwkozsbVn/8/HMzc7kOS7mOyW/LSP+8O/5y8joUkj8QibvgXr8/f35+frQ0ND5SS/iNSrYMyj9ppnQMSb39vbg39/W1tbfNCnHLyT//fz9+fjv7+/8qZzwPSbz8/Pr6+vn5+fj4+Pb29v6xsLyopr5opTnnJHhlIj7Ryz+6ef9rqP0qaH5UzrlOjD7RSnqOyW6KyL/4t3kz8zgzcrQtrP9tar9sqfte3TCd3L6emftbVrsbFnpUj3mQjgGeX2GAAAAF3RSTlMA+9EF9vDruKakj2lPSS8sGQ3i4b69OIta07gAAAM+SURBVGje1drpUhNBFIbhnuwrYe9JIIoLERQJqAkkJmELsqNsIu77/V+CJrH8JsxUf52R6SrfG3iqq7t/nSOchXPpZChmyX/KioWS6VxYeDeSSYwSQBsaTWRGPIhwNh6RN1gknnWdZjgVlTdcNDXcbwyNywAaH3IakyEZSKFJGEPM8K/8PcvwhAysiT/3Ek7JAEv13lg2KgMsmu3+wbgMtHjnV2YiMtAiGSHCCRlwibDIjcmAG8uJtCUDzkqLpAy8pAjJwAuJmAy8mLBk4FlCGuh/QZrtilTEkJnzOW7srK20qqfTt30iM/cfz1OluTY7u/D+q31PoQiVUShQpXrw23jw3bZVilAZ+TxTqq2O8dC2lYpQGkyp7MNQKEJlUGVvBYZCEQqDKrswlIpQGExpw1ArghpQ3I8XBhSOwKBK9QAGUYTKgJI/cj9eGEwRKgPIk2XX44VBFaFtzG05jb0FGFQRusbSs+694PHCoIrQNpy334ZBFSDccL6xnTUYXAHCDShNGHqK0DWgVA9w51wBwg0olRYMTUVoGlBaKzA0FaE0fh72DFRrfPnwTcuAAuSo4HWQ056BGlflH09tVycXl7ar4uF15NbdvFt5PX/4Oe+sflVetD2M7XevVl3G9BQQLwVMoc8olxdxDnTxtrIPBQaQPkXZOoz+Lo+nKntQYAAhCowNGNcqPZ+Suy+hwACipdRgeCttKDCA6Ci1RtdQKTtdBQYQXaVnqJXm0SoMF0KVWp0YHWVLVs+LMFwIU+obHYMox1ty81OxBAMIUWDQTjrKxzMYQBQKHi/+ObuXzU3JESgwGjCIMi2RA+FKDQZFzrQQKHhY3MAf9EaoUn/j1wDClHX/BhCi1F74N4AQxafBESh+DY5A8W1wBMod7f8BQxNBj6BQgyH8LNxgCFe4QRGucIMjXOEGR+jt87fLEa5wgyNc4QZHuMINjnCFGxzhCjc4whVucIQr3OAIV7jBEa5wgyNcgaEfRhuDKKWBDAtDmgGU0jYMjWIYN+kqMHQLYXCmrRRh6JUcfAS4tDygYaWNDDONjGVNDJiNjMpNDP2NrC+YWMQwsVJiYjnGxJqPiYUlE6tXRpfIjKzD/QKIj6Xp8VGBdwAAAABJRU5ErkJggg=='
            alt='Logo'
            className='transition-all cursor-pointer inline-block w-[50px] h-[50px] object-cover'
            onClick={() => navigate('/')}
          />
        </div>
        <h2 className='font-[600] text-[2.2rem]'>THÔNG TIN CÁ NHÂN </h2>

        <div className='cursor-pointer font-[600] text-[1.8rem] flex items-center gap-1' onClick={handleLogout}>
          Đăng xuất
          <LogOutIcon />
        </div>
      </div>

      <div className='flex '>
        <div className='w-[20%] p-4 flex flex-col items-center border-r-[1px] border-solid border-[#ccc] h-[100vh]'>
          <div className='text-center'>
            <img
              src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/364743708_1725906504494525_1533049139051175614_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=fe8171&_nc_ohc=XCdHhGBUTPEAX_Lf2k9&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBh2NBpVJ12E5joh9ie9_7S01ViWlJkD0aSjTlS8rE1hg&oe=64FB3E99'
              alt=''
              className='ml-6 w-[100px] h-[100px] object-cover rounded-[50%] '
            />
            <h2 className='font-[600] mt-2 mt-3'>{profile?.taiKhoan}</h2>
            <p className='text-[1.4rem] mt-3'>{profile?.maLoaiNguoiDung}</p>
          </div>
          <div className='pl-10 mt-6'>
            <div className='flex items-center gap-3'>
              <FontAwesomeIcon icon={faBars} size='xl' style={{ color: 'red' }} />
              <h2 className='text-[2rem] text-[#fb4226] font-[600]'>Thông tin chung</h2>
            </div>
            <div
              className={`flex items-center gap-6 mt-8 cursor-pointer p-6 text-center ${changeBgSideBar} w-[250px] h-[50px]`}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faAddressCard} size='xl' />
              <h2 className='text-[1.8rem] font-[500] '>Thông tin cá nhân</h2>
            </div>
            <div
              onClick={handleClickPersonal}
              className={`flex items-center gap-6 mt-8 cursor-pointer p-6 ${changeBgTicketStyle} w-[250px] h-[50px] `}
            >
              <FontAwesomeIcon icon={faShoppingCart} size='xl' />
              <h2 className='text-[1.8rem] font-[500]'>Vé đã đặt</h2>
            </div>
          </div>
        </div>

        {!personalInfo && (
          <>
            <div className='w-[80%] p-10 flex gap-10'>
              <div className='flex flex-col gap-20 w-[300px] h-[250px] p-10 shadow-md'>
                <div
                  onClick={() => setCheckedChangeProfile(0)}
                  className='flex gap-4 cursor-pointer w-[100%] h-[46px] hover:opacity-[.7]'
                >
                  <FontAwesomeIcon icon={faUser} />
                  <p>Thông tin cá nhân</p>
                </div>
                <div
                  onClick={handleToChangePassword}
                  className='flex gap-4 cursor-pointer w-[100%] h-[46px] hover:opacity-[.7]'
                >
                  <FontAwesomeIcon icon={faUnlock} />
                  <p>Thay đổi mật khẩu </p>
                </div>
                <div
                  onClick={() => setCheckedChangeProfile(2)}
                  className='flex gap-4 cursor-pointer w-[100%] h-[46px] hover:opacity-[.7]'
                >
                  <FontAwesomeIcon icon={faGear} />
                  <p>Thay đổi thông tin cá nhân </p>
                </div>
              </div>
              <div className='w-[880px] h-[620px] shadow-md p-10 transition-all'>
                {checkedChangeProfile === 0 && (
                  <>
                    <div>
                      <div className='font-[600] text-[2rem] '>Thông tin tài khoản</div>
                      <div className='border-t-[1px] border-solid border-[#ccc] mt-10'></div>
                    </div>

                    <div className='mt-10 flex flex-col gap-16'>
                      <div className='flex gap-10'>
                        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f55960]'>
                          <FontAwesomeIcon icon={faIdBadge} style={{ color: 'white' }} size='2xl' />
                        </div>
                        <div className='w-[600px]'>
                          <h2 className='font-[600]'>
                            Tên khách hàng: <span className='text-[#fb4226] text-[1.8rem] ml-4'>{profile?.hoTen}</span>
                          </h2>
                          <p className='text-[1.3rem] text-[#878484] mt-2'>
                            Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị trên website. Bạn có thể thay
                            đổi ở phần thay đổi thông tin cá nhân
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-10'>
                        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f55960]'>
                          <FontAwesomeIcon icon={faUser} style={{ color: 'white' }} size='2xl' />
                        </div>
                        <div className='w-[600px]'>
                          <h2 className='font-[600]'>
                            Tên tài khoản:{' '}
                            <span className='text-[#fb4226] text-[1.8rem] ml-4'>{profile?.taiKhoan}</span>
                          </h2>
                          <p className='text-[1.3rem] text-[#878484] mt-2'>
                            Là tên tài khoản (username) để đăng nhập tài khoản.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-10'>
                        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f55960]'>
                          <FontAwesomeIcon icon={faLock} style={{ color: 'white' }} size='2xl' />
                        </div>
                        <div className=' flex justify-between items-center gap-32'>
                          <div>
                            <h2 className='font-[600]'>Mật khẩu</h2>
                            <p className='text-[1.3rem] text-[#878484] mt-2'>
                              Mật khẩu cần được kết hợp bởi nhiều chữ cái, số và ký tự đặc biệt để bảo mật tài khoản
                            </p>
                          </div>
                          <div onClick={handleToChangePassword}>
                            <Button changePassword>Thay đổi</Button>
                          </div>
                        </div>
                      </div>
                      <div className='flex gap-10'>
                        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f55960]'>
                          <FontAwesomeIcon icon={faMobileScreen} style={{ color: 'white' }} size='2xl' />
                        </div>
                        <div className='w-[600px]'>
                          <h2 className='font-[600]'>
                            Số điện thoại: <span className='text-[#fb4226] text-[1.8rem] ml-4'>{profile?.soDT}</span>
                          </h2>
                          <p className='text-[1.3rem] text-[#878484] mt-2'>
                            Số điện thoại dùng để đăng kí tài khoản. Thông tin này có thể được dùng để xác minh bạn là
                            chủ sở hữu tài khoản nhằm thiết lập lại mật khẩu
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-10'>
                        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f55960]'>
                          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} size='2xl' />
                        </div>
                        <div className='w-[600px]'>
                          <h2 className='font-[600]'>
                            Email: <span className='text-[#fb4226] text-[1.8rem] ml-4'>{profile?.email}</span>
                          </h2>
                          <p className='text-[1.3rem] text-[#878484] mt-2'>
                            Email có thể được sử dụng để thay đổi mật khẩu khi không có công cụ bảo mật nào khác được
                            bật. Cũng như nhận các tin tức hoạt động của tài khoản.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* CONTENT  */}
                {checkedChangeProfile === 1 && (
                  <>
                    <div>
                      <div className='font-[600] text-[2rem] '>Thay đổi mật khẩu </div>
                      <div className='border-t-[1px] border-solid border-[#ccc] mt-10'></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className='mt-10'>
                        <Input
                          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                          value={formData.password}
                          typeInput={'password'}
                          placeholder='Mật khẩu hiện tại'
                        />
                      </div>
                      <div className='mt-10'>
                        <Input
                          onChange={(e) => setFormData((prev) => ({ ...prev, newPassword: e.target.value }))}
                          value={formData.newPassword}
                          typeInput={'password'}
                          placeholder='Nhập mật khẩu mới'
                        />
                      </div>
                      <div className='mt-10'>
                        <Input
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, confirmNewPassword: e.target.value }))
                          }}
                          value={formData.confirmNewPassword}
                          typeInput={'password'}
                          placeholder='Xác nhận mật khẩu mới'
                        />
                      </div>

                      <div className='mt-20' onClick={putChangePassword}>
                        <Button disabled={disabledButton} changeConfirmPassword>
                          {' '}
                          Thay đổi
                        </Button>
                      </div>
                    </form>
                  </>
                )}
                {checkedChangeProfile === 2 && (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div className='font-[600] text-[2rem] '>Thay đổi thông tin cá nhân </div>
                      <div className='border-t-[1px] border-solid border-[#ccc] mt-10'></div>
                    </div>
                    <div className='mt-10'>
                      <Input
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, account: e.target.value }))
                        }}
                        value={profile?.taiKhoan}
                        typeInput={'text'}
                        placeholder='Tài khoản'
                        readOnly
                      />
                    </div>
                    <div className='mt-10'>
                      <Input
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
                        }}
                        value={formData.phoneNumber}
                        typeInput={'text'}
                      />
                    </div>
                    <div className='mt-10'>
                      <Input
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }}
                        value={formData.email}
                        typeInput={'text'}
                        placeholder='Email'
                      />
                    </div>
                    <div className='mt-10'>
                      <Input
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, customerName: e.target.value }))
                        }}
                        value={formData.customerName}
                        typeInput={'text'}
                        placeholder='Tên khách hàng'
                      />
                    </div>

                    <div className='mt-20' onClick={putChangePassword}>
                      <Button changeConfirmPassword> Thay đổi</Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </>
        )}

        {personalInfo && (
          <div className='w-[80%]'>
            <div className='p-10 shadow-md w-[95%] mx-auto mt-10'>
              <div>
                <div className='font-[600] text-[2rem] '>Thông tin đặt vé</div>
                <div className='border-t-[1px] border-solid border-[#ccc] mt-10'></div>
              </div>
              <table className='mt-10'>
                <tr className=' text-[1.4rem] bg-[#f55960] text-[#fff]'>
                  <td className='p-10 w-[220px]'>Tên phim</td>
                  <td className='w-[150px] text-center'>Ngày đặt</td>
                  <td className='w-[160px] text-center px-2'>Thời lượng phim</td>
                  <td className='w-[220px] text-center'>Rạp</td>
                  <td className='w-[140px] text-center'>Số ghế</td>
                  <td className='w-[110px]'>Mã Vé</td>
                  <td className='w-[80px]'>Giá vé </td>
                </tr>

                {usersProfile.thongTinDatVe.map(
                  (listSeats) => (
                    <tr className='pl-3 text-[1.4rem]'>
                      <td className='py-10 pl-4 leading-8'>{listSeats.tenPhim}</td>
                      <td className='text-center leading-8'>
                        {`${format(new Date(listSeats.ngayDat), 'dd/MM/yyyy')}
                        `}
                      </td>
                      <td className='text-center'>{listSeats.thoiLuongPhim} phút</td>
                      <>
                        <td className='text-center leading-8'>{listSeats.danhSachGhe[0].tenHeThongRap}</td>
                        <td className='flex flex-wrap gap-2 justify-center mr-3 w-[150px]'>
                          {listSeats.danhSachGhe.map((res) => (
                            <div className='flex justify-center items-center  w-[32px] h-[20px] bg-[#f55960] text-white rounded-md font-[500]'>
                              {res.tenGhe}
                            </div>
                          ))}
                        </td>
                      </>
                      <td className=' w-[120px]'>{listSeats.maVe}</td>
                      <td>{listSeats.giaVe.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                    </tr>
                  )
                  // ))
                )}
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
