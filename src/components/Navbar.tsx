import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/beers"} as={NavLink}>
            All Beers
          </Nav.Link>
          <Nav.Link to={"/random-beer"} as={NavLink}>
            Random Beer
          </Nav.Link>
          <Nav.Link to={"/new-beer"} as={NavLink}>
            New Beer
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
