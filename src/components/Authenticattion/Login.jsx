/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../pics/compass.png";
import "../../App.css";
import { Form } from "reactstrap";
// import { useDispatch } from "react-redux";
// import { login } from "../../store/api/api";
// import { login } from "../../store/authentication/authenticationSlice";
// import { useState } from "react";
export default function Login() {
  return (
    <div className="d-flex">
      <div className="leftt">
        <div>
          <img
            style={{
              width: "190px",
              height: "141px",
              marginLeft: "45px",
              marginTop: "45px",
            }}
            src={img}
            alt=""
          />
          <h3
            className="logo_title"
            style={{ marginTop: "-25px", marginLeft: "103px" }}
          >
            XPLOR
          </h3>
          <h3 style={{ color: "white", marginLeft: "25px", marginTop: "45px" }}>
            Explore the beauty of the
            <br /> world with us.
          </h3>
        </div>
      </div>
      <div className="righht">
        <p
          style={{ textAlign: "right", marginRight: "10px", marginTop: "10px" }}
        >
          not a member?
          <Link
            style={{ textDecoration: "none" }}
            to={"/signup"}
            variant="link"
          >
            Sign up now
          </Link>
        </p>
        <div className="main_content" style={{ marginTop: "100px" }}>
          <Form>
            {/* <Form> */}{" "}
            <h2 className="text-center" style={{ marginTop: "50px" }}>
              Sign in to XPLOR
            </h2>
            <div
              className="content"
              style={{
                justifyContent: "center",
                display: "grid",
                marginTop: "70px",
                marginLeft: "50px",
              }}
            >
              <div className="email" style={{ paddingBottom: "50px" }}>
                <h4 style={{}}>Email</h4>
                <input
                  className="input_box"
                  name="email"
                  type="email"
                  // onChange={handleChange}
                  // value={email}
                  // onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div
                className="password"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h4>Password</h4>
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/forgot password"}
                  variant="link"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                className="input_box"
                type="text"
                name="password"
                // value={password}
                // onChange={e => setPassword(e.target.value)}
              />
              <div className="button" style={{ paddingTop: "50px" }}>
                <button className="login_button" type="submit">
                  Sign In
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
