import { Container, Nav, Navbar } from "react-bootstrap";
import { GiBoomerangSun } from "react-icons/gi";

const NavBarT = () => {
  return (
    <Navbar expand="lg" className="navbar bg-dark border-bottom border-body text-light navbarOpacity">
      <Container className="text-light">
        <Navbar.Brand href="#home" className="text-light">
          <GiBoomerangSun className="iconLogo me-5" /> Teo Pi Weather
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarT;
