import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Styles from "../styles/Modal.module.css";

const ModalFunc = ({ show, setShow, login, setLogin, items }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [display, setDisplay] = useState(0);
  const [value, setValue] = useState(0);
  const { id, type, title, placeholder, passTit, password } = items[display];
  console.log(display);

  useEffect(() => {}, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header
          style={{
            justifyContent: "center",
            marginTop: "20vh",
            borderBottom: "none",
          }}
        >
          <Modal.Title>Sign in to your account</Modal.Title>
        </Modal.Header>
        <Row
          style={{
            margin: "auto",
            paddingTop: "20px",
            width: "60%",

            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col onClick={() => setDisplay(0)}>Sign in with Email</Col>
          <Col onClick={() => setDisplay(1)}>Login with Phone Number</Col>
        </Row>
        <Modal.Body style={{ margin: "auto" }}>
          <Form>
            <Form.Label>
              {title}
              <sup style={{ color: "red", fontSize: "85%", top: "-0.3em" }}>
                *
              </sup>
            </Form.Label>
            {display === 0 ? (
              <div
                className="input"
                style={{
                  width: "42vw",
                  height: "65px",
                }}
              >
                <Form.Control
                  type={type}
                  placeholder={placeholder}
                  style={{
                    height: "100%",
                    backgroundColor: " rgba(244,244,244,0.45)",
                  }}
                />
              </div>
            ) : (
              <div
                className="input"
                style={{
                  width: "42vw",
                  height: "65px",
                }}
              >
                <InputGroup
                  style={{
                    height: "100%",
                  }}
                >
                  <InputGroup.Prepend>
                    <img
                      src="./assets/GH.png"
                      alt="ghana"
                      style={{
                        height: "100%",
                        width: "30px",
                      }}
                    />
                    <InputGroup.Text

                    // style={{
                    //   height: "100%",
                    // }}
                    >
                      +233
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{
                      height: "100%",
                    }}
                  />
                </InputGroup>
              </div>
            )}
            <br />
            <Form.Label>
              {passTit}
              <sup style={{ color: "red", fontSize: "85%", top: "-0.3em" }}>
                *
              </sup>
            </Form.Label>
            <div
              className="input"
              style={{
                width: "42vw",
                height: "65px",
              }}
            >
              <Form.Control
                type={type}
                placeholder={password}
                style={{
                  height: "100%",
                  backgroundColor: " rgba(244,244,244,0.45)",
                }}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{
            borderTop: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <span>Forgot Password?</span>
            <span style={{ fontWeight: "bolder", padding: "0 30px" }}>
              Reset It
            </span>
          </div>

          <Button
            variant="outline"
            style={{
              backgroundColor: "rgb(255, 209, 71",
              padding: "0 30px",
              height: "50px",
              fontSize: "18px",
              width: "38%",
            }}
            onClick={handleClose}
            size="lg"
          >
            Sign In
          </Button>
        </Modal.Footer>
        <div style={{ height: "10vh" }}></div>
      </Modal>
    </>
  );
};

export default ModalFunc;
