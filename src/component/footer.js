import { Navbar, FormControl, Button, Form, Nav } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Logo from "../images/logo.png";
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          style={{
            backgroundColor: "#fc7844",
            height: 50
          }}
          variant="light"
          sticky="bottom"
        >
          <b>&copy; Copyright </b> &nbsp; &nbsp;
          <a href="https://github.com/Zaviore/" style={{ color: "white" }}>
            Zaooo
          </a>
        </Navbar>
      </div>
    );
  }
}
export default Footer;
