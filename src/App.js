import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./config/router";
import PublicRoutes from "./config/public_route";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function App(props) {
  const { login } = useSelector((state) => state.loginData);
  const [coba, setCoba] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("access_token");
    setCoba(isLoggedIn);
  }, [login]);

  return (
    <div className="App">
      {!coba && <PublicRoutes {...props} />}
      {coba && (
        <>
          <Navbar />
          <Sidebar />
          <AppRoutes {...props} />
        </>
      )}
    </div>
  );
}

export default App;
