import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/' >The Record Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' >Home</Nav.Link>
            <Nav.Link as={Link} to='/category/arctic' >Arctic Monkeys</Nav.Link>
            <Nav.Link as={Link} to='/category/oasis' >Oasis</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;