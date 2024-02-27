import React from "react";
import "./Style.css";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="text-left">
        <div className="loadscreen" id="preloader" style={{ display: "none" }}>
          <div className="loader spinner-bubble spinner-bubble-primary"> </div>
        </div>
        <div className="text-left modal-open" style={{ paddingRight: " 15px" }}>
          <div className="main-content-wrap not-found-wrap text-center sidenav-open" style={{
        backgroundImage: `url(${require("../assets/images/page-bg-bottom.ec613ada298590517b55.png")})`,
      }}>
            <div className="main-content ">
              <div className="row m-0">
                <div className="breadcrumb col-12">
                  <ul>
                    <li>
                      <a href="index.html">
                        <i className="nav-icon i-Home-4"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="orders.html">Orders</a>
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
                            className=" p-0 display table data table-striped table-bordered  table-hover "
                          >
                            <thead>
                              <tr role="row">
                                <th>Order Date</th>
                                <th> Order ID </th>
                                <th> Cust Name</th>

                                <th>COD Amt</th>

                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr role="row" className="odd">
                                <td>6/22/2020</td>

                                <td>
                                  <a
                                    href="/"
                                    className="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                  >
                                    11000XXXXXXX
                                  </a>
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

                      {/* <!--   End-user-profile-->  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
            
          </div>
          {/* <!-- ============ Body content End ============= -->  */}
        </div>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
      <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Hello</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Main;


