import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarT = () => {
  return (
    <Navbar expand="lg" className="text-light navbarOpacity opacity ">
      <Container className="text-light">
        <Navbar.Brand>
          <Link className="text-light link-offset-2 link-underline link-underline-opacity-0" to={"/Info"}>
            {" "}
            Teo Pi Weather
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link text-light" to={"/"}>
              Home
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarT;
