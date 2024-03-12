import React, { useState } from "react";
import orderData from "./order.json";
import "react-calendar/dist/Calendar.css";

const OrdersCalendarView = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const orders = orderData; // Assuming orderData is an array of order objects

  const handleStartDateChange = (event) => {
    setStartDate(new Date(event.target.value));
  };

  const handleEndDateChange = (event) => {
    setEndDate(new Date(event.target.value));
  };

  // Filter orders for the selected date range
  const ordersForSelectedRange = orders.filter(
    (order) =>
      new Date(order.orderDate) >= startDate &&
      new Date(order.orderDate) <= endDate
  );

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex justify-center">
        <div className="mr-4">
          <h3 className="font-medium">Start Date:</h3>
          <input
            type="date"
            value={startDate.toISOString().split("T")[0]}
            onChange={handleStartDateChange}
            className="border border-gray-300 rounded-lg shadow-lg p-2 bg-white"
          />
        </div>
        <div>
          <h3 className="font-medium">End Date:</h3>
          <input
            type="date"
            value={endDate.toISOString().split("T")[0]}
            onChange={handleEndDateChange}
            className="border border-gray-300 rounded-lg shadow-lg p-2 bg-white"
          />
        </div>
      </div>
      <br />

      <h3 className="font-medium mt-4 flex justify-center items-center">
        Orders from {startDate.toDateString()} to {endDate.toDateString()}:
      </h3>
      {ordersForSelectedRange.length === 0 ? (
        <p className="text-center mt-7 text-gray-600 text-lg font-medium">
          No orders found for this date range.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
          {ordersForSelectedRange.map((order) => (
            <li key={order.id}>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-lg font-semibold mb-2">
                  Order ID: {order.orderId}
                </h4>
                <p className="text-gray-600">Customer: {order.customerName}</p>
                <p className="text-gray-600">Status: {order.status}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
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

export default OrdersCalendarView;
