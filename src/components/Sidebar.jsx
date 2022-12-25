import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../assets/images/Dashboard.png";
import cars from "../assets/images/cars.png";
import { useSelector } from "react-redux";
import { useState } from "react";

function Sidebar() {
  const toggle = useSelector((state) => state.toggle.navbar);

  const [location, setLocation] = useState("/");

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <div className="sidebar-option d-flex flex-column align-items-center justify-content-center ">
            <div className="logo-sidebar"></div>
          </div>

          <Link to="/" className="sidebar-option d-flex flex-column align-items-center justify-content-center" onClick={() => setLocation("/")}>
            <img className="icon-sidebar" src={Dashboard}></img>
            <span>Dashboard</span>
          </Link>

          <Link
            to="/cars"
            className="sidebar-option d-flex flex-column align-items-center justify-content-center"
            onClick={() => setLocation("/cars")}
          >
            <img className="icon-sidebar" src={cars}></img>
            <span>Cars</span>
          </Link>
        </div>

        <div className={toggle ? "sidebar-box" : "sidebar-box sidebar-box-active"}>
          {location === "/" ? (
            <div>
              <h5 className="sidebar-box-title">DASHBOARD</h5>
              <Link to="/" className="link">
                <p className="sidebar-box-list">Dashboard</p>
              </Link>
            </div>
          ) : (
            <div>
              <h5 className="sidebar-box-title">CARS</h5>
              <Link to="/cars" className="link">
                <p className="sidebar-box-list">List Car</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
