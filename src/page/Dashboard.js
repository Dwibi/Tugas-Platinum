import React from "react";
import { useSelector } from "react-redux";
import BarChart from "../components/BarChart";
import { Link } from "react-router-dom";
import arrow from "../assets/images/Vector.png";
import DateRangeComp from "../components/Date-range";
import TableListOrder from "../components/Table";

const Dashboard = () => {
  const toggle = useSelector((state) => state.toggle.navbar);

  return (
    <div className={toggle ? "main" : "main main-active"}>
      <div className="current-page d-flex align-items-center gap-2 mb-4">
        <Link to="/" className="m-0 fw-bold current-page-link">
          Dashboard
        </Link>
        <img src={arrow} width="4px" height="8px"></img>
        <Link to="/cars" className="m-0 current-page-link">
          Dashboard
        </Link>
      </div>

      <div className=" mb-5">
        <div className="d-flex gap-2 ">
          <div className="marker"></div>
          <h1 className="dashboard-title">Rented Car Data Visualization</h1>
        </div>
        <h4 className="chart-month">Month</h4>
        <DateRangeComp />
        <BarChart />
      </div>

      <div>
        <h3 className="dashboard">Dashboard</h3>

        <div className="d-flex gap-2 mb-3">
          <div className="marker"></div>
          <h1 className="dashboard-title">Rented Car Data Visualization</h1>
        </div>
        <TableListOrder />
      </div>
    </div>
  );
};

export default Dashboard;
