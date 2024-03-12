import React from "react";
import products from "./product.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
const TopFiveProducts = () => {
  // Sort products by stock quantity in descending order
  const sortedProducts = products.sort(
    (a, b) => b.stockQuantity - a.stockQuantity
  );

  // Select the top five products
  const topFiveProducts = sortedProducts.slice(0, 5);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: topFiveProducts.map((product) => product.name),
    datasets: [
      {
        label: "Order Status",
        data: topFiveProducts.map((product) => product.stockQuantity),
        backgroundColor: ["orange", "green", "red", "purple", "blue"],
        borderColor: ["orange", "green", "red", "purple", "blue"],
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

  return (
    <div className=" flex justify-center items-center flex-col w-60 h-60 text-red font-sans font-medium p-18 m-10 ">
      <Pie data={data} options={options} />
      <h2>Top Five Products</h2>
    </div>
  );
};

export default TopFiveProducts;
