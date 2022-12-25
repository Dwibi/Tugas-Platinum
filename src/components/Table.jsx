import React, { useState, useEffect } from "react";
import sort from "../assets/images/fi_sort.png";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getDataTable } from "../redux/action/dashboard_fetch";
import loader from "../assets/images/loader.svg";

function TableListOrder() {
  const dispatch = useDispatch();
  const jumpToPage = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const { dataTable } = useSelector((state) => state.dashboardData);
  const { tableLoad } = useSelector((state) => state.dashboardData);

  const [sortEmail, setSortEmail] = useState(true);
  const [sortCar, setSortCar] = useState(true);
  const [sortStartRent, setSortStartRent] = useState(true);
  const [sortFinishRent, setSortFinisRent] = useState(true);
  const [sortPrice, setSortPrice] = useState(true);
  const [sortCategory, setSortCategory] = useState(true);
  const [sortData, setSortData] = useState("created_at:asc");

  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState("1");

  useEffect(() => {
    dispatch(getDataTable({ sort: sortData, page: parseInt(page), pageSize: parseInt(limit) }));
  }, [sortData, limit, page]);

  const sortEmailClick = () => {
    sortEmail === true ? setSortData("user_email:asc") : setSortData("user_email:desc");
    setSortEmail(!sortEmail);
  };

  const sortCarClick = () => {
    sortCar === true ? setSortData("car_name:asc") : setSortData("car_name:desc");
    setSortCar(!sortCar);
  };

  const sortStartRentClick = () => {
    sortStartRent === true ? setSortData("start_rent_at:asc") : setSortData("start_rent_at:desc");
    setSortStartRent(!sortStartRent);
  };

  const sortFinishRentClick = () => {
    sortFinishRent === true ? setSortData("finish_rent_at:asc") : setSortData("finish_rent_at:desc");
    setSortFinisRent(!sortFinishRent);
  };

  const sortPriceClick = () => {
    sortPrice === true ? setSortData("price:asc") : setSortData("price:desc");
    setSortPrice(!sortPrice);
  };

  const sortCategoryClick = () => {
    sortCategory === true ? setSortData("category:asc") : setSortData("category:desc");
    setSortCategory(!sortCategory);
  };

  const changeLimit = (e) => {
    const { value } = e.target;
    setLimit(value);
  };

  const changePage = (e) => {
    const { value } = e.target;
    setPage(value);
  };

  const formatNumeric = (number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);

  return (
    <div>
      {tableLoad === false ? (
        <table className="table">
          <thead className="table-head">
            <tr>
              <th className="th-no">No</th>
              <th className="th-email" onClick={sortEmailClick}>
                User Email<img src={sort} alt="sort"></img>
              </th>
              <th className="th-other" onClick={sortCarClick}>
                Car<img src={sort} alt="sort"></img>
              </th>
              <th className="th-other" onClick={sortStartRentClick}>
                Start Rent<img src={sort} alt="sort"></img>
              </th>
              <th className="th-other" onClick={sortFinishRentClick}>
                Finish Rent<img src={sort} alt="sort"></img>
              </th>
              <th className="th-other" onClick={sortPriceClick}>
                Price<img src={sort} alt="sort"></img>
              </th>
              <th className="th-other" onClick={sortCategoryClick}>
                Category<img src={sort} alt="sort"></img>
              </th>
            </tr>
          </thead>

          {dataTable.map((items, key) => {
            return (
              <tbody key={key} className="table-body">
                <tr>
                  <td className="text-center">{items.id}</td>
                  <td>{items.User.email}</td>
                  <td>{items.Car === null ? "Innova" : items.Car.name}</td>
                  <td>{moment(items.start_rent_at).format("DD MMM yyyy, h.mm a")}</td>
                  <td>{moment(items.finish_rent_at).format("DD MMM yyyy, h.mm a")}</td>
                  <td>{formatNumeric(items.total_price)}</td>
                  <td>2-4 orang</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <div className="d-flex jusitfy-content-center">
          <img src={loader} alt="load" className="mx-auto"></img>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-end mb-3 mt-3">
        <div className="d-flex gap-5">
          <div>
            <p className="table-dropdown-title">Limit</p>
            <select defaultValue="choose" onChange={changeLimit} className="table-dropdown">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>
            <p className="table-dropdown-title">Jump to Page</p>
            <select defaultValue="1" onChange={changePage} className="table-dropdown">
              {jumpToPage.map((items, key) => {
                return (
                  <option key={key} value={items}>
                    {items}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="d-flex gap-1">
          {jumpToPage.map((items, key) => {
            return (
              <div key={key} className={page === items ? "table-page-active" : "table-page"} onClick={() => setPage(items)}>
                <p className="m-0">{items}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TableListOrder;
