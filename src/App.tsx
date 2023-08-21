import React, { useState } from 'react'
import { IUser } from './@types/User'
import './App.css'
import useRouterElement from './routes/useRouterElement'
import { getAccessTokenFromLS, getProfileFromLS } from './utils/auth'
import { any } from 'prop-types'
import { FilmItem } from './@types/Film'

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
type LoginContextType = {
  authenticated: boolean
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  profile: IUser | null
  setProfile: React.Dispatch<React.SetStateAction<IUser | null>>
  filmData: FilmItem[]
  setFilmData: React.Dispatch<React.SetStateAction<FilmItem[]>>
}

const initialAppContext: LoginContextType = {
  authenticated: Boolean(getAccessTokenFromLS()),
  setAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  formData: initFormData,
  setFormData: () => null,
  filmData: initFilmData,
  setFilmData: () => null
}
export const LoginContext = React.createContext<LoginContextType>(initialAppContext)

function App() {
  const routerElement = useRouterElement()

  const [authenticated, setAuthenticated] = useState(initialAppContext.authenticated)

  const [profile, setProfile] = useState<IUser | null>(initialAppContext.profile)

  const [filmData, setFilmData] = useState<FilmItem[]>(initialAppContext.filmData)


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
        setFilmData
      }}
    >
      <div>{routerElement}</div>
    </LoginContext.Provider>
  )
}

export default App
