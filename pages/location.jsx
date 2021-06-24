import React, { useState, useEffect } from "react";
// import BootstrapSwitchButton from "bootstrap-switch-button-react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import dynamic from "next/dynamic";

const BootstrapSwitchButton = dynamic(
  () => import("bootstrap-switch-button-react"),
  {
    loading: () => <p>loading</p>,
    ssr: false, // This line is important. It's what prevents server-side render
  }
);

import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Styles from "../styles/Location.module.css";

const navLinks = [
  { id: 1, url: " ABOUT" },
  { id: 2, url: " FIND A SERVICE" },
  { id: 3, url: " CHECK APPLICATION SERVICE" },
  { id: 4, url: " GIVE FEEDBACK" },
];

const location = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [check, setCheck] = useState();
  const [currentLocation, setCurrentLocation] = useState("");
  const radioClick = () => {
    setCheck(!check);
  };
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.", window);
    }
  }

  const showPosition = (position) => {
    const longitude = position.coords.longitude;
    setLongitude(longitude);
    const latitude = position.coords.latitude;
    setLatitude(latitude);
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getData = async () => {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}longitude=${longitude}&localityLanguage=en`;
    // const url = `https://api.bigdatacloud.net/data/reverse-geocode-client/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const { countryName, locality } = data;
    setCurrentLocation((prev) => countryName + " , " + locality);
  };
  useEffect(() => {
    if (!longitude || !latitude) return;
    getData();
  }, [longitude, latitude]);
  const date = new Date();
  const time = date.getTime();
  console.log(time);
  const dateArray = date.toDateString().split(" ");
  const dateFormat = dateArray[2] + " " + dateArray[1] + ", " + dateArray[3];
  console.log(dateFormat);

  return (
    <Container className={Styles.holder} fluid>
      <div
        style={{
          backgroundColor: "white !important",
        }}
      >
        <Container>
          <Navbar expand="lg" className={Styles.navBar} m="auto">
            <Navbar.Brand href="#home">
              <img
                src="/assets/gov-logo.png"
                alt="logo"
                className={Styles.logo}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" id={Styles.nana}>
                {navLinks.map((navlink) => {
                  const { id, url } = navlink;
                  return (
                    <Nav.Link href={url} className={Styles.navText} key={id}>
                      {url}
                    </Nav.Link>
                  );
                })}
              </Nav>
              <Nav className="ml-auto" id={Styles.nana}>
                <Nav.Link href="#home" className={Styles.navText}>
                  LOG IN
                </Nav.Link>
                <Nav.Link href="#features" className={Styles.navText}>
                  SIGN UP
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      <Container className={Styles.pageContainer} xs="12">
        <h3
          style={{
            fontWeight: "600px",
            fontSize: "16px",
            padding: "10px",
          }}
        >
          NEW FEEDBACK
        </h3>

        <Container className={Styles.page} fluid>
          <Row>
            <div className={Styles.progressBar}>
              <div className={Styles.dots}>
                <div className={Styles.dotsInnerActive}></div>
              </div>
              <div className={Styles.dotsInner}>
                <div></div>
              </div>
              <div className={Styles.dotsInner}>
                <div></div>
              </div>
              <div className={Styles.dotsInner}>
                <div></div>
              </div>
            </div>
          </Row>
          <Row>
            <Col style={{ textAlign: "center", fontSize: "20px" }}>
              Where did this occur?
            </Col>
          </Row>
          <Container className={Styles.locationBar} style={{ margin: "auto" }}>
            <Form
              style={{
                // border: "2px solid red",
                width: "80%",
                margin: "auto",

                padding: "30px",
              }}
            >
              <FormControl
                aria-label="Text input with radio button"
                placeholder="Enter your location"
                style={{
                  padding: "25px",
                  marginBottom: "10px",
                }}
                disbaled
              />

              <div
                style={{
                  padding: "25px",
                  border: "1px solid #ced4da",
                  width: "100%",
                  height: "calc(1.5em + .75rem + 2px)",
                  padding: ".375rem .75rem",
                  padding: "25px",
                  position: "relative",
                  background: "#f4f4f4",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                onClick={() => setCheck(!check)}
              >
                <Form.Check
                  type="radio"
                  checked={check ? "checked" : null}
                  style={{
                    margin: "auto",
                    position: "absolute",
                    top: "30%",
                    left: "2%",
                    color: "black",
                  }}
                />
                <label htmlFor="location">
                  {check ? `${currentLocation}` : null}
                </label>
              </div>
            </Form>
            {/* <hr style={{ width: "80%" }} /> */}
            <Row
              style={{
                // border: "2px solid red",
                width: "80%",
                margin: "auto",
                marginTop: "20px",
                padding: "1%",
              }}
            >
              <Col style={{ borderRight: "1px solid rgba(0,0,0,.1)" }}>
                <span>
                  Enter Date{" "}
                  <span style={{ marginRight: "50px" }}>(optional)</span>
                  <BootstrapSwitchButton
                    checked={false}
                    onlabel=" "
                    offlabel=" "
                    size="xs"
                    onstyle="success"
                  />
                </span>

                <h4>{dateFormat}</h4>
              </Col>
              <Col>
                <span>
                  Enter Time{" "}
                  <span style={{ marginRight: "50px" }}>(optional)</span>
                  <BootstrapSwitchButton
                    checked={false}
                    onlabel=" "
                    offlabel=" "
                    size="xs"
                    onstyle="success"
                  />
                </span>

                <h4>date</h4>
              </Col>
            </Row>
            <hr />

            <ArrowBackIcon />
            <Button
              variant="primary"
              style={{
                backgroundColor: "rgb(255, 209, 71)",
                padding: "0 30px",

                margin: "30px 0 30px 25%",

                height: "50px",
                fontSize: "18px",
                width: "50%",
                borderColor: "rgb(255, 209, 71)",
                color: "rgb(37, 37, 37)",
              }}
              size="lg"
            >
              Next
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default location;
