/** @format */

import React from "react";
import { Card, Row } from "reactstrap";
import Navbar from "./NavBar/Navbar";
import SideBar from "./SideBar";
import Joy from "./card";
import { useState } from "react";
import { map } from "lodash";
// import {map} from 'lodash'

function Customers() {
  const [data, setData] = useState([
    {
      place: "",
      price: "",
      openfrom: "",
      closesat: "",
    },
  ]);

  return (
    <div style={{ maxWidth: "1500px" }}>
      <Navbar className="d-flex" />
      <div className="d-flex">
        <div style={{ width: "200px" }}>
          <SideBar />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {map(data, i => (
            <Row style={{ padding: "5px" }}>
              <Card
                className="cardd"
                style={{
                  height: "200px",
                  width: "346px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Row>
                    <h2
                      style={{
                        color: "red",
                        paddingLeft: "20px",
                      }}
                    >
                      {i?.place}
                    </h2>
                    {/* <Joy setData={setData} data={data} /> */}
                    <div
                      style={{
                        position: "relative",
                        left: "90px",
                        top: "30px",
                      }}
                    >
                      <h3>₹{i?.price}</h3>
                    </div>
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "space-evenly",
                        position: "relative",
                        top: "40px",
                        color: "grey",
                      }}
                    >
                      <p>open from: {i?.openfrom}</p>
                      <p>closes at: {i?.closesat}</p>
                    </div>
                  </Row>
                </div>
              </Card>
              <Card
                className="cardd"
                style={{
                  minHeight: "200px",
                  width: "346px",
                  position: "relative",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <Row>
                    <Joy setData={setData} data={data} />
                  </Row>
                </div>
              </Card>
            </Row>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;
