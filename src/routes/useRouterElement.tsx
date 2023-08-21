import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import { useContext } from 'react'
import { LoginContext } from '../App'
import Details from '../pages/Details'
// interface RouteObject {
//   path?: string;
//   index?: boolean;
//   children?: React.ReactNode;
//   caseSensitive?: boolean;
//   id?: string;
//   element?: React.ReactNode | null;
//   Component?: React.ComponentType | null;
//   errorElement?: React.ReactNode | null;
//   ErrorBoundary?: React.ComponentType | null;
// }
function ProtectedRouter() {
  const { authenticated } = useContext(LoginContext)

  return authenticated ? <Outlet /> : <Navigate to='/login' />
}
function RejectedRoute() {
  const { authenticated } = useContext(LoginContext)
  return !authenticated ? <Outlet /> : <Navigate to='/' />
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
          path: '/SignIn',
          element: <SignIn />
        }
      ]
    },
    {
      path: '/detail/:id',
      element: <Details/>
    }
  ])
  return routerElemnts
}
