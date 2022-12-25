import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import upload_icon from "../assets/images/fi_upload.png";
import arrow from "../assets/images/Vector.png";
import { putData } from "../redux/action/fetch_action";
import { requestListCarById } from "../redux/action/fetch_action";

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.navbar);
  const { formState } = useSelector((state) => state.fetchApi);
  const { changeApi } = useSelector((state) => state.fetchApi);
  const [isForm, setForm] = useState(formState);
  const [file, setFile] = useState(null);
  const [gambar, setGambar] = useState(null);
  const [isEditImage, setImageEdit] = useState(false);

  useEffect(() => {
    id && dispatch(requestListCarById(id));
    return () => {
      dispatch({ type: "RESTART_STATE" });
    };
  }, [id, dispatch]);

  useEffect(() => {
    setForm(formState);
  }, [formState]);

  useEffect(() => {
    if (changeApi !== null) {
      navigate("/cars");
    }
    return () => {
      dispatch({ type: "RESET_UPDATE_API" });
    };
  }, [changeApi]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (_) => {
    _.preventDefault();
    if (!isEditImage) {
      delete isForm.image;
    }
    dispatch(putData({ value: isForm, id: id }));
  };

  const fileUpload = (_) => {
    var file = _.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setFile(_.target.files[0].name);
      setGambar(reader.result);
      setImageEdit(true);
      setForm((prev) => ({
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
        <img alt="aphabet-paint" src={arrow} width="4px" height="8px"></img>
        <Link to="/cars" className="m-0 current-page-link fw-bold">
          List Cars
        </Link>
        <img alt="aphabet-paint" src={arrow} width="4px" height="8px"></img>
        <Link to="/cars" className="m-0 current-page-link ">
          Add New Car
        </Link>
      </div>

      <div className="d-flex justify-content-between w-100 align-items-center mb-3">
        <h1>Edit Car</h1>
      </div>

      <div className="form-wrapper">
        <form className="p-3 d-flex flex-column gap-3">
          <div className="form-list">
            <span>Nama</span>
            <input name="name" placeholder="Input Nama/Tipe Mobil" onChange={changeHandler} defaultValue={formState.name}></input>
          </div>
          <div className="form-list">
            <span>Harga</span>
            <input name="price" placeholder="Input Harga Sewa Mobil" onChange={changeHandler} defaultValue={formState.price}></input>
          </div>
          <div className="form-list">
            <span>Foto</span>
            <div className="upload-box">
              <p>{file === null ? formState.image : file}</p>
              <label htmlFor="upload">
                <img alt="aphabet-paint" src={upload_icon}></img>
              </label>
            </div>
            <input id="upload" type="file" placeholder="coba" onChange={fileUpload}></input>
          </div>
          <div className="form-list">
            <span>Kategori</span>
            <select name="category" onChange={changeHandler} defaultValue={formState.category}>
              <option disabled>Pilih Kategori Mobil</option>
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

        <div className="img-preview">
          {gambar === null ? <img alt="aphabet-paint" src={formState.image}></img> : <img alt="aphabet-paint" src={gambar}></img>}
        </div>
      </div>

      <div className="btn-add-wrapper">
        <button className="btn-cancel">Cancel</button>
        <button className="btn-save" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditCar;
