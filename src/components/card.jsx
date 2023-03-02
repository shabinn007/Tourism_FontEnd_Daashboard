/** @format */

import { IconButton } from "@mui/material";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BsPlusCircle } from "react-icons/bs";

function Joy({ setData, data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [finaData, setFinaData] = useState({
    place: "",
    price: "",
    openfrom: "",
    closesat: "",
  });

  console.log("finaData", finaData);

  const handleSubmit = () => {
    setData([...data, finaData]);
    handleClose();
  };

  console.log(data);

  return (
    <>
      <IconButton size="large" onClick={handleShow}>
        <BsPlusCircle /> Add
      </IconButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Places</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Place Name</Form.Label>
              <Form.Control
                onChange={e =>
                  setFinaData({
                    ...finaData,
                    place: e.target.value,
                  })
                }
                name="place"
                type=""
                placeholder="Enter Place Name"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={e =>
                  setFinaData({
                    ...finaData,
                    price: e.target.value,
                  })
                }
                name="price"
                type="number"
                placeholder="Enter Ticket Price"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <div className="d-flex">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Open from</Form.Label>
                <Form.Control
                  onChange={e =>
                    setFinaData({
                      ...finaData,
                      openfrom: e.target.value,
                    })
                  }
                  name="openfrom"
                  type="time"
                  placeholder="Enter Time"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
                <Form.Label>Closes at</Form.Label>
                <Form.Control
                  onChange={e =>
                    setFinaData({
                      ...finaData,
                      closesat: e.target.value,
                    })
                  }
                  name="closesat"
                  type="time"
                  placeholder="Enter Time"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Joy;
