import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";

const ChangePasswordPage = () => {
  const [name, setName] = useState("");
  const token = useSelector((state) => state.AuthSlice.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `Bearer ${token}`,
        },
      });
      const responseData = await response.json();
      setName(responseData.username);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate if current password and new password are not blank
      // if (!userCredentials.currentPassword.trim() || !userCredentials.newPassword.trim()) {
      //   alert("Current password and new password cannot be blank");
      //   return;
      // }

      if (
        userCredentials.currentPassword === "" &&
        userCredentials.newPassword === ""
      ) {
        alert("Both Credentails cannot be blank");
      }

      if (userCredentials.currentPassword === "") {
        alert("Current password cannot be blank");
        return;
      }
      if (userCredentials.newPassword === "") {
        alert("New password cannot be blank");
        return;
      }

      // Check if current password is different from new password
      if (userCredentials.currentPassword === userCredentials.newPassword) {
        alert("Current password and new password cannot be the same");
        return;
      }

      // if (userCredentials.currentPassword !== userCredentials.currentPassword) {
      //   alert("Current password and new password cannot be the same");
      //   return;
      // }

      const response = await fetch(
        "http://localhost:5000/api/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentPassword: userCredentials.currentPassword,
            newPassword: userCredentials.newPassword,
          }),
        }
      );

      if (!response.ok) {
        // Check if the response status indicates a failed password change
        if (response.status === 401) {
          // Unauthorized status, indicating incorrect current password
          alert("Incorrect Current Password");
        }

        if (response.status === 403) {
          // Unauthorized status, if status !==1 & dc_user_profile_id !==62
          alert("User is not allowed to change password");
        }
        return;
      }

      const responseData = await response.json();
      console.log("Responded Data", responseData);

      // if (responseData.currentPassword !== userCredentials.currentPassword) {
      //   alert("Incorrect Current Password");
      //   return;
      // }

      setUserCredentials({
        // Reset password fields after successful password change
        currentPassword: "",
        newPassword: "",
      });
      alert("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  const handleOnRirectLoginPage = () => {
    dispatch({ type: "Auth/SET_TOKEN", payload: "" });
    // localStorage.removeItem("token");
    navigate("/");
  };

  const onChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.id]: e.target.value });
  };

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
                                <h1 className="mb-3 text-18">
                                  Change Password
                                </h1>
                                <form onSubmit={handleOnSubmit}>
                                  <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                      id="username"
                                      className="form-control form-control-rounded"
                                      type="text"
                                      value={name}
                                      readOnly
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="currentPassword">
                                      Current Password
                                    </label>
                                    <input
                                      id="currentPassword"
                                      className="form-control form-control-rounded"
                                      type="password"
                                      onChange={onChange}
                                      value={userCredentials.currentPassword}
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="newPassword">
                                      New Password
                                    </label>
                                    <input
                                      id="newPassword"
                                      className="form-control form-control-rounded"
                                      type="password"
                                      onChange={onChange}
                                      value={userCredentials.newPassword}
                                    />
                                  </div>
                                  <button
                                    type="submit"
                                    className="btn btn-rounded btn-primary btn-block mt-2"
                                    onClick={handleOnRirectLoginPage}
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
