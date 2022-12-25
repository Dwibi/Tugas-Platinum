import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import upload_icon from "../assets/images/fi_upload.png";
import arrow from "../assets/images/Vector.png";
import { postData } from "../redux/action/fetch_action";

const AddCar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.navbar);
  const dataPost = useSelector((state) => state.fetchApi.dataPost);
  const [gambar, setGambar] = useState(null);
  const [file, setFile] = useState("");
  const [state, setState] = useState([
    {
      name: "",
      category: "",
      price: "",
      status: false,
      image: null,
    },
  ]);

  useEffect(() => {
    if (dataPost === 201) {
      navigate("/cars");
    }
    return () => {
      dispatch({ type: "RESTART_STATE_ADD" });
    };
  }, [dataPost]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    dispatch(postData({ value: state }));
  };

  const fileUpload = (_) => {
    var file = _.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setFile(_.target.files[0].name);
      setGambar(reader.result);
      setState((prev) => ({
        ...prev,
        image: file,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={toggle ? "main" : "main main-active"}>
      <div className="current-page d-flex align-items-center gap-2 mb-4">
        <Link to="/cars" className="m-0 fw-bold current-page-link">
          Cars
        </Link>
        <img src={arrow} width="4px" height="8px"></img>
        <Link to="/cars" className="m-0 current-page-link fw-bold">
          List Cars
        </Link>
        <img src={arrow} width="4px" height="8px"></img>
        <Link to="/cars" className="m-0 current-page-link ">
          Add New Car
        </Link>
      </div>

      <div className="d-flex justify-content-between w-100 align-items-center mb-3">
        <h1>Add New Car</h1>
      </div>

      <div className="form-wrapper">
        <form className="p-3 d-flex flex-column gap-3">
          <div className="form-list">
            <span>Nama</span>
            <input name="name" placeholder="Input Nama/Tipe Mobil" onChange={changeHandler}></input>
          </div>
          <div className="form-list">
            <span>Harga</span>
            <input name="price" placeholder="Input Harga Sewa Mobil" onChange={changeHandler}></input>
          </div>
          <div className="form-list">
            <span>Foto</span>
            <div className="upload-box">
              <p>{file == "" ? "Upload Foto Mobil" : file}</p>
              <label htmlFor="upload">
                <img src={upload_icon}></img>
              </label>
            </div>
            <input id="upload" type="file" placeholder="coba" onChange={fileUpload}></input>
          </div>
          <div className="form-list">
            <span>Kategori</span>
            <select name="category" onChange={changeHandler} defaultValue="choose">
              <option value="choose">Pilih Kategori Mobil</option>
              <option value="small">2-4 people</option>
              <option value="medium">4-6 people</option>
              <option value="large">6-8 people</option>
            </select>
          </div>
          <div className="form-list">
            <span>Created at</span>
            <span>-</span>
          </div>
          <div className="form-list">
            <span>Updated at</span>
            <span>-</span>
          </div>
        </form>

        <div className="img-preview">{gambar !== null && <img src={gambar}></img>}</div>
      </div>

      <div className="btn-add-wrapper">
        <button className="btn-cancel" onClick={() => navigate("/cars")}>
          Cancel
        </button>
        <button className="btn-save" onClick={() => handleSubmit()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCar;
