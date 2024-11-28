import { ReactNode } from "react";
import DashboardPage from "../pages/Dashboard";

// Update the type to represent an array of routes
export type RouteNoRestrictT = {
  path: string;
  component: ReactNode;
  key:string;
}[];

const DASHBOARD_ROUTES: RouteNoRestrictT = [
  {
    path: "/",
    component: <DashboardPage />,
    key:'dashboards'
  },
];

export { DASHBOARD_ROUTES };
