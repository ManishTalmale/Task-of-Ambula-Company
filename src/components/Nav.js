import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Manish</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/home" style={{ marginRight: "20px" }}>Home</NavLink>
            <NavLink to="/about" style={{ marginRight: "20px" }} >About</NavLink>
            <NavLink to="/contact" style={{ marginRight: "20px" }}>Contact</NavLink>
            <NavLink to="/todo" style={{ marginRight: "20px" }}>To-Do-List</NavLink>
            <NavLink to="/cart" style={{ marginRight: "20px" }}>Shopping</NavLink>
            <NavLink to="/apidata" style={{ marginRight: "20px" }}>Api-Data</NavLink>
            <NavLink to="/form" >Form-Validation</NavLink>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;