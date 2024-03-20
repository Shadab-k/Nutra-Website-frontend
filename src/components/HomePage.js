import React from "react";
import "./Style.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="text-left">
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
                    <Link to="#">Affey</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="separator-breadcrumb mb-3 border-top"></div>
            <div className="row align-items-center  ">
              <div className="col-md-5 pt-5 d-flex m-auto">
                <div className="col-md-6">
                  <Link to="/orders">
                    <div className="card card-ecommerce-1 mb-4 pb-2 pt-3 ">
                      <div className="card-body text-center">
                        <i className="i-Jet mb-3"></i>
                        <h5 className="text-primary">Orders</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* <div className="col-md-6 ">
                  <Link to="/inventory">
                    <div className="card card-ecommerce-1 mb-4 pb-2 pt-3 ">
                      <div className="card-body text-center">
                        <i className="i-Receipt-3 mb-3"></i>
                        <h5 className="text-primary"> Inventory</h5>
                      </div>
                    </div>
                  </Link>
                </div> */}
              </div>
              {/*<!-- Footer Start --> */}

              <Footer />
              {/* <!-- fotter end --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
