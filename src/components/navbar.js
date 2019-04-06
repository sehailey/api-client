import React from 'react'
import {
  Navbar,
  Nav,  
} from 'react-bootstrap'

const MainNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="/">Client</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNav
