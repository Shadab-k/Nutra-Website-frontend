import React, { useState, useEffect } from "react";
// import bcrypt from "bcrypt";
import image from "../assets/images/image.png";
import { useDispatch } from "react-redux";

const SignInPage = () => {
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false); // State for Remember Me checkbox
  const dispatch = useDispatch();

  
// Function to hash the password before storing it in localStorage
// const hashPassword = async (password) => {
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     return hashedPassword;
//   } catch (error) {
//     console.error("Error hashing password:", error);
//     return null;
//   }
// };

const handleSubmit = async (e) => {
  try {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.name,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log("json", json);
    if (json.success) {
      // Save token to Redux store
      dispatch({ type: "Auth/SET_TOKEN", payload: json.authToken });

      // Hash the password before saving it to localStorage
      // const hashedPassword = await hashPassword(credentials.password);

      // Save user credentials in localStorage if Remember Me is checked
      if (rememberMe) {
        localStorage.setItem("rememberedUsername", credentials.name);
        localStorage.setItem("rememberedPassword", credentials.password);
      } else {
        // If Remember Me is not checked, clear stored credentials
        localStorage.removeItem("rememberedUsername");
        localStorage.removeItem("rememberedPassword");
      }
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

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // Check local storage for stored credentials and set them to state
  useEffect(() => {
    const storedUsername = localStorage.getItem("rememberedUsername");
    const storedPassword = localStorage.getItem("rememberedPassword");
    if (storedUsername && storedPassword) {
      setCredentials({ name: storedUsername, password: storedPassword });
      setRememberMe(true); // Set Remember Me checkbox checked if credentials are stored
    }
  }, []);

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
                    <label htmlFor="text">Enter Your Name</label>
                    <input
                      id="name"
                      name="name"
                      className="form-control form-control-rounded"
                      type="text"
                      value={credentials.name}
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
                  <div className="form-group mt-xl-3 align-items-center d-flex">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      checked={rememberMe}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="remember" className="ml-xl-2 mb-0">
                      Remember me
                    </label>
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


/*import React, { useState } from "react";
import image from "../assets/images/image.png";
import { useDispatch } from "react-redux";

const SignInPage = () => {
  const [credentials, setCredentials] = useState({ name: "", password: "" });
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
          username: credentials.name, // Change 'name' to 'username'
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
                    <label htmlFor="text">Enter Your Name</label>
                    <input
                      id="name"
                      name="name"
                      className="form-control form-control-rounded"
                      type="text"
                      value={credentials.name}
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
                  </Link> *
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
*/
