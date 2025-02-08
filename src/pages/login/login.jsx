import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully");
      // Proceed with login logic
    }
  };

  return (
    <Container
      fluid
      className="login-container vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="container  w-100 bg-white p-0  overflow-hidden">
        <Col lg={6} className="p-5 d-flex flex-column justify-content-center">
          <h2 className="mb-2">Welcome Back!</h2>
          <p>Please log in to your account.</p>
          <Form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email Address</label>
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <Row className="mb-3 align-items-center">
              <Col xs={6}>
                <Form.Group className="mb-3" controlId="rememberMe">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
              </Col>
              <Col xs={6} className="text-end">
                <a href="#">Forgot password?</a>
              </Col>
            </Row>

            <div className="d-flex text-center justify-content-center align-items-center">
              <Col>
                <a
                  href="#"
                  className="text-decoration-none btn btn-fill align-self-center"
                >
                  Login
                </a>
              </Col>
              <Col>
                <a href="#" className="text-decoration-none btn btn-outline">
                  Create account
                </a>
              </Col>
            </div>
          </Form>
        </Col>

        <Col md={6} className="d-none d-lg-block p-0 position-relative">
          <div
            className="h-100 w-100"
            style={{
              background: "url('src/assets/img/login.webp') center/cover",
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
