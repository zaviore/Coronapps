import { Jumbotron, Container, Row, Col, Card, Form } from "react-bootstrap";
import React from "react";
import "../App.css";
import moment from "moment";
class Content extends React.Component {
  render() {
    return (
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
        <h4>Profile</h4>
        <p> Nama : Zamhadi</p>
        <button>Facebook</button>
        <button>github</button>
      </Card>
    );
  }
}
export default Content;
