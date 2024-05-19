import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import "bootstrap/dist/css/bootstrap.css";

// import Home from "./modules/home/pages/home";
import { pharmacyRoutes } from "./modules/pharmacy/routes";
import { authRoutes } from "./modules/auth/routes";
import PharmacyIndex from "./modules/pharmacy/pages/pharmacyIndex";

const router = createBrowserRouter([
  {
    path : "/",
    errorElement: <ErrorPage />,
    children: authRoutes,
  },
  {
    path : "/pharmacy",
    errorElement: <ErrorPage />,
    element: <PharmacyIndex />,
    children: pharmacyRoutes,
  },
  // {
  //   path : "/hospital",
  //   errorElement: <ErrorPage />,
  //   element: <PharmacyIndex />,
  //   children: pharmacyRoutes,
  // },
  // {
  //   path : "/lab",
  //   errorElement: <ErrorPage />,
  //   element: <PharmacyIndex />,
  //   children: pharmacyRoutes,
  // },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);