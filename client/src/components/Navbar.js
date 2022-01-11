import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Notes App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Notes</Nav.Link>
              <Nav.Link as={Link} to="/create">Create Note</Nav.Link>
              <Nav.Link as={Link} to="/user">Create User</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
