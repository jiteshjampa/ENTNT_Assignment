import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import order from "./order.json";

const orderStatusSummary = () => {
  const getStatusSummary = () => {
    const statusCounts = {
      Pending: 0,
      Processing: 0,
      Shipped: 0,
      Delivered: 0,
    };

    order.forEach((order) => {
      statusCounts[order.status]++;
    });

    return statusCounts;
  };
  const statusupdate = getStatusSummary();
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: Object.keys(statusupdate),
    datasets: [
      {
        label: "Order Status",
        data: Object.values(statusupdate),
        backgroundColor: ["orange", "green", "red", "purple"],
        borderColor: ["orange", "green", "red", "purple"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "black",
          font: {
            family: "'Roboto', sans-serif", // Change font family here
          },
          // Change label color here
        },
      },
    },
  };
  console.log(statusupdate);
  return (
    <div className=" flex justify-evenly items-center flex-col w-60 h-60 text-red font-sans font-medium p-18 m-10 ">
      <Pie data={data} options={options} />
      <h2>Order Status Types</h2>
    </div>
  );
};

export default orderStatusSummary;
