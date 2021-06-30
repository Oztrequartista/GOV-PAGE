import Head from "next/head";
import Styles from "../styles/Home.module.css";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Modal from "./modal";
import data from "../data";

const navLinks = [
  { id: 1, url: " ABOUT" },
  { id: 2, url: " FIND A SERVICE" },
  { id: 3, url: " CHECK APPLICATION SERVICE" },
  { id: 4, url: " GIVE FEEDBACK" },
];

const fetchedTable = [
  {
    id: 1,
    title: "General",
    desc: "Submit a report which does not fit into any particular category",
  },
  {
    id: 2,
    title: "Environmental Disturbance",
    desc: " Report environmental or noise pollution",
  },
  {
    id: 3,
    title: "Fraud & Corruption",
    desc: " Report fraudulent or corrupt activity",
  },
  { id: 4, title: "Galamsey", desc: " Report illegal mining activity" },
  { id: 5, title: "Ghana.GOV", desc: " Report Report an issue with Ghana.GOV" },
  { id: 6, title: "Recommendations", desc: " Make recommendations" },
  {
    id: 7,
    title: "Praise",
    desc: "Submit positive feedback on any public official",
  },
];

export default function Home() {
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [items, setItems] = useState(data);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Container className={Styles.holder} fluid>
      <Modal
        show={show}
        setShow={setShow}
        login={login}
        setLogin={setLogin}
        items={items}
      />
      <div
        style={{
          backgroundColor: "white !important",
        }}
      >
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
              What do you want to report about?
            </Col>
          </Row>

          <Container>
            <Row xs={1} md={3} className={`pt-4 mt-4 ${Styles.card}`}>
              {fetchedTable.map((item, index) => {
                const { id, title, desc } = item;

                return (
                  <Card
                    key={id}
                    className={`pt-4 ${id === active && `${Styles.click}`} `}
                    onClick={() => setActive(id)}
                    id={Styles.hove}
                  >
                    <Card.Body className="pt-2 mt-4">
                      <Card.Title
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h6> {title}</h6>
                        {id === active ? (
                          <img
                            src="/assets/green-checkmark.png"
                            width="25px"
                            height="25px"
                            className="jsx-1521882906"
                          ></img>
                        ) : null}
                      </Card.Title>
                      <Card.Text
                        style={{ fontWeight: "100", fontSize: "15px" }}
                      >
                        {desc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Row>
            <br />
            <hr />
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
              className={Styles.next}
            >
              Next
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
