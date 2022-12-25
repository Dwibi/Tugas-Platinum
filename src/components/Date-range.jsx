import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";
import dropdown from "../assets/images/dropdown.png";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch } from "react-redux";

import { BarChartData } from "../redux/action/dashboard_fetch";

const DateRangeComp = () => {
  const dispatch = useDispatch();

  const [range, setRange] = useState([
    {
      startDate: new Date("2022-01-01"),
      endDate: addDays(new Date("2022-01-01"), 30),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);

  const formatDate = (date) => format(date, "yyyy-MM-dd");

  useEffect(() => {
    dispatch(BarChartData({ from: formatDate(range[0].startDate), until: formatDate(range[0].endDate) }));
  }, []);

  const clickHandler = () => {
    setOpen((open) => !open);
    dispatch(BarChartData({ from: formatDate(range[0].startDate), until: formatDate(range[0].endDate) }));
  };

  return (
    <div>
      <div className="d-flex">
        <div className="date-bar" onClick={() => setOpen((open) => !open)}>
          <p>{`${format(range[0].startDate, "dd MMM yyyy")} To ${format(range[0].endDate, "dd MMM yyyy")}`}</p>
          <img src={dropdown} alt="dropdown" />
        </div>
        <button className="btn-dashboard" onClick={() => clickHandler()}>
          GO
        </button>
      </div>

      {open === true && (
        <div className="date-range">
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        </div>
      )}
    </div>
  );
};

export default DateRangeComp;
