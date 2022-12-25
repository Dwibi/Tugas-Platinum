import carDummy from "../assets/images/image 1.png";
import user_logo from "../assets/images/fi_users.png";
import clock from "../assets/images/fi_clock.png";
import trash from "../assets/images/fi_trash-2.png";
import edit from "../assets/images/fi_edit.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../redux/action/fetch_action";
import React, { useState } from "react";
import delete_car from "../assets/images/img-BeepBeep.png";
import { toggleDel } from "../redux/action/toggle_action";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function Card(data) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alertDel = useSelector((state) => state.toggle.alertDel);
  const [id, setId] = useState(null);
  const dataCard = data.data;

  const validasi = (coba) => {
    switch (coba) {
      case "small":
        return "2 - 4 people";
      case "medium":
        return "4 - 6 people";
      case "large":
        return "6 - 8 people";

      default:
        return coba;
    }
  };

  const deleteHandler = (items) => {
    dispatch(toggleDel());
    setId(items.id);
  };

  const yesHandler = () => {
    dispatch(deleteData({ id: id }));
    dispatch(toggleDel());

    navigate("/cars");
  };

  const noHandler = () => {
    dispatch(toggleDel());
  };

  const formatNumeric = (number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
  return (
    <div className="card-wrapper ">
      {dataCard.map((items, index) => {
        return (
          <div className="card-box " key={index}>
            <div className="card-image">
              <img src={items.image == null ? carDummy : items.image} alt="Cars"></img>
            </div>
            <h1 className="mb-3">
              {items.name} / {items.category}
            </h1>
            <p className="mb-3">{formatNumeric(items.price)}</p>
            <div className="d-flex gap-3 align-items-center mb-3">
              <img src={user_logo} width="20px" height="20px"></img>
              <span>{validasi(items.category)}</span>
            </div>
            <div className="d-flex gap-3 align-items-center mb-3">
              <img src={clock} width="20px" height="20px"></img>
              <span>Updated at {moment(items.updatedAt).format("DD MMM yyyy, h.mm a")}</span>
            </div>
            <div className="btn-card d-flex justify-content-between gap-5">
              <button className="btn-delete" onClick={() => deleteHandler(items)}>
                <img src={trash} alt="trash"></img>
                Delete
              </button>
              <button
                className="btn-edit"
                onClick={() => {
                  navigate(`/cars/${items.id}/edit-new-cars`);
                }}
              >
                <img src={edit} alt="edit"></img>
                Edit
              </button>
            </div>
          </div>
        );
      })}
      {alertDel === true && (
        <div className="alert-delete-wrapper">
          <div className="alert-delete-box">
            <img src={delete_car}></img>
            <h1>Menghapus Data Mobil</h1>
            <p>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
            <div className="btn-alert-wrapper d-flex gap-3">
              <button className="btn-yes" onClick={yesHandler}>
                Ya
              </button>
              <button className="btn-no" onClick={noHandler}>
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
