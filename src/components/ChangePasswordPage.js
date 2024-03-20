import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const ChangePasswordPage = () => {
  // const token = useSelector((state) => state.AuthSlice.token);
  // const [inventoryData, setInventoryData] = useState([]);

  // useEffect(() => {
  //   const fetchUserInventory = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/getinvetory", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token": `Bearer ${token}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch orders");
  //       }

  //       const data = await response.json();
  //       setInventoryData(data);
  //     } catch (error) {
  //       console.error("Error fetching orders:", error);
  //     }
  //   };

  //   fetchUserInventory();
  // }, [token]);

  return (
    <>
      <Navbar />
      <div
        className="main-content-wrap not-found-wrap text-center sidenav-open"
        style={{
          backgroundImage: `url(${require("../assets/images/page-bg-bottom.ec613ada298590517b55.png")})`,
        }}
      >
        <div className="main-content ">
          <div className="row m-0">
            <div className="breadcrumb col-12">
              <ul>
                <li>
                  <Link to="/">
                    <i className="nav-icon i-Home-4"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="/changepassword">Change Password</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="separator-breadcrumb mb-3 border-top"></div>
          <div className="row m-0 ">
            <div className="col-md-12 p-0">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="col-md-12 p-0 mt-lg-2 ">
                    <div className="card-body">
                      <div className="col-md-4 col-sm-8 m-auto  ">
                        <div className="card o-hidden">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="p-4">
                                <h1 className="mb-3 text-18">Change Password</h1>
                                <form>
                                  <div className="form-group">
                                    <label htmlFor="email">Username</label>
                                    <input
                                      id="username"
                                      className="form-control form-control-rounded"
                                      type="text"
                                      value="Aquib.Rider"
                                      readonly=""
                                    />
                                    <input
                                      id="user_id"
                                      className="form-control form-control-rounded"
                                      type="hidden"
                                      value="851"
                                      readonly=""
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="email">Current Password</label>
                                    <input
                                      id="old_password"
                                      className="form-control form-control-rounded"
                                      type="password"
                                      value=""
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="password">New Password</label>
                                    <input
                                      id="new_password"
                                      className="form-control form-control-rounded"
                                      type="password"
                                      value=""
                                    />
                                  </div>
                                  <button
                                    id="changePassword"
                                    type="button"
                                    className="btn btn-rounded btn-primary btn-block mt-2"
                                  >
                                    Change Password
                                  </button>
                                </form>

                                <div className="mt-3 text-center"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* Footer Component Start */}
        <Footer />
        {/* Footer Component end */}
      </div>
    </>
  );
};

export default ChangePasswordPage;

/* 

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const ChangePasswordPage = () => {
  // const token = useSelector((state) => state.AuthSlice.token);
  // const [inventoryData, setInventoryData] = useState([]);

  // useEffect(() => {
  //   const fetchUserInventory = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/getinvetory", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token": `Bearer ${token}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch orders");
  //       }

  //       const data = await response.json();
  //       setInventoryData(data);
  //     } catch (error) {
  //       console.error("Error fetching orders:", error);
  //     }
  //   };

  //   fetchUserInventory();
  // }, [token]);

  return (
    <>
      <Navbar />
      <div
        className="main-content-wrap not-found-wrap text-center sidenav-open"
        style={{
          backgroundImage: `url(${require("../assets/images/page-bg-bottom.ec613ada298590517b55.png")})`,
        }}
      >
        <div className="main-content ">
          <div className="row m-0">
            <div className="breadcrumb col-12">
              <ul>
                <li>
                  <Link to="/">
                    <i className="nav-icon i-Home-4"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="/changepassword">Change Password</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="separator-breadcrumb mb-3 border-top"></div>
          <div className="row m-0 ">
            <div className="col-md-12 p-0">
              <div className="row m-0 ">
                <div className="col-md-12 p-0">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="col-md-4 col-sm-8 m-auto  ">
                        <div className="card o-hidden">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="p-4">
                                <h1 className="mb-3 text-18">Change Password</h1>
                                <form>
                                  <div className="form-group">
                                    <label htmlFor="email">Username</label>
                                    <input
                                      id="username"
                                      className="form-control form-control-rounded"
                                      type="text"
                                      value="Aquib.Rider"
                                      readonly=""
                                    />
                                    <input
                                      id="user_id"
                                      className="form-control form-control-rounded"
                                      type="hidden"
                                      value="851"
                                      readonly=""
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="email">Current Password</label>
                                    <input
                                      id="old_password"
                                      className="form-control form-control-rounded"
                                      type="password"
                                      value=""
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="password">New Password</label>
                                    <input
                                      id="new_password"
                                      className="form-control form-control-rounded"
                                      type="password"
                                      value=""
                                    />
                                  </div>
                                  <button
                                    id="changePassword"
                                    type="button"
                                    className="btn btn-rounded btn-primary btn-block mt-2"
                                  >
                                    Change Password
                                  </button>
                                </form>

                                <div className="mt-3 text-center"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </>
  );
};

export default ChangePasswordPage;


*/
