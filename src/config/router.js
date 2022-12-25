import { useRoutes } from "react-router-dom";
import AddCar from "../page/AddCar";
import Car from "../page/Car";
import Dashboard from "../page/Dashboard";
import EditCar from "../page/EditCar";
import React from "react";

const routerSource = (props) => [
  { index: true, path: "/", element: <Dashboard {...props} title="Dashboard" /> },
  { index: true, path: "/cars", element: <Car {...props} title="Car" /> },
  { index: true, path: "/cars/add-new-car", element: <AddCar {...props} title="Add-New-Car" /> },
  { index: true, path: "/cars/:id/edit-new-cars", element: <EditCar {...props} title="Add-New-Car" /> },
  { index: true, path: "/*", element: <>ERROR</> },
];

const AppRoutes = (props) => {
  const routers = routerSource(props);
  let routes = useRoutes(routers);
  return routes;
};

export default AppRoutes;
