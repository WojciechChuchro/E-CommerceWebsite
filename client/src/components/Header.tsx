import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Header = (props: { sessionToken: String; setSessionToken: Function }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">E-Commerce Website!</Navbar.Brand>
        {props.sessionToken ? (
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profil">Profil</Nav.Link>
            <Nav.Link onClick={() => props.setSessionToken("")}>
              Logout
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Sign up</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}

export default Header
