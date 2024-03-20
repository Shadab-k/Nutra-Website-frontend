import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/image.png";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.AuthSlice.token);
  const dataFromApi = async () => {
    const response = await fetch("http://localhost:5000/api/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${token}`,
      },
      // body: JSON.stringify({ data }),
    });

    const resp = await response.json();
    setData(resp);
  };

  useEffect(() => {
    dataFromApi();
  }, [token]);

  console.log("Data fected", data);
  return (
    <>
      <div className="text-left">
        {data.map((user) => {
          return (
            <div
              className="app-admin-wrap layout-sidebar-large clearfix"
              key={user?.id}
            >
              <div className="main-header">
                <div className="logo">
                  {" "}
                  {/* <Link to="/home"> </Link> */}
                  <Link to="#">
                    {" "}
                    <img src={image} alt="" title="Nirvasa" />
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
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    {" "}
                    <Link to="#" className="text-muted mr-4">
                      {" "}
                      <i className="nav-icon i-Administrator"></i> Welcome{" "}
                      {user?.name}
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
          );
        })}

        {/* SideBar Component */}
        <SideBar />
      </div>
      ;
    </>
  );
};

export default Navbar;
