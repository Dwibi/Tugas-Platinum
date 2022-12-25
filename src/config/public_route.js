import { useRoutes } from "react-router-dom";
import React from "react";

import Login from "../page/Login";

const publicRouterSource = (props) => [
  { index: true, path: "/", element: <Login {...props} title="Dashboard" /> },
  { index: true, path: "/*", element: <>ERROR</> },
];

const PublicRoutes = (props) => {
  const routers = publicRouterSource(props);
  let routes = useRoutes(routers);
  return routes;
};

export default PublicRoutes;
