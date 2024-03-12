import React, { useState } from "react";

const OrderModel = ({ order, onSave, onClose }) => {
  const [editedOrder, setEditedOrder] = useState(order);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedOrder);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Order</h2>
        <input
          type="text"
          name="orderId"
          value={editedOrder.orderId}
          //onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          readOnly
          placeholder="Order ID"
        />
        <input
          type="text"
          name="customerName"
          value={editedOrder.customerName}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Customer Name"
        />
        <input
          type="date"
          name="orderDate"
          value={editedOrder.orderDate}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Order Date"
        />

        <select
          name="status"
          value={editedOrder.status}
          onChange={handleChange}
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Category</option>
          <option value="Shipped">Shipped</option>
          <option value="Processing">Processing</option>
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
        </select>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 ml-4 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModel;
