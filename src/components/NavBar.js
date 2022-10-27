import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import logo from '../images/logo.png'


const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img
              src={logo}
              height="40"
              className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
              Home
          </Nav.Link>
          <Nav.Link as={Link} to='/category/2020'>2020s</Nav.Link>
          <Nav.Link as={Link} to='/category/2010'>2010s</Nav.Link>
          <Nav.Link as={Link} to='/category/2000'>2000s</Nav.Link>
          <Nav.Link as={Link} to='/category/1990'>1990s</Nav.Link>
          <Nav.Link as={Link} to='/category/1980'>1980s</Nav.Link>
          <Nav.Link as={Link} to='/category/1970'>1970s</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;