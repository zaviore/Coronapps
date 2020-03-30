import { Navbar, FormControl, Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import React from "react";

class Navs extends React.Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#fc7844" }} variant="light">
          <Navbar.Brand href="#home">
            <b style={{ color: "white" }}>Corona</b>{" "}
            <img src={Logo} style={{ width: 40 }} />
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Link to="/About">
              <Button variant="">
                <b>About</b>
              </Button>
            </Link>
          </Form>
        </Navbar>
      </div>
    );
  }
}
export default Navs;
