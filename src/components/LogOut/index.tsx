import { Link, useNavigate } from 'react-router-dom'
import { clearAccessToken } from '../../utils/auth'
import { useContext } from 'react'
import { LoginContext } from '../../App'

export default function LogOut() {
  const navigate = useNavigate()
  const { setProfile, setAuthenticated } = useContext(LoginContext)
  const handleLogout = () => {
    clearAccessToken()
    setProfile(null)
    setAuthenticated(false)
    navigate("/Signin")
  }
  return (
    <div>
      <div className='flex flex-col justify-center items-center  w-[170px] h-[88px]'>
        <Link to='#' className='text-[1.5rem] hover:bg-[#fb4226] py-2 px-4 hover:text-[white] hover:w-[100%]'>
          Thông tin tài khoản{' '}
        </Link>
        <div className='flex items-center gap-4 hover:bg-[#fb4226]  px-4 hover:text-[white] hover:w-[100%] ' onClick={handleLogout}>
          <Link to='#' className='text-[1.5rem] '>
            Đăng xuất
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-8 h-10 '
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
