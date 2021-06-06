import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class ContactForm extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    comments: "",
    sent: false,
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleComments = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      comments: this.state.comments,
    };

    axios
      .post("/api/forma", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      lastname: "",
      email: "",
      comments: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <div>
        <div>
          <Form style={{ marginTop: "40px" }}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  style={{ width: "450px", marginLeft: "120px" }}
                  type="email"
                  placeholder="Enter Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleName}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  style={{ width: "450px", marginLeft: "120px" }}
                  type="LastName"
                  placeholder="Enter LastName"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleLastName}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ width: "1150px", height: "60px", marginLeft: "120px" }}
                placeholder="abc@gmail.com"
                name="email"
                value={this.state.email}
                onChange={this.handleEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formcomments">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                style={{
                  height: "100px",
                  width: "1150px",
                  marginLeft: "120px",
                }}
                placeholder="Text"
                name="comments"
                value={this.state.comments}
                onChange={this.handleComments}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
