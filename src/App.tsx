import React, { useState } from 'react'
import { IUser } from './@types/User'
import './App.css'
import useRouterElement from './routes/useRouterElement'
import { getAccessTokenFromLS, getProfileFromLS } from './utils/auth'
import { any } from 'prop-types'
import { FilmItem } from './@types/Film'
import { Cinema } from './@types/Cinema'

type FormData = {
  username: string
  password: string
  fullname: string
  email: string
  phonenumber: string
}

const initFilmData: FilmItem[] = [
{
  maPhim: "",
  tenPhim: "",
  biDanh: "",
  trailer: null,
  hinhAnh: null,
  moTa: "",
  maNhom: "",
  ngayKhoiChieu: null,
  danhGia: null,
  hot: null,
  dangchieu: any,
  sapchieu: any
}
]

const initFormData = {
  username: '',
  password: '',
  fullname: '',
  email: '',
  phonenumber: ''
}

 export const initialCinemas: Cinema[] = [
   {
     lstCumRap: [
       {
         danhSachPhim: [],
         maCumRap: 'bhd-star-cineplex-3-2',
         tenCumRap: 'BHD Star Cineplex - 3/2',
         diaChi: 'L5-Vincom 3/2, 3C Đường 3/2, Q.10'
       }
     ],
     maHeThongRap: 'BHDStar',
     tenHeThongRap: 'BHD Star Cineplex',
     logo: 'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png',
     mahom: 'GP01'
   }
 ]


type LoginContextType = {
  authenticated: boolean
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  profile: IUser | null
  setProfile: React.Dispatch<React.SetStateAction<IUser | null>>
  filmData: FilmItem[]
  setFilmData: React.Dispatch<React.SetStateAction<FilmItem[]>>
  codeRoom: Cinema[]
  setCodeRoom: React.Dispatch<React.SetStateAction<Cinema[]>>
}

const initialAppContext: LoginContextType = {
  authenticated: Boolean(getAccessTokenFromLS()),
  setAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  formData: initFormData,
  setFormData: () => null,
  filmData: initFilmData,
  setFilmData: () => null,
  codeRoom: initialCinemas,
  setCodeRoom: () => null
}
export const LoginContext = React.createContext<LoginContextType>(initialAppContext)

function App() {
  const routerElement = useRouterElement()

  const [authenticated, setAuthenticated] = useState(initialAppContext.authenticated)

  const [profile, setProfile] = useState<IUser | null>(initialAppContext.profile)

  const [filmData, setFilmData] = useState<FilmItem[]>(initialAppContext.filmData)

  const [codeRoom, setCodeRoom] = useState<Cinema[]>(initialCinemas)

  

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullname: '',
    email: '',
    phonenumber: ''
  })
  


  return (
    <LoginContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        formData,
        setFormData,
        profile,
        setProfile,
        filmData,
        setFilmData,
        codeRoom,
        setCodeRoom
      }}
    >
      <div>{routerElement}</div>
    </LoginContext.Provider>
  )
}

export default App
