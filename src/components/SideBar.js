import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SideBar = () => {
  let navigate = useNavigate(); 
  const dispatch=useDispatch()

  const handleOnLogout = () => {
    dispatch({type:"Auth/SET_TOKEN", payload:""})
    // localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <div className="app-admin-wrap layout-sidebar-large clearfix">
      <div className="side-content-wrap">
        <div
          className="sidebar-left open rtl-ps-none ps"
          data-perfect-scrollbar=""
          data-suppress-scroll-x="true"
        >
          <ul className="navigation-left">
            <li className="nav-item ">
              <Link className="nav-item-hold" to="/">
                <i className="nav-icon i-Home-4"></i>
                <span className="nav-text">Home</span>
              </Link>
              <div className="triLinkngle"></div>
            </li>
            <li className="nav-item ">
              <Link className="nav-item-hold" to="/orders">
                <i className="nav-icon i-Bar-Chart"></i>
                <span className="nav-text">Orders</span>
              </Link>
              <div className="triangle"></div>
            </li>
            <li className="nav-item">
              <Link className="nav-item-hold" to="/inventory">
                <i className="nav-icon i-Library"></i>
                <span className="nav-text">Inventory</span>
              </Link>
              <div className="triangle"></div>
            </li>

            <li className="nav-item " onClick={handleOnLogout}>
              <Link className="nav-item-hold">
                <i className="nav-icon i-Checked-User"></i>
                <span className="nav-text">Logout</span>
              </Link>
              <div className="triangle"></div>
            </li>
          </ul>
          <div className="ps__rail-x" style={{ left: "0px", top: "0px" }}>
            <div
              className="ps__thumb-x"
              tabIndex="0"
              style={{ left: "0px", width: "0px" }}
            ></div>
          </div>
          <div className="ps__rail-y" style={{ top: "0px", left: "0px" }}>
            <div
              className="ps__thumb-y"
              tabIndex="0"
              style={{ top: "0px", height: "0px" }}
            ></div>
          </div>
        </div>

        <div
          className="sidebar-left-secondary rtl-ps-none ps"
          data-perfect-scrollbar=""
          data-suppress-scroll-x="true"
        >
          {/* <!-- Submenu Dashboards --> */}

          <div className="ps__rail-x" style={{ left: "0px", top: "0px" }}>
            <div
              className="ps__thumb-x"
              tabIndex="0"
              style={{ left: "0px", width: "0px" }}
            ></div>
          </div>
          <div className="ps__rail-y" style={{ top: "0px", left: "0px" }}>
            <div
              className="ps__thumb-y"
              tabIndex="0"
              style={{ top: " 0px", height: "0px" }}
            ></div>
          </div>
        </div>
        <div className="sidebar-overlay"></div>
      </div>
    </div>
  );
};

export default SideBar;
