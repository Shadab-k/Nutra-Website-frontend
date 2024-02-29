import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <>
      <div className="app-admin-wrap layout-sidebar-large clearfix">
        <div className="main-header">
          <div className="logo">
            {" "}
            {/* <Link to="/home"> </Link> */}
            <Link to="#">
              {" "}
              <img src={logo} alt="" />
            </Link>{" "}
          </div>

          <div style={{ margin: "auto" }}></div>
          <div className="header-part-right">
            {/* <!-- Full screen toggle -->  */}
            <i
              className="i-Full-Screen header-icon d-none d-sm-inline-block"
              data-fullscreen=""
            ></i>

            {/* <!-- User avatar dropdown --> */}
            <div
              className="badge-top-container"
              role="button"
              id="dropdownNotification"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              <Link to="#" className="text-muted mr-4">
                {" "}
                <i className="nav-icon i-Administrator"></i> Welcome nutrafirst
                marketing
              </Link>{" "}
            </div>
          </div>

          <div className="d-flex align-items-center">
            {/* <!-- Mega menu -->  */}
            <div className="menu-toggle">
              <div></div>
              <div></div>
              <div></div>
            </div>
            {/* <!-- / Mega menu -->  */}
          </div>
        </div>
      </div>

      {/* SideBar Component */}
      <SideBar />
    </>
  );
};

export default Navbar;
