import "./index.css";
import Dashboard from "./components/dashboard";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Orders from "./components/OrderPage";
import NavBar from "./components/NavBar";
import OrdersCalendarView from "./components/OrdersCalenderView";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-slate-200">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/Products" element={<ProductPage />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/OrdersCalenderView" element={<OrdersCalendarView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
