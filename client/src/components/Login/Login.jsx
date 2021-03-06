import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import stylesAuth from "../Auth.module.css";
import { loginF } from "../../actions/loginF";
import { TabTitle } from "../../actions/GeneralFunctions";
import { animated, useTransition } from "react-spring";
import { LoginContext } from "../context/Context";
import { useContext } from "react";

export default function Login() {

    TabTitle('Authentication - Scientific Center For Manufacturing And Production')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [res, setRes] = useState({ auth: false, type: '', reason: '' })
    const [Loaded, setLoaded] = useState({auth:false})
    const [ShowBanner, setShowBanner] = useState({ show: false, value: "", message: "" })
    const {loggedIn, setLoggedIn} = useContext(LoginContext)

    const transition = useTransition(ShowBanner.show, {
      from: { opacity: 0 },
      enter: { x: 0, y: 0, opacity: 1 },
      leave: { opacity: 0 },
    });

    function handleCheck() {
        setShowPass(!showPass);
      }

      const Handlelogin = async (e) => {
        e.preventDefault();
        const respond = await loginF(e)
        console.log(respond)
        setLoggedIn({...loggedIn, ...respond})
        setRes({...res,...respond})
        console.log(res)

      }
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
  )
}
