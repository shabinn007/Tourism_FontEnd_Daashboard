import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { BsPlusCircle } from 'react-icons/bs';

function AddTicket() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

    <IconButton size='large'  onClick={handleShow}><BsPlusCircle/></IconButton>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Tickets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Place Name</Form.Label>
        <Form.Control type="" placeholder="Enter Place Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Ticket Price" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <div className='d-flex'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Open from</Form.Label>
        <Form.Control type="time" placeholder="Enter Time" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
        <Form.Label>Closes at</Form.Label>
        <Form.Control type="time" placeholder="Enter Time" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </div>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 export default AddTicket