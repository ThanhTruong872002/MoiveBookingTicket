import { Link, useNavigate } from 'react-router-dom'
import { clearAccessToken } from '../../utils/auth'
import { useContext } from 'react'
import { LoginContext } from '../../App'
import { LogOutIcon } from '../Common/Icons'

export default function LogOut() {
  const navigate = useNavigate()
  const { setProfile, setAuthenticated } = useContext(LoginContext)
  const handleLogout = () => {
    clearAccessToken()
    setProfile(null)
    setAuthenticated(false)
    navigate('/Signin')
  }
  return (
    <div>
      <div className='flex flex-col  items-center  w-[170px] h-[88px]'>
        <Link
          to='#'
          className='h-[50%] flex items-center text-[1.5rem] hover:bg-[#fb4226] py-2 px-2 hover:text-[white] hover:w-[100%]'
        >
          Thông tin tài khoản{' '}
        </Link>
        <div
          className='mt-2 h-[50%] flex items-center gap-4 hover:bg-[#fb4226]  px-4 hover:text-[white] hover:w-[100%]'
          onClick={handleLogout}
        >
          <Link to='#' className='text-[1.5rem] '>
            Đăng xuất
          </Link>
         <LogOutIcon/>
        </div>
      </div>
    </div>
  )
}
