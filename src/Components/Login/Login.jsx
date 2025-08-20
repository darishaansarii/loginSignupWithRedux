
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slice/authSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Login.module.css";

const Login = ({ logHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading, error, isAuthenticated, user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className={styles.pageWrapper}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5} xl={4}>
            <Card className={`p-4 ${styles.loginCard}`}>
              <h3 className={`text-center mb-4 ${styles.title}`}>Welcome Back</h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className={styles.label}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={styles.label}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Form.Check type="checkbox" label="Remember me" className={styles.checkBox} />
                  <a href="#" className={styles.link}>Forgot password?</a>
                </div>

                {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
                {isAuthenticated && <p style={{ color: "green", fontSize: "0.9rem" }}>Hi {user.name}, you are logged in!</p>}

                <Button type="submit" className={`w-100 ${styles.loginBtn}`} disabled={isLoading}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                <div className="text-center mt-3">
                  <small>
                    Don't have an account?{" "}
                    <span className={styles.link} onClick={logHandler} style={{ cursor: "pointer" }}>
                      Register
                    </span>
                  </small>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;


