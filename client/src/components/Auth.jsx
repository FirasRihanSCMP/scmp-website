import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import stylesAuth from "./Auth.module.css";
import axios from "axios";


import { useNavigate } from 'react-router-dom';
import { login } from "../actions/login";

export default function Auth(props) {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  function handleCheck() {
    setShowPass(!showPass);
    console.log();
  }
 const Handlelogin=async (e) => {
    e.preventDefault();
 const response=await login(e)
props.handleResult(response)

  
  }
/* function login(e){
  e.preventDefault()
  const data = { email, password }
  console.log(data)
  if(data.email==="scmp@2021"&&data.password==="123456"){
    window.location.href = "https://www.scmp-lb.com/webmail";
  }
} */
  return (
    <div>
      <h1 className={stylesAuth.authTitle}>Staff Verification</h1>
      <Form className={stylesAuth.bodyWidth} onSubmit={Handlelogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Username</Form.Label>
          <Form.Control
            onBlur={(e) => setEmail(e.target.value)}
            type="username"
            placeholder="Enter Username"
            defaultValue=""
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPass ? "text" : "password"}
            onBlur={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onChange={handleCheck}
            label="Show Password"
          />
        </Form.Group>
        <Button
          className={stylesAuth.submitButton}
          as="input"
          variant="warning"
          type="submit"
          value="Submit"
        />
      </Form>
    </div>
  );
}
