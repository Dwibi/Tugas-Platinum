import React from "react";
import fl_menu from "../assets/images/fi_menu.png";
import logo_profile from "../assets/images/Group 15.png";
import dropdown from "../assets/images/dropdown.png";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/action/toggle_action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { login } = useSelector((state) => state.loginData);
  const [logOut, setLogOut] = useState(false);

  const clickHandler = () => {
    setLogOut(!logOut);
  };

  const clickLogOut = () => {
    navigate("/");
    dispatch({ type: "LOG_OUT" });
    localStorage.removeItem("access_token");
  };

  const toggleBtn = () => [dispatch(toggle())];

  return (
    <nav className="nav d-flex justify-content-between p-3 ">
      <div className="nav-option">
        <div className="logo-nav"></div>
        <img src={fl_menu} alt="ehe" width="24px" height="24px" onClick={toggleBtn}></img>
      </div>
      <div className="nav-option">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-primary me-5" type="submit">
            Search
          </button>
        </form>
        <div className="d-flex align-items-center gap-3" onClick={clickHandler} role="button">
          <img src={logo_profile} alt="profile"></img>
          <p className="fs-6 m-0">Unis Badri</p>
          <img src={dropdown} alt="dropdown" />
        </div>
      </div>

      {logOut === true && (
        <div className="dropdown-logout">
          <button type="button" className="btn btn-danger" onClick={clickLogOut}>
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
