import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function UserForm() {
  return (
    <div className="container mt-5">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label style={{ textAlign: "left", display: "block" }}>
              First Name
            </Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
            <Form.Label style={{ textAlign: "left", display: "block" }}>
              Last Name
            </Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label style={{ textAlign: "left", display: "block" }}>
            Email
          </Form.Label>
          <Form.Control type="email" placeholder="you@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLinkedIn">
          <Form.Label style={{ textAlign: "left", display: "block" }}>
            LinkedIn
          </Form.Label>
          <Form.Control type="text" placeholder="LinkedIn.com" />
        </Form.Group>

        <Form.Group controlId="formResume" className="mb-3">
          <Form.Label style={{ textAlign: "left", display: "block" }}>
            Resume
          </Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button
          style={{ textAlign: "left", display: "block" }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserForm;
