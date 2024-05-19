
import ProtectedDashboard from "./pages/dashboard/protectedDashboard";
import { pharmacydashboardRoutes } from "./pages/dashboard/routes";

export const pharmacyRoutes =[
  {
    path : "dashboard",
    element: <ProtectedDashboard/>,
    children: pharmacydashboardRoutes
  }
]

