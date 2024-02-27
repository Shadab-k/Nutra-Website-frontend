import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignInPage from "./components/SignInPage";
import HomePage from "./components/HomePage";
import OrdersPage from "./components/OrdersPage";
import InventoryPage from "./components/InventoryPage";
import Footer from "./components/Footer";

function App() {
  // const token = localStorage.getItem("token");
  // console.log("Token is present", token);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/home" element={<HomePage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/" element={<SignInPage />} />
          </Route>

          {/* <Route>          
          </Route> */}
        </Routes>
      </BrowserRouter>
      <Footer/>


    </div>
  );
}

export default App;

// import "./App.css";
// import Navbar from "./components/Navbar";
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import SignInPage from "./components/SignInPage";
// import HomePage from "./components/HomePage";
// import OrdersPage from "./components/OrdersPage";
// import InventoryPage from "./components/InventoryPage";

// function App() {
//   // const token = localStorage.getItem("token");
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route>
//             <Route exact path="/" element={<SignInPage />} />
//           </Route>

//           <Route
//             element={
//               <>
//                 <Navbar /> <Outlet />
//               </>
//             }
//           >
//             <Route exact path="/home" element={<HomePage />} />
//             <Route exact path="/orders" element={<OrdersPage />} />
//             <Route exact path="/inventory" element={<InventoryPage />} />
//             {/* <Route exact path="/main" element={<Main />} /> */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
