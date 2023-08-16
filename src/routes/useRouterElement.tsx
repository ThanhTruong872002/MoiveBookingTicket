import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/Signin";
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
export default function useRouterElement() {
  const routerElemnts = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/SignIn",
      element: <SignIn />,
    },
  ]);
  return routerElemnts;
}
