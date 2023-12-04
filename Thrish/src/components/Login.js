import React, { useContext, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button, Modal, ModalBody } from 'react-bootstrap';
import "./modal.css"
import LoginContext from "./LoginContext";
import { Link } from "react-bootstrap-icons";
import axios from "axios";

const Login = ({value}) => {
  const [mobileState, setMobileState] = useState("9740258381");
  const [passwordState, setPasswordState] = useState("Thr!5hala");

  const {show, setShow} = useContext(LoginContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkLogin = (e)=>{
    let url = `http://localhost:8080/doctorconsultation/login?mob=${mobileState}&pw=${passwordState}`
    axios.get(url)
      .then(data=>{
        if(data){
          <Link to = '/'/>
        }
        else if(data==null){
          console.log("not registered")
        }
      })

  }

  return (
    <>
      
      <Modal
        className="model-content"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="border-0" closeButton>
        </Modal.Header>
        <Modal.Body>
        <p className="modalHeader">Hello User, </p>
        <h3>Welcome to Medplus Mart!</h3>
        <p>Login with your mobile number</p>
        </Modal.Body>
        
      <Form onSubmit={(e)=>checkLogin(e)}>
        <FloatingLabel
          controlId="floatingInput"
          label="Mobile Number"
          className="mb-3"
        >
          <Form.Control
            required
            type="tel"
            placeholder="Phone Number"
            maxLength={10}
            minLength={10}
            pattern="[0-9]*"
            onChange={(e)=>setMobileState(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={(e)=>setPasswordState(e.target.value)}
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
  );
};

export default Login;

