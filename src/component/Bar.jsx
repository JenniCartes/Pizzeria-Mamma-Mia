import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Bar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Pizzería Mamma Mía<a href="Pizzería Mamma Mía"></a></Navbar.Brand>
          <Nav className="me-auto">
            <Button>Home</Button>
            <Button>Login</Button>
            <Button>Register</Button>
            
          </Nav>
          <Button>Total: $</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Bar
