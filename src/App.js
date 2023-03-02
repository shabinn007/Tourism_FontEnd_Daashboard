/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/Authenticattion/SignUp";
import Login from "./components/Authenticattion/Login";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Places from "./components/places";
import Tickets from "./components/tickets";
import Customers from "./components/customers";
function App() {
  return (
    <div>
      {/* <Navbar />
      <div className="container">
        <SideBar />
        <Home/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<LandingPage/>}/>      ..........Build this .......... */}
          <Route path="/home" element={<Dashboard />} />
          <Route path="/places" element={<Places />} />
          <Route path="/tickets" element={<Customers />} />
          <Route path="/customers" element={<Tickets />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
