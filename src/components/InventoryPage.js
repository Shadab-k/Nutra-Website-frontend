import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const InventoryPage = () => {
  const token = useSelector((state) => state.AuthSlice.token);
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    const fetchUserInventory = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getinvetory", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setInventoryData(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchUserInventory();
  }, [token]);

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
                  <Link to="/inventory">Inventory</Link>
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
                    <div className="table-responsive">
                      <table
                        id="inventorytbl"
                        className="p-0 display table data table-striped table-bordered table-hover"
                      >
                        <thead>
                          <tr role="row">
                            <th>Date</th>
                            <th>SKU Code</th>
                            <th>Brand</th>
                            <th>Issued Qty</th>
                            <th>Delivered</th>
                            <th>Damage/Lost</th>
                            <th>Balance Qty</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inventoryData.map((data, index) => (
                            <tr key={index} role="row" className="odd">
                              <td>{data.Date}</td>
                              <td>{data.SKU_Code}</td>
                              <td>{data.Brand}</td>
                              <td>{data.Issued_Qty}</td>
                              <td>{data.Delivered}</td>
                              <td>{data.Damage_Lost}</td>
                              <td>{data.Balance_Qty}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default InventoryPage;
