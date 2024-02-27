import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const InventoryPage = () => {
  return (
    <>
    <Navbar/>
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
                <ul>
                  <li>
                    <Link to="/home">
                      <i className="nav-icon i-Home-4"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/inventory">Inventory</Link>
                  </li>
                </ul>
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
                        className=" p-0 display table data table-striped table-bordered  table-hover "
                      >
                        <thead>
                          <tr role="row">
                            <th>Date</th>
                            <th>SKU Code </th>
                            <th>Brand</th>
                            <th>Issued Qty</th>
                            <th>Delivered</th>

                            <th>Damage/Lost</th>

                            <th>Balance Qty</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td>6/22/2020</td>

                            <td>11000XXXXXXX</td>
                            <td>Bigjack</td>
                            <td>19</td>

                            <td>20</td>
                            <td>10</td>
                            <td>30</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td>6/22/2020</td>

                            <td>11000XXXXXXX</td>
                            <td>Bigjack</td>
                            <td>19</td>

                            <td>20</td>
                            <td>10</td>
                            <td>30</td>
                          </tr>
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
