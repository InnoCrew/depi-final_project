import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./auth.css";
import img from "../../assets/img/img.jpg";

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const validate = () => {
    const errors = {};
    if (!firstNameRef.current.value.trim())
      errors.firstName = "First name is required";
    if (!lastNameRef.current.value.trim())
      errors.lastName = "Last name is required";
    if (!emailRef.current.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errors.email = "Invalid email address";
    if (passwordRef.current.value.length < 6)
      errors.password = "Password must be at least 6 characters";
    if (passwordRef.current.value !== confirmPasswordRef.current.value)
      errors.confirmPassword = "Passwords do not match";
    if (!isChecked)
      errors.checkbox = "You must agree to the terms and conditions";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const postUserData = async (userData) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to register user.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({
        api: "There was an error while registering. Please try again later.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      postUserData(newUser);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    setIsChecked(false);

    if (firstNameRef.current) firstNameRef.current.value = "";
    if (lastNameRef.current) lastNameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
    if (confirmPasswordRef.current) confirmPasswordRef.current.value = "";
  };

  return (
    <div className="fullscreen-wrapper">
      <Container className={submitted ? "message-container" : "form-container"}>
        {submitted ? (
          <div className="text-center w-100">
            <h2 className="text-success mb-4">Registration Successful!</h2>
            <Button variant="secondary" onClick={handleReset}>
              Register Another
            </Button>
          </div>
        ) : (
          <Row className="w-100">
            <Col
              md={6}
              className="p-4 d-flex flex-column justify-content-center"
            >
              <h2 className="text-center mb-4">Welcome to Registration</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    ref={firstNameRef}
                    placeholder="Enter your first name"
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    ref={lastNameRef}
                    placeholder="Enter your last name"
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    placeholder="Enter email"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Enter password"
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Control
                    type="password"
                    ref={confirmPasswordRef}
                    placeholder="Confirm password"
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Check
                    type="checkbox"
                    label=" I agree to the Terms & Conditions"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    isInvalid={!!errors.checkbox}
                    className="d-flex gap-3 text-center"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkbox}
                  </Form.Control.Feedback>
                </Form.Group>

                {errors.api && <p className="text-danger">{errors.api}</p>}

                <Button variant="primary" type="submit" className="w-100">
                  Send
                </Button>
              </Form>
            </Col>

            <Col
              md={6}
              className="d-none d-md-flex justify-center align-items-center"
            >
              <img src={img} alt="Sign Up" className="form-image rounded-1" />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Signup;
