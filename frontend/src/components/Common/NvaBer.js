import React from 'react';
import {Navbar,Container, Nav}  from "react-bootstrap"

const NvaBer = () => {
    return (
        <div>
           
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">List</Nav.Link>
            <Nav.Link href="#link">Create</Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NvaBer;