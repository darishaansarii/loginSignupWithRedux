
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../slice/authSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../Login/Login.module.css"; 

const Signup = ({ logHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, error, isAuthenticated, user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agree) {
      alert("Please agree to the terms & conditions");
      return;
    }

    dispatch(signupUser({ name, email, password }));
  };

  return (
    <div className={styles.pageWrapper}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5} xl={4}>
            <Card className={`p-4 ${styles.loginCard}`}>
              <h3 className={`text-center mb-4 ${styles.title}`}>Create Account</h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className={styles.label}>Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter name" 
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

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

                <Form.Group className="mb-3">
                  <Form.Label className={styles.label}>Confirm Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Confirm password" 
                    className={styles.input}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Check 
                  type="checkbox" 
                  label="I agree to the terms & conditions" 
                  className={styles.checkBox}
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />

                {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
                {isAuthenticated && <p style={{ color: "green", fontSize: "0.9rem" }}>Welcome {user?.name}, account created!</p>}

                <Button type="submit" className={`w-100 mt-3 ${styles.loginBtn}`} disabled={isLoading}>
                  {isLoading ? "Signing Up..." : "Sign Up"}
                </Button>

                <div className="text-center mt-3">
                  <small>
                    Already have an account?{" "}
                    <span className={styles.link} onClick={logHandler} style={{ cursor: "pointer" }}>
                      Login
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

export default Signup;

