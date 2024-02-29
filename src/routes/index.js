import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "../components/SignInPage";
import HomePage from "../components/HomePage";
import OrdersPage from "../components/OrdersPage";
import InventoryPage from "../components/InventoryPage";
import { useSelector } from "react-redux";

export default function Routers() {
  const { token } = useSelector((state) => state.AuthSlice);
  return (
    <BrowserRouter>
      <Routes>
        {!token ? (
          <Route>
            <Route path="/" element={<SignInPage />} />
          </Route>
        ) : (
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
