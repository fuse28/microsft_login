import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import React from "react";

function Login() {
  const [showSignup, setshowSignup] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const toggleSignup = () => {
    setshowSignup(!showSignup);
  };

  const message = () => {
    window.alert("Login successfully");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {!showSignup ? (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <img
            className="img-responsive"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX/////uQB/ugAApO/yUCL/+/T/tAD5wbfxRADyShT2j3vO47R4twCpz3S02/gAoO50wPT4+/R0tQD0+f4Ane771M3xPQD1iXT/rgD95uLL4a5tsgD4s6ejzGj6/f+u2PgAmO3ics+kAAABEElEQVR4nO3biQ2CUBREUVfAXVEBd/qv0sRvBy8/MXhuAZOcAmY0kiRJkiRJkiRJkiRJkiRJv9qljHVOM9dVqGtGYdlUkZr2s3K4rUPdcgqrWaTFMgnrSaiakJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8J+EzSJS9fvftXO7jNTek/CxCfXIKJSk/D2PsZ5pZh4so/DVnyL1+wTsilBdRuF2N420+wqLcaiCkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkHBAwuG/8yRJkiRJkiRJkiRJkiRJUqw3TWrkMTMBDxwAAAAASUVORK5CYII="
          />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={message}>
            Continue
          </Button>
          <Form.Text
            className="text-info"
            style={{ cursor: "pointer" }}
            onClick={toggleSignup}
          >
            Don't have an account? Sign up here
          </Form.Text>
        </Form>
      ) : (
        <div>
          <Form>
            <h3>Sign Up</h3>
            <img
              className="img-responsive"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX/////uQB/ugAApO/yUCL/+/T/tAD5wbfxRADyShT2j3vO47R4twCpz3S02/gAoO50wPT4+/R0tQD0+f4Ane771M3xPQD1iXT/rgD95uLL4a5tsgD4s6ejzGj6/f+u2PgAmO3ics+kAAABEElEQVR4nO3biQ2CUBREUVfAXVEBd/qv0sRvBy8/MXhuAZOcAmY0kiRJkiRJkiRJkiRJkiRJv9qljHVOM9dVqGtGYdlUkZr2s3K4rUPdcgqrWaTFMgnrSaiakJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQ8J+EzSJS9fvftXO7jNTek/CxCfXIKJSk/D2PsZ5pZh4so/DVnyL1+wTsilBdRuF2N420+wqLcaiCkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkHBAwuG/8yRJkiRJkiRJkiRJkiRJUqw3TWrkMTMBDxwAAAAASUVORK5CYII="
            />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confrim Password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create
            </Button>
            <Form.Text
              className="text-info"
              style={{ cursor: "pointer" }}
              onClick={toggleSignup}
            >
              Have an account? Sign here
            </Form.Text>
          </Form>
        </div>
      )}
    </div>
  );
}

export default Login;
