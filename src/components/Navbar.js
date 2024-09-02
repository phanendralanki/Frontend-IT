import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { useState } from "react"; 

function BasicExample() {
  //  state variable to manage the Navbar collapse state
  const [expanded, setExpanded] = useState(false);

  // Function to handle Nav item selection and close the Navbar on mobile
  const handleNavItemClick = () => {
    setExpanded(false); // Close the Navbar
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="bg-body-tertiary sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home">Swarnandhra</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle the Navbar
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/events" onClick={handleNavItemClick}>
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavItemClick}>
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
