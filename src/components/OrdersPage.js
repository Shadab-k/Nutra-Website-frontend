import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const OrdersPage = () => {
  const ref = useRef(null);
  const refClose = useRef(null);
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [order, setOrder] = useState({});
  const token = useSelector((state) => state.AuthSlice.token);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getorders", {
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
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  const updateOrders = async () => {
    try {
      const { Order_Id } = order;
      const response = await fetch(
        `http://localhost:5000/api/updateorders/${Order_Id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `Bearer ${token}`,
          },
          body: JSON.stringify({ ...order }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update order");
      }

      const data = await response.json();
      let temp = [...orders];
      temp[currentIndex] = data.order;
      setOrders([...temp]);
    } catch (error) {
      console.error("Error while updating orders:", error);
    }
  };
  console.log("Order", order);

  const handleSubmit = (e) => {
    e.preventDefault();
    refClose.current.click();
    handleCloseModal();
    updateOrders();
  };

  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleOpenModal = (currentOrder, index) => {
    setShowModal(true);
    setCurrentIndex(index);
    setOrder({
      ...currentOrder,
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOnPaymentSelect = (e) => {
    setOrder({ ...order, payment_mode: e.target.value });
  };

  const handleOnOrderSelect = (e) => {
    setOrder({ ...order, Status: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="text-left">
        <div className="loadscreen" id="preloader" style={{ display: "none" }}>
          <div className="loader spinner-bubble spinner-bubble-primary"></div>
        </div>
        <div className="text-left modal-open" style={{ paddingRight: "15px" }}>
          <div
            className="main-content-wrap not-found-wrap text-center sidenav-open text-center"
            style={{
              backgroundImage: `url(${require("../assets/images/page-bg-bottom.ec613ada298590517b55.png")})`,
            }}
          >
            <div className="main-content">
              <div className="row m-0">
                <div className="breadcrumb col-12">
                  <ul>
                    <li>
                      <Link to="/">
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
              <div className="row m-0">
                <div className="col-md-12 p-0">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="col-md-12 p-0 mt-lg-2">
                        <div className="table-responsive">
                          <table
                            id="inventorytbl"
                            className="p-0 display table data table-striped table-bordered  table-hover"
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
                              {orders.map((order, index) => (
                                <tr
                                  key={order.Order_Id}
                                  role="row"
                                  className="odd"
                                >
                                  <td>{order.Order_Date}</td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="text-primary"
                                      ref={ref}
                                      onClick={() =>
                                        handleOpenModal(order, index)
                                      }
                                    >
                                      {order.Order_Id}
                                    </Link>
                                  </td>
                                  <td>
                                    {order.Cust_Name}
                                    {/* <a
                                    href={order?.mobile_num}
                                    className="btn editPermission btn-sm rounded-circle btn-icon btn-outline-primary"
                                  >
                                    <i className="i-Telephone"></i>
                                  </a> */}
                                  </td>

                                  <td>{order.COD_Amt}</td>
                                  <td>{order.Status}</td>
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
            <Footer />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="text-left">
          {" "}
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
                  <form onSubmit={handleSubmit}>
                    <div className="col-md-12 p-0">
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12 row m-0 form-group">
                              <label
                                htmlFor="name"
                                className="pl-1 col-sm-2 pb-0 col-form-label"
                              >
                                Name
                              </label>
                              <label
                                className="form-control col-sm-10 form-control-rounded"
                                name="e.Cust_Name"
                                id="name"
                              >
                                {order?.Cust_Name}
                              </label>
                            </div>

                            <div className="col-md-12 row m-0 form-group">
                              <label
                                htmlFor="proqty"
                                className="pl-1 col-sm-2 pb-0 col-form-label"
                              >
                                Address
                              </label>
                              <label
                                name="eaddress"
                                id="address"
                                className="form-control col-sm-10 form-control-rounded"
                              >
                                {order?.address}
                              </label>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 row m-0 form-group">
                              <label
                                htmlFor="primaryno"
                                className="pl-1 col-sm-4 pb-0 col-form-label"
                              >
                                Primary <i className="i-Telephone"></i>{" "}
                              </label>
                              <label
                                className="form-control col-sm-8 readonly form-control-rounded"
                                value="XXXXX9050"
                                name="emobile_num"
                                id="primaryno"
                              >
                                {order?.mobile_num}
                              </label>
                            </div>

                            <div className="col-md-6 row m-0 form-group">
                              <label
                                htmlFor="alternate"
                                className="pl-1 col-sm-4 pb-0 col-form-label"
                              >
                                Alternate <i className="i-Telephone"></i>
                              </label>
                              <label
                                className="form-control col-sm-8 form-control-rounded"
                                value="XXXXX9050"
                                name="ealternate"
                                id="alternate"
                              >
                                {order?.alt_mobile_num}
                              </label>
                            </div>
                          </div>

                          <div className="row m-0">
                            <div className="col-md-12 p-0">
                              <div className="card mt-3 mb-2">
                                <div className="card-body">
                                  <div className="col-md-12 p-0 mt-lg-2">
                                    <div className="table-responsive">
                                      <table
                                        id="productstbl"
                                        className="p-0 display table data table-striped table-bordered  table-hover"
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
                                            <td>{order?.product_name}</td>
                                            <td>{order?.qty}</td>
                                            <td>{order?.COD_Amt}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 p-0 row m-0 form-group">
                            <label
                              htmlFor="generateinvoice"
                              className="pl-1 pb-0 col-md-2 col-form-label"
                            >
                              Generate Invoice
                            </label>
                            <div className="col-md-6 p-0">
                              <Link
                                to="javascript:void(0)"
                                // onClick="downloadChcExcel()"
                                className="badge badge-pill float-left p-2 mr-2 badge-outline-success col-sm-12 text-success text-11"
                              >
                                <i className="i-Download"></i> Download
                              </Link>
                            </div>
                          </div>

                          <div className="row m-0">
                            <div className="col-md-6 row m-0 form-group">
                              <label
                                htmlFor="paymentmode"
                                className="pl-1 col-md-4 pb-0 col-form-label"
                              >
                                Payment Mode
                              </label>
                              <select
                                className="form-control col-md-8 form-control-rounded"
                                onChange={handleOnPaymentSelect}
                                value={order.payment_mode}
                              >
                                <option> {order.payment_mode}</option>
                                <option value="COD">Cash</option>
                                <option value="Paytm">Paytm</option>
                                <option value="Phone Pay">Phone Pay</option>
                                <option value="Google Pay">Google Pay</option>
                                <option value="Amazon Pay">Amazon Pay</option>
                              </select>
                            </div>

                            <div className="col-md-6 row m-0 form-group">
                              <label
                                htmlFor="orderstatus"
                                className="pl-1 col-md-4 pb-0 col-form-label"
                              >
                                Order Status
                              </label>
                              <select
                                className="form-control col-md-8 form-control-rounded"
                                onChange={handleOnOrderSelect}
                                value={order.Status}
                              >
                                <option>{order?.Status}</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Undelivered">Undelivered</option>
                              </select>
                            </div>
                          </div>

                          <div className="row m-0 mb-2">
                            <div className="col-md-6 row m-0 form-group">
                              <div className="col-md-4 pl-0 col-sm-4">
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
                                  className="form-control form-control-rounded"
                                  onChange={onChange}
                                  value={order.remark}
                                ></textarea>
                              </div>
                            </div>

                            {/* <div className="col-md-6 row m-0 form-group">
                              <div className="col-md-4 pl-0 col-sm-4">
                                <label
                                  htmlFor="reason"
                                  className="pl-1 pb-0 col-form-label"
                                >
                                  Reason
                                </label>
                              </div>

                              <div className="col-md-8 col-sm-8 p-0">
                                <textarea
                                  name="reason"
                                  id="reason"
                                  className="form-control form-control-rounded"
                                  onChange={onChange}
                                  value={order.reason}
                                ></textarea>
                              </div>
                            </div> */}
                          </div>

                          <div className="modal-footer">
                            <button
                              type="submit"
                              className=" float-right ml-auto btn btn-primary"
                              data-dismiss="modal"
                            >
                              Update
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                              ref={refClose}
                              onClick={handleCloseModal}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default OrdersPage;
