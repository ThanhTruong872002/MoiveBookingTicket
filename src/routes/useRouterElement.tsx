import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import { useContext } from 'react'
import { LoginContext } from '../App'
import Details from '../pages/Details'
import Checkout from '../pages/Checkout'
import Profile from '../pages/Profile'
import Admin from '../pages/Admin'

function ProtectedRouter() {
  const { authenticated } = useContext(LoginContext)

  return authenticated ? <Outlet /> : <Navigate to='/login' />
}
function RejectedRoute() {
  const { authenticated } = useContext(LoginContext)
  return !authenticated ? <Outlet /> : <Navigate to='/' />
}

function AdminRoute() {
  const { profile } = useContext(LoginContext)
  if (profile?.maLoaiNguoiDung === 'QuanTri') {
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
}

export default function useRouterElement() {
  const routerElemnts = useRoutes([
    {
      path: '',
      element: <Home />
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/signIn',
          element: <SignIn />
        }
      ]
    },
    {
      path: '/detail/:id',
      element: <Details />
    },
    {
      path: '/checkout/:id',
      element: <Checkout />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '',
      element: <AdminRoute />,
      children: [
        {
          path: '/admin',
          element: <Admin />
        }
      ]
    }
  ])
  return routerElemnts
}
