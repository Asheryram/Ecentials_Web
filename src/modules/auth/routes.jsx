import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import ErrorPage from "../../error-page"

export const authRoutes  =[ {
    path: "/",
    element: < SignIn/>,
    errorElement: <ErrorPage />,
  },
 {
    path: "/signup",
    element: < SignUp/>,
   
    errorElement: <ErrorPage />,
  },

]