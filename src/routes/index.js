import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "../components/SignInPage";
import HomePage from "../components/HomePage";
import OrdersPage from "../components/OrdersPage";
import { useSelector } from "react-redux";
import "../App.css";
import ChangePasswordPage from "../components/ChangePasswordPage";
import UpdatedOrdersPage from "../components/UpdatedOrdersPage";

export default function Routers() {
  const { token } = useSelector((state) => state.AuthSlice);
  return (
    <div className="App">
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
              <Route path="/changepassword" element={<ChangePasswordPage />} />
              <Route path="/update" element={<UpdatedOrdersPage />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
