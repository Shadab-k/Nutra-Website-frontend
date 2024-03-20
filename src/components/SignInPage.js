import React, { useState } from "react";
import image from "../assets/images/image.png";
import { useDispatch } from "react-redux";

const SignInPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      console.log("json", json);
      if (json.success) {
        // localStorage.setItem("token", json.authToken);
        dispatch({type:"Auth/SET_TOKEN", payload: json.authToken})
        // navigate("/home");
      } else {
        alert("Please Login With Correct Credentials");
      }
    } catch (error) {
      alert("Invalid Credentials", error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <div
      className="auth-layout-wrap"
      style={{
        backgroundImage: `url(${require("../assets/images/photo-wide-4.jpg")})`,
      }}
    >
      <div className="col-md-4 col-sm-8 m-auto  ">
        <div className="card o-hidden">
          <div className="row">
            <div className="col-md-12">
              <div className="p-4">
                <div className=" text-center mb-4">
                  <img src={image} alt="" title="Nutrafirst" />
                </div>
                <h1 className="mb-3 text-18">Sign In</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      className="form-control form-control-rounded"
                      type="email"
                      value={credentials.email}
                      onChange={onChange}
                      autoComplete="on"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      className="form-control form-control-rounded"
                      type="password"
                      value={credentials.password}
                      onChange={onChange}
                      autoComplete="off"
                    />
                  </div>{" "}
                  <button
                    type="submit"
                    className="btn btn-rounded btn-primary btn-block mt-2"
                  >
                    Sign In
                  </button>
                  {/* <Link
               
                    className="btn btn-rounded btn-primary btn-block mt-2"
                    to='/home'
                    // onClick={onNavbarNavigation}
                  >
                    Home Page
                  </Link> */}
                  <div className="form-group mt-xl-3 align-items-center d-flex">
                    <input type="checkbox"  name="remember" id="remember" />
                    <label for="remember-me" className="ml-xl-2 mb-0">Remember me</label>
                  </div>
                </form>
                <div className="mt-3 text-center">
                  <a href="forgot_password.php">Forgot Your Password?</a>
                </div>

                <div className="mt-3 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
