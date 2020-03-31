import { Jumbotron, Container, Row, Col, Card, Form } from "react-bootstrap";
import Footer from "../component/footer";
import World from "../images/world.png";
import Virus from "../images/virus.png";
import Notes from "../images/notes.png";
import Health from "../images/health.png";
import Rip from "../images/rip.png";
import Watch from "../images/watch.png";
import Chart from "./chart";
import React from "react";
import "../App.css";
import axios from "axios";
import moment from "moment";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iso3: null,
      country: null,
      data: null
    };
  }

  getCountries = () => {
    axios({
      method: "get",
      url: "https://covid19.mathdro.id/api/countries",
      responseType: "json"
    }).then(response => {
      this.setState({ country: response.data.countries });
    });
  };

  getConfirmed = value => {
    axios({
      method: "get",
      url: "https://covid19.mathdro.id/api/countries/" + value,
      responseType: "json"
    }).then(response => {
      this.setState({ data: response.data });
    });
  };

  componentDidMount = async () => {
    this.getCountries();
    this.getConfirmed("AFG");
  };
  render() {
    const { data, country } = this.state;
    console.log(data);
    return (
      <Jumbotron
        fluid
        style={{ height: "100%", backgroundColor: "transparent" }}
      >
        <Container style={{ width: "80%" }}>
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
                    <Form.Control
                      as="select"
                      value={this.state.iso3}
                      onChange={e => {
                        console.log(e.target.value);
                        this.getConfirmed(e.target.value);
                      }}
                    >
                      {country != null ? (
                        country.map((item, index) => (
                          <option key={index} value={item.iso3}>
                            {item.name}
                          </option>
                        ))
                      ) : (
                        <option>Loading</option>
                      )}
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
                  <p>{data?.confirmed?.value}</p>
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
                    <p>{data?.recovered?.value}</p>
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
                  <p>{data?.deaths?.value}</p>
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
                    <p>
                      {" "}
                      {moment(data?.lastUpdate)
                        .subtract(3, "days")
                        .calendar()}
                    </p>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col style={{ padding: "20px" }}>
              {" "}
              <Chart legendPosition="bottom" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
export default Content;
