import React, { useContext, useState } from 'react'
import { LogOutIcon } from '../../components/Common/Icons'
import { Form, useNavigate } from 'react-router-dom'
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

interface IFormData {
  password: string
  newPassword: string
  confirmNewPassword: string
}

export default function Profile() {
  const { setProfile, profile, setAuthenticated } = useContext(LoginContext)

  const [changleBg, setChangeBg] = useState(false)
  const [changeBgTickets, setChangeBgTickets] = useState(false)
  const [personalInfo, setPersonalInfo] = useState(false)
  const [formData, setFormData] = useState<IFormData>({
    password: '',
    newPassword: '',
    confirmNewPassword: ''
  })

  console.log(formData);
  


  const navigate = useNavigate()

  const handleLogout = () => {
    clearAccessToken()
    setProfile(null)
    setAuthenticated(false)
    navigate('/Signin')
  }

  const handleClick = () => {
    setChangeBg(!changleBg)
    setChangeBgTickets(false)
    setPersonalInfo(true)
  }

  const handleClickPersonal = () => {
    setChangeBgTickets(!changeBgTickets)
    setChangeBg(false)
  }

  // const updateState = (e: any) => {
  //   const [name: value] = e.target
  //   setFormData((prev) => ({...prev, name: e.target.value }) )
  // }

  const changeBgSideBar = changleBg ? 'bg-[#f55960] text-white transition-all' : ''
  const changeBgTicketStyle = changeBgTickets ? 'bg-[#f55960] text-white transition-all' : ''

  return (
    <div>
      <div className='flex justify-between items-center px-20 py-3 shadow-md z-10'>
        <div>
          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABNVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////7QibkNivkNCn/+/v9q577Si/+8/L/7uz62tj8jHvvh4D8g3HqX1bMzc37SC3Rvrv+9/bwkozsbVn/8/HMzc7kOS7mOyW/LSP+8O/5y8joUkj8QibvgXr8/f35+frQ0ND5SS/iNSrYMyj9ppnQMSb39vbg39/W1tbfNCnHLyT//fz9+fjv7+/8qZzwPSbz8/Pr6+vn5+fj4+Pb29v6xsLyopr5opTnnJHhlIj7Ryz+6ef9rqP0qaH5UzrlOjD7RSnqOyW6KyL/4t3kz8zgzcrQtrP9tar9sqfte3TCd3L6emftbVrsbFnpUj3mQjgGeX2GAAAAF3RSTlMA+9EF9vDruKakj2lPSS8sGQ3i4b69OIta07gAAAM+SURBVGje1drpUhNBFIbhnuwrYe9JIIoLERQJqAkkJmELsqNsIu77/V+CJrH8JsxUf52R6SrfG3iqq7t/nSOchXPpZChmyX/KioWS6VxYeDeSSYwSQBsaTWRGPIhwNh6RN1gknnWdZjgVlTdcNDXcbwyNywAaH3IakyEZSKFJGEPM8K/8PcvwhAysiT/3Ek7JAEv13lg2KgMsmu3+wbgMtHjnV2YiMtAiGSHCCRlwibDIjcmAG8uJtCUDzkqLpAy8pAjJwAuJmAy8mLBk4FlCGuh/QZrtilTEkJnzOW7srK20qqfTt30iM/cfz1OluTY7u/D+q31PoQiVUShQpXrw23jw3bZVilAZ+TxTqq2O8dC2lYpQGkyp7MNQKEJlUGVvBYZCEQqDKrswlIpQGExpw1ArghpQ3I8XBhSOwKBK9QAGUYTKgJI/cj9eGEwRKgPIk2XX44VBFaFtzG05jb0FGFQRusbSs+694PHCoIrQNpy334ZBFSDccL6xnTUYXAHCDShNGHqK0DWgVA9w51wBwg0olRYMTUVoGlBaKzA0FaE0fh72DFRrfPnwTcuAAuSo4HWQ056BGlflH09tVycXl7ar4uF15NbdvFt5PX/4Oe+sflVetD2M7XevVl3G9BQQLwVMoc8olxdxDnTxtrIPBQaQPkXZOoz+Lo+nKntQYAAhCowNGNcqPZ+Suy+hwACipdRgeCttKDCA6Ci1RtdQKTtdBQYQXaVnqJXm0SoMF0KVWp0YHWVLVs+LMFwIU+obHYMox1ty81OxBAMIUWDQTjrKxzMYQBQKHi/+ObuXzU3JESgwGjCIMi2RA+FKDQZFzrQQKHhY3MAf9EaoUn/j1wDClHX/BhCi1F74N4AQxafBESh+DY5A8W1wBMod7f8BQxNBj6BQgyH8LNxgCFe4QRGucIMjXOEGR+jt87fLEa5wgyNc4QZHuMINjnCFGxzhCjc4whVucIQr3OAIV7jBEa5wgyNcgaEfRhuDKKWBDAtDmgGU0jYMjWIYN+kqMHQLYXCmrRRh6JUcfAS4tDygYaWNDDONjGVNDJiNjMpNDP2NrC+YWMQwsVJiYjnGxJqPiYUlE6tXRpfIjKzD/QKIj6Xp8VGBdwAAAABJRU5ErkJggg=='
            alt='Logo'
            className='inline-block w-[50px] h-[50px] object-cover'
          />
        </div>
        <h2 className='font-[600] text-[2.2rem]'>THÔNG TIN CÁ NHÂN </h2>

        <div className='font-[600] text-[1.8rem] flex items-center gap-1' onClick={handleLogout}>
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
            <h2 className='font-[600] mt-2'>{profile?.taiKhoan}</h2>
            <p className='text-[1.4rem]'>{profile?.maLoaiNguoiDung}</p>
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

        <div className='w-[80%] p-10 flex gap-10'>
          <div className='flex flex-col gap-20 w-[300px] h-[250px] p-10 shadow-md'>
            <div className='flex gap-4 cursor-pointer w-[100%] h-[46px] hover:opacity-[.7]'>
              <FontAwesomeIcon icon={faUser} />
              <p>Thông tin cá nhân</p>
            </div>
            <div className='flex gap-4 cursor-pointer w-[100%] h-[46px] hover:opacity-[.7]'>
              <FontAwesomeIcon icon={faUnlock} />
              <p>Thay đổi mật khẩu </p>
            </div>
            <div className='flex gap-4 cursor-pointer w-[100%] h-[46px] hover:opacity-[.7]'>
              <FontAwesomeIcon icon={faGear} />
              <p>Thay đổi thông tin cá nhân </p>
            </div>
          </div>

          {/* {personalInfo && */}
          {/* ( */}
          <>
            {/* <div className='w-[880px] h-[620px] shadow-md p-10 transition-all'>
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
                        Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị trên website. Bạn có thể thay đổi ở
                        phần thay đổi thông tin cá nhân
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-10'>
                    <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f55960]'>
                      <FontAwesomeIcon icon={faUser} style={{ color: 'white' }} size='2xl' />
                    </div>
                    <div className='w-[600px]'>
                      <h2 className='font-[600]'>
                        Tên tài khoản: <span className='text-[#fb4226] text-[1.8rem] ml-4'>{profile?.taiKhoan}</span>
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
                      <Button changePassword>Thay đổi</Button>
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
                        Số điện thoại dùng để đăng kí tài khoản. Thông tin này có thể được dùng để xác minh bạn là chủ sở
                        hữu tài khoản nhằm thiết lập lại mật khẩu
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
                        Email có thể được sử dụng để thay đổi mật khẩu khi không có công cụ bảo mật nào khác được bật.
                        Cũng như nhận các tin tức hoạt động của tài khoản.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

            <div className='w-[880px] shadow-md p-10 transition-all '>
              <div>
                <div className='font-[600] text-[2rem] '>Thay đổi mật khẩu </div>
                <div className='border-t-[1px] border-solid border-[#ccc] mt-10'></div>
              </div>
              <form>
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
                    onChange={(e) => setFormData((prev) => ({ ...prev, confirmNewPassword: e.target.value }))}
                    value={formData.confirmNewPassword}
                    typeInput={'password'}
                    placeholder='Xác nhận mật khẩu mới'
                  />1
                </div>
              </form>

              <Button changeConfirmPassword> Thay đổi</Button>
            </div>
          </>
          {/* )} */}
        </div>
      </div>
    </div>
  )
}
