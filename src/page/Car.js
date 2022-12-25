import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import { getData } from "../redux/action/fetch_action";
import arrow from "../assets/images/Vector.png";
import plus from "../assets/images/fi_plus.png";
import loader from "../assets/images/loader.svg";

const Car = () => {
  const navigate = useNavigate();
  const toggle = useSelector((state) => state.toggle.navbar);
  const deleteApi = useSelector((state) => state.fetchApi.deleteApi);
  const { data, loadGet } = useSelector((state) => state.fetchApi);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getData({ category: category }));
  }, [category, dispatch, deleteApi]);

  return (
    <div className={toggle ? "main" : "main main-active"}>
      <div className="current-page d-flex align-items-center gap-2 mb-4">
        <Link to="/cars" className="m-0 fw-bold current-page-link">
          Cars
        </Link>
        <img src={arrow} width="4px" height="8px" alt="logo"></img>
        <Link to="/cars" className="m-0 current-page-link">
          List Cars
        </Link>
      </div>

      <div className="d-flex justify-content-between w-100 align-items-center mb-3">
        <h1>List Car</h1>
        <button className="button-new" onClick={() => navigate("/cars/add-new-car")}>
          <img src={plus} alt="logo"></img> Add New Car
        </button>
      </div>

      <div className="btn-wrapper mb-3">
        <button className={category === "" ? "btn-selected" : "btn-list-car"} onClick={() => setCategory("")}>
          All
        </button>
        <button className={category === "small" ? "btn-selected" : "btn-list-car"} onClick={() => setCategory("small")}>
          Small
        </button>
        <button className={category === "medium" ? "btn-selected" : "btn-list-car"} onClick={() => setCategory("medium")}>
          Medium
        </button>
        <button className={category === "large" ? "btn-selected" : "btn-list-car"} onClick={() => setCategory("large")}>
          Large
        </button>
      </div>
      {loadGet === true ? (
        <div className="d-flex justify-content-center ">
          <img src={loader}></img>
        </div>
      ) : (
        <Card data={data} />
      )}
    </div>
  );
};

export default Car;
