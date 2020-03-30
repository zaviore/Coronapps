import { Jumbotron, Container, Row, Col, Card, Form } from "react-bootstrap";
import World from "../images/world.png";
import Virus from "../images/virus.png";
import Notes from "../images/notes.png";
import Health from "../images/health.png";
import Rip from "../images/rip.png";
import Watch from "../images/watch.png";
import React from "react";
import "../App.css";

class Content extends React.Component {
  render() {
    return (
      <Jumbotron fluid style={{ height: "100%" }}>
        <Container style={{ width: "70%" }}>
          <Row>
            <Col md={10}>
              <h1>Mapping Corona Virus</h1>
              <p>Update your information about corona virus</p>
            </Col>

            <Col md={2}>
              <img style={{ width: "110px" }} src={Virus}></img>
            </Col>
          </Row>
          <div>
            <Row>
              <Col md={4}>
                <Card
                  className="Neumorp"
                  style={{
                    alignItems: "center",
                    padding: "20px",
                    borderRadius: "15px",
                    backgroundColor: "#e6e6e6",
                    border: "0px"
                  }}
                >
                  <img style={{ width: "50px" }} src={World} />
                  <h4>Country</h4>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select" value="Choose...">
                      <option>Select Country</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  className="Neumorp"
                  style={{
                    alignItems: "center",
                    padding: "20px",
                    borderRadius: "15px",
                    backgroundColor: "#e6e6e6",
                    border: "0px"
                  }}
                >
                  <img style={{ width: "50px" }} src={Notes} />
                  <h4>Confirmed</h4>
                  <p>0</p>
                </Card>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <Card
                    className="Neumorp"
                    style={{
                      alignItems: "center",
                      padding: "20px",
                      borderRadius: "15px",
                      backgroundColor: "#e6e6e6",
                      border: "0px"
                    }}
                  >
                    <img
                      style={{
                        width: "80px"
                      }}
                      src={Health}
                    />
                    <h4>Recovery</h4>
                    <p>0</p>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
          {/* -------------------------------------------------------------------------------------- */}
          <div>
            <Row>
              <Col md={8}>
                <Card
                  className="Neumorp"
                  style={{
                    alignItems: "center",
                    padding: "20px",
                    borderRadius: "15px",
                    backgroundColor: "#e6e6e6",
                    border: "0px"
                  }}
                >
                  <img style={{ width: "50px" }} src={Rip} />
                  <h4>Death</h4>
                  <p>0</p>
                </Card>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <Card
                    className="Neumorp"
                    style={{
                      alignItems: "center",
                      padding: "20px",
                      borderRadius: "15px",
                      backgroundColor: "#e6e6e6",
                      border: "0px"
                    }}
                  >
                    <img
                      style={{
                        width: "50px"
                      }}
                      src={Watch}
                    />
                    <h4>Last Update</h4>
                    <p>0</p>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col style={{ padding: "20px" }}>
              {" "}
              <Card
                className="Neumorp"
                style={{
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "15px",
                  backgroundColor: "#e6e6e6",
                  border: "0px"
                }}
              >
                <h4>World Data Corona</h4>
                <img
                  style={{
                    width: "50px"
                  }}
                  src={Watch}
                />

                <p>0</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
export default Content;
