import React, { useContext, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button, Modal, ModalBody } from 'react-bootstrap';
import "./modal.css"
import { Link } from "react-bootstrap-icons";
import LoginContext from "./LoginContext";

const Register = () => {
  const {show, setShow} = useContext(LoginContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Register
        </Button> */}
        <Modal
          className="model-content"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="border-0" closeButton>
            
          </Modal.Header>
          <Modal.Body className="modalHeader">
          <p>Looks like you're new here, </p>
          <h4>It is our pleasure to have you as a customer</h4>
          
          </Modal.Body>
          
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="mb-4"
            size="sm"
          >
            <Form.Control
              size="sm"
              required
              type="text"
              placeholder="Full Name"
              pattern="/^[A-Z][a-z][' ']*+"
            />
          </FloatingLabel>
  
          <FloatingLabel
            controlId="floatingInput"
            label="Email Address"
            className="mb-3"
            size="sm"
          >
            <Form.Control
              
              required
              type="email"
              placeholder="Email Address"
            />
          </FloatingLabel>
  
          <Button
            type="submit"
            variant="danger"
            className="btnSubmit rounded-pill"
          >
            Submit
          </Button>
          
        </Form>
        </Modal>
        
        
      </>
    )
}

export default Register