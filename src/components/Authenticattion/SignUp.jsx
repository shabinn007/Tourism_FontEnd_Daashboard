/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../pics/compass.png";
import "../../App.css";
import { register } from "../../store/api/api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "reactstrap";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const { isAuthenticated, loading } = useSelector(state => state.signup);
  // const [signupData, setSignupData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const [user, setUser] = useState();
  // console.log("user", user);
  const handlesubmit = e => {
    e.preventDefault();
    // dispatch(register({ signupData, navigate }));
    dispatch(register({ cridential: { username, password }, navigate }));
  };
  // const handleChange = e => {
  //   e.preventDefault();
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };
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
          Already a member?
          <Link style={{ textDecoration: "none" }} to={"/login"} variant="link">
            Sign in
          </Link>
        </p>
        <div className="main_content" style={{ marginTop: "100px" }}>
          <Form onSubmit={handlesubmit}>
            <h2 className="text-center" style={{ marginTop: "50px" }}>
              Sign up to XPLOR
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
              <div className="email" style={{ paddingBottom: "36px" }}>
                <h4 style={{}}>Username</h4>
                <input
                  className="input_box"
                  type="text"
                  name="username"
                  value={username}
                  // onChange={handleChange}
                  // onChange={e =>
                  //   setSignupData({ ...signupData, username: e.target.value })
                  // }
                  // onChange={e => setEmail(e.target.value)}

                  onChange={e => setUsername(e.target.value)}
                />
              </div>

              {/* <div className="email" style={{ paddingBottom: "40px" }}>
                <h4 style={{}}>Email</h4>
                <input
                  className="input_box"
                  type="email"
                  name="email"
                  value={email}
                  // onChange={handleChange}
                  // onChange={e =>
                  //   setSignupData({ ...signupData, email: e.target.value })
                  // }
                  onChange={e => setEmail(e.target.value)}

                  // onChange={e => setEmail(e.target.value)}
                />
              </div> */}

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
                type="password"
                name="password"
                value={password}
                // onChange={handleChange}
                // onChange={e =>
                //   setSignupData({ ...signupData, password: e.target.value })
                // }
                onChange={e => setPassword(e.target.value)}

                // onChange={e => setPassword(e.target.value)}
              />

              <div className="button" style={{ paddingTop: "40px" }}>
                <button className="login_button" type="submit">
                  {/* {loading ? "loading..." : "Sign up"} */}
                  sign up
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
