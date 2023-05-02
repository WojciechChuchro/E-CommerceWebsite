import { useNavigate } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
const Header = () => {
  const navigate = useNavigate()
  const handleLogin = () => navigate("/login")
  const handleRegister = () => navigate("/register")

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Sign up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
