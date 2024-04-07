import React from "react";
import About from "./About";
import OrderStatusSummary from "./orderStatusSummary";
import order from "./order.json";
import products from "./product.json";
import TopFiveProducts from "./TopFiveProducts";

const Dashboard = () => {
  // Function to calculate total revenue generated from products data
  const calculateTotalRevenue = () => {
    // Calculate total revenue by multiplying each product's price by its stock quantity
    const totalRevenue = products.reduce(
      (total, product) => total + product.price * product.stockQuantity,
      0
    );

    return totalRevenue;
  };

  // Call the function to calculate total revenue generated from products data
  const totalRevenue = calculateTotalRevenue();

  const totalorder = order.length;
  const totalproduct = products.length;

  const calculateTotalPendingOrders = () => {
    return order.filter((order) => order.status === "Pending").length;
  };

  const totalpending = calculateTotalPendingOrders();

  return (
    <div id="about1" className=" overflow-x-hidden">
      <About />
      <div>
        <div className="flex flex-wrap justify-evenly">
          <div className="bg-white flex w-full md:w-52 p-6 rounded-lg justify-evenly m-6">
            <img
              className="w-10"
              src="./dollar-symbol.png"
              alt="Total Revenue"
            />
            <div>
              <h2 className="font-sans font-medium">Total Revenue</h2>
              <div>{totalRevenue}</div>
            </div>
          </div>
          <div className="bg-white flex w-full md:w-52 p-6 rounded-lg justify-evenly m-6">
            <img className="w-10" src="./add-to-cart.png" alt="Total Orders" />
            <div>
              <h2 className="font-sans font-medium">Total Orders</h2>
              <div>{totalorder}</div>
            </div>
          </div>
          <div className="bg-white flex w-full md:w-52 p-6 rounded-lg justify-evenly m-6">
            <img
              className="w-10"
              src="./new-product.png"
              alt="Total Products"
            />
            <div>
              <h2 className="font-sans font-medium">Total Products</h2>
              <div>{totalproduct}</div>
            </div>
          </div>
          <div className="bg-white flex w-full md:w-52 p-6 rounded-lg justify-evenly m-6">
            <img
              className="w-10"
              src="./shopping-cart.png"
              alt="Total Pending"
            />
            <div>
              <h2 className="font-sans font-medium">Total Pending</h2>
              <div>{totalpending}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly items-center m-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-68 h-82 bg-white p-7 flex justify-center items-center rounded-lg m-5">
              <OrderStatusSummary />
            </div>
            <div className="w-full md:w-68 h-82 bg-white p-7 flex justify-center items-center rounded-lg m-5">
              <TopFiveProducts />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex">
            <p>&copy; 2024 Your Company &#8226;</p>
            <p>All rights reserved.</p>
          </div>
          <div>
            <div className="text-gray-300 hover:text-white mr-4">About Us</div>
            <div className="text-gray-300 hover:text-white">Privacy Policy</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
