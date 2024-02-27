import React, { useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const OrdersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectPaymentMode, setSelectPaymentMode] = useState("");
  const [selectOrderStatus, setSelectOrderStatus] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOnPaymentSelect = (e) => {
    setSelectPaymentMode(e.target.value);
  };
  const handleOnOrderSelect = (e) => {
    setSelectOrderStatus(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="text-left">
        <div className="loadscreen" id="preloader" style={{ display: "none" }}>
          <div className="loader spinner-bubble spinner-bubble-primary"> </div>
        </div>
        <div className="text-left modal-open" style={{ paddingRight: " 15px" }}>
          <div
            className="main-content-wrap not-found-wrap text-center sidenav-open text-center"
            style={{
              backgroundImage: `url(${require("../assets/images/page-bg-bottom.ec613ada298590517b55.png")})`,
            }}
          >
            <div className="main-content ">
              <div className="row m-0">
                <div className="breadcrumb col-12">
                  <ul>
                    <li>
                      <Link to="/home">
                        <i className="nav-icon i-Home-4"></i> Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/orders">Orders</Link>
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
                            className="p-0 display table data table-striped table-bordered  table-hover "
                          >
                            <thead>
                              <tr role="row">
                                <th>Order Date</th>
                                <th>Order ID</th>
                                <th>Cust Name</th>
                                <th>COD Amt</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr role="row" className="odd">
                                <td>6/22/2020</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="text-primary"
                                    onClick={handleOpenModal}
                                  >
                                    11000XXXXXXX
                                  </Link>
                                </td>
                                <td>
                                  Ram Kumar{" "}
                                  <a
                                    href="tel:XXXXXX898"
                                    className="btn editPermission btn-sm rounded-circle btn-icon btn-outline-primary"
                                  >
                                    <i className="i-Telephone"></i>
                                  </a>
                                </td>
                                <td>1999</td>
                                <td>Intransit</td>
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
            <Footer />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="text-left">
          <div
            className="modal fade bd-example-modal-lg show"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            style={{ display: "block", paddingRight: "15px" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title text-primary"
                    id="exampleModalCenterTitle"
                  >
                    Order Edit/Update !
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  >
                    <span aria-hidden="true">
                      <i className="i-Close-Window"></i>
                    </span>{" "}
                  </button>
                </div>
                <div className="modal-body">
                  <div className="col-md-12 p-0">
                    <div className=" card  mb-3">
                      <div className="card-body">
                        <div className="row ">
                          <div className="col-md-12 row m-0  form-group ">
                            <label
                              htmlFor="name"
                              className="pl-1 col-sm-2 pb-0 col-form-label"
                            >
                              {" "}
                              Name
                            </label>
                            <label
                              className="form-control col-sm-10 form-control-rounded"
                              name="name"
                              id="name"
                              value="Ram Kumar"
                            ></label>
                          </div>

                          <div className="col-md-12 row m-0  form-group ">
                            <label
                              htmlFor="proqty"
                              className="pl-1 col-sm-2 pb-0 col-form-label"
                            >
                              Address
                            </label>
                            <label
                              name="address"
                              id="address"
                              className="form-control col-sm-10 form-control-rounded"
                            ></label>
                          </div>
                        </div>

                        <div className="row ">
                          <div className="col-md-6 row m-0  form-group ">
                            <label
                              htmlFor="primaryno"
                              className="pl-1 col-sm-4 pb-0 col-form-label"
                            >
                              {" "}
                              Primary <i className="i-Telephone"></i>{" "}
                            </label>
                            <label
                              className="form-control col-sm-8 readonly form-control-rounded"
                              value="XXXXX9050"
                              name="primaryno"
                              id="primaryno"
                            >
                              {" "}
                            </label>
                          </div>

                          <div className="col-md-6 row m-0  form-group ">
                            <label
                              htmlFor="alternate"
                              className="pl-1 col-sm-4 pb-0  col-form-label"
                            >
                              {" "}
                              Alternate <i className="i-Telephone"></i>
                            </label>
                            <label
                              className="form-control col-sm-8 form-control-rounded"
                              value="XXXXX9050"
                              name="alternate"
                              id="alternate"
                            ></label>
                          </div>
                        </div>

                        <div className="row m-0 ">
                          <div className="col-md-12 p-0">
                            <div className="card mt-3 mb-2">
                              <div className="card-body">
                                <div className="col-md-12 p-0 mt-lg-2 ">
                                  <div className="table-responsive">
                                    <table
                                      id="productstbl"
                                      className="p-0 display table data table-striped table-bordered  table-hover "
                                    >
                                      <thead>
                                        <tr role="row">
                                          <th> Product Name</th>
                                          <th> Qty </th>
                                          <th> Amount</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr role="row" className="odd">
                                          <td>BIGJACK01</td>

                                          <td>5</td>
                                          <td>2999</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12 p-0 row m-0  form-group  ">
                          <label
                            htmlFor="generateinvoice"
                            className="pl-1 pb-0 col-md-2 col-form-label"
                          >
                            {" "}
                            Generate Invoice
                          </label>
                          <div className="col-md-6 p-0">
                            {" "}
                            <Link
                              to="javascript:void(0)"
                              onClick="downloadChcExcel()"
                              className="badge badge-pill float-left p-2 mr-2 badge-outline-success col-sm-12 text-success text-11  "
                            >
                              <i className="i-Download"></i> Download
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="row m-0">
                        <div className="col-md-6 row m-0 form-group ">
                          <label
                            htmlFor="paymentmode"
                            className="pl-1 col-md-4 pb-0 col-form-label"
                          >
                            {" "}
                            Payment Mode
                          </label>
                          <select
                            className="form-control col-md-8  form-control-rounded"
                            // onChange="divchange(this)"
                            onChange={handleOnPaymentSelect}
                            value={selectPaymentMode}
                          >
                            <option> - Select -</option>
                            <option value="1">COD</option>
                            <option value="2">Online</option>
                          </select>
                        </div>

                        <div className="col-md-6 row m-0  form-group ">
                          <label
                            htmlFor="paymentmode"
                            className="pl-1 col-md-4 pb-0 col-form-label"
                          >
                            {" "}
                            Order Status
                          </label>
                          <select
                            className="form-control col-md-8  form-control-rounded"
                            // onChange="divchange(this)"
                            onChange={handleOnOrderSelect}
                            value={selectOrderStatus}
                          >
                            <option> - Select -</option>
                            <option value="1">In Transit </option>
                            <option value="2"> In Delivered</option>
                          </select>
                        </div>
                      </div>

                      <div className="row m-0 mb-2">
                        <div className="col-md-6 row m-0 form-group  ">
                          <div className="col-md-4 pl-0  col-sm-4">
                            <label
                              htmlFor="remark"
                              className="pl-1 pb-0 col-form-label"
                            >
                              Remark
                            </label>
                          </div>

                          <div className="col-md-8 col-sm-8 p-0">
                            <textarea
                              name="remark"
                              id="remark"
                              className="form-control  form-control-rounded"
                              rows="3"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-6 row m-0 form-group  ">
                          <div className="col-md-4 pl-0  col-sm-4">
                            <label
                              htmlFor="remark"
                              className="pl-1 pb-0 col-form-label"
                            >
                              Reason
                            </label>
                          </div>

                          <div className="col-md-8 col-sm-8 p-0">
                            <textarea
                              name="remark"
                              id="remark"
                              className="form-control  form-control-rounded"
                              rows="3"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className=" float-right ml-auto btn btn-primary"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default OrdersPage;
