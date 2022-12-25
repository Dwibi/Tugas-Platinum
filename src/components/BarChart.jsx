import React from "react";
import { Bar, Chart } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";
import loader from "../assets/images/loader.svg";

function BarChart() {
  const { barChart } = useSelector((state) => state.dashboardData);
  const { chartLoad } = useSelector((state) => state.dashboardData);
  return (
    <div className="chart-wrapper" id={Chart}>
      {chartLoad === false ? (
        <Bar
          data={{
            labels: barChart.map((item) => item.day.substring(8, item.day.length)),
            datasets: [
              {
                label: `Order`,
                data: barChart.map((item) => item.orderCount),
                backgroundColor: ["#586B90"],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 30,
                },
              },
            },
          }}
        />
      ) : (
        <div className="d-flex jusitfy-content-center">
          <img src={loader} alt="load" className="mx-auto"></img>
        </div>
      )}
    </div>
  );
}

export default BarChart;
