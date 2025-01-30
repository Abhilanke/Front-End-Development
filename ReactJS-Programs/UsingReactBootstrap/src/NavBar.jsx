import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

function NavBar() {
  const [count, setCount] = useState(0);
  function Adding() {
    setCount(count + 1);
  }
  function Adding2() {
    setCount(count - 1);
  }
  if (count < 0) {
    setCount(0);
    alert("( - ) value is not allowed ");
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Men</Nav.Link>
            <Nav.Link href="#pricing">Women</Nav.Link>
            <Nav.Link href="#pricing">Kids</Nav.Link>
            <Nav.Link href="#pricing">Beauty</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div style={{ textAlign: "center", display: "block" }}>
        <h2>Assignment</h2>
        <p>Count: {count}</p>
        <Button variant="primary" onClick={Adding2}>
          -
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="success" onClick={Adding}>
          +
        </Button>
      </div>
      <br />
      <br />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/first.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger" size="lg">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
        &nbsp;&nbsp;&nbsp;
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/second.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger" size="lg">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
        &nbsp;&nbsp;&nbsp;
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/fouth.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger" size="lg">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/first.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger" size="lg">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
        &nbsp;&nbsp;&nbsp;
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/second.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger" size="lg">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
        &nbsp;&nbsp;&nbsp;
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/fouth.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger" size="lg">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default NavBar;
