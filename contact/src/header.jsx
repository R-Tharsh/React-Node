import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <h1>Contact Form</h1>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
