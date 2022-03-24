import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
  
    return (
        <div className='mb-5'>
            <Navbar bg="light" expand="lg">
  <Container fluid>
  <Navbar.Brand href="#">Ema-John</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0 mx-auto"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Shop</Nav.Link>
        <Nav.Link href="#action2">Order Review</Nav.Link>
        <Nav.Link href="#action3">Cart<sup className='bg-danger p-2 rounded-circle'>0</sup> </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;