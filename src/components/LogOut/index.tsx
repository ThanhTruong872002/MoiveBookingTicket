import { Link, useNavigate } from 'react-router-dom'
import { clearAccessToken } from '../../utils/auth'
import { useContext } from 'react'
import { LoginContext } from '../../App'
import { LogOutIcon } from '../Common/Icons'

export default function LogOut() {
  const navigate = useNavigate()
  const { setProfile, setAuthenticated, profile } = useContext(LoginContext)
  const handleLogout = () => {
    clearAccessToken()
    setProfile(null)
    setAuthenticated(false)
    navigate('/Signin')
  }
  return (
    <div className='flex flex-col items-center w-[170px] h-[88px] z-[100]'>
      {profile?.maLoaiNguoiDung === 'KhachHang' && (
        <Link
          to='/profile'
          className='w-full h-[50%] rounded-[5px] flex justify-center items-center text-[1.5rem] hover:bg-[#fb4226] py-2 px-2 hover:text-[white]'
          style={{ textDecoration: 'none' }}
        >
          Thông tin tài khoản{' '}
        </Link>
      )}

      {profile?.maLoaiNguoiDung === 'QuanTri' && (
        <Link
          to='/admin'
          className='w-full h-[50%] rounded-[5px] flex justify-center items-center text-[1.5rem] hover:bg-[#fb4226] py-2 px-2 hover:text-[white]'
          style={{ textDecoration: 'none' }}
        >
          {' '}
          Quản lý
        </Link>
      )}

      <div
        className='w-full h-[50%] rounded-[5px] flex justify-center items-center gap-4 hover:bg-[#fb4226]  px-4 hover:text-[white]'
        onClick={handleLogout}
      >
        Đăng xuất
        <LogOutIcon />
      </div>
    </div>
  )
}
