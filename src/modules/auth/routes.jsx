import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import ErrorPage from "../../error-page"
import ForgotPassword from "./pages/ForgotPassword"

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
 {
    path: "/forgot-password",
    element: < ForgotPassword/>,
    errorElement: <ErrorPage />,
  },

]