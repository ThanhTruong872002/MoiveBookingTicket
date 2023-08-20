import React, { useState } from 'react'
import { IUser } from './@types/User'
import './App.css'
import useRouterElement from './routes/useRouterElement'
import { getAccessTokenFromLS, getProfileFromLS } from './utils/auth'

type FormData = {
  username: string
  password: string
  fullname: string
  email: string
  phonenumber: string
  // maNhom: string,
  // maLoaiNguoiDung:string
}
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
  fullNameLogin: any
  setFullNameLogin: React.Dispatch<React.SetStateAction<any>>
  profile: IUser | null
  setProfile: React.Dispatch<React.SetStateAction<IUser | null>>
}

const initialAppContext: LoginContextType = {
  authenticated: Boolean(getAccessTokenFromLS()),
  setAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  formData: initFormData,
  fullNameLogin: '',
  setFullNameLogin: () => null,
  setFormData: () => null
}
export const LoginContext = React.createContext<LoginContextType>(initialAppContext)

function App() {
  const routerElement = useRouterElement()

  const [authenticated, setAuthenticated] = useState(initialAppContext.authenticated)

  const [fullNameLogin, setFullNameLogin] = useState({})

  const [profile, setProfile] = useState<IUser | null>(initialAppContext.profile)

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullname: '',
    email: '',
    phonenumber: ''
  })
  console.log("🚀 ~ file: App.tsx:44 ~ initialAppContext: LoginContextType.authenticated:", authenticated)

  return (
    <LoginContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        formData,
        setFormData,
        fullNameLogin,
        setFullNameLogin,
        profile,
        setProfile
      }}
    >
      <div>{routerElement}</div>
    </LoginContext.Provider>
  )
}

export default App
