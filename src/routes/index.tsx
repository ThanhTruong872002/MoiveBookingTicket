import { useContext } from 'react'
import { LoginContext } from '../App'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRouter() {
  const { authenticated } = useContext(LoginContext)!

  return authenticated ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRouter
