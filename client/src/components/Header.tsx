import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { logout } from "../redux/features/userSlice"
import { Link } from "react-router-dom"
const Header = () => {
  const dispatch = useAppDispatch()
  const { sessionToken } = useAppSelector((state) => state.user)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">E-Commerce Website!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="header-link" to="/">
              Home
            </Link>
            <Link className="header-link" to="#pricing">
              Pricing
            </Link>
          </Nav>
          {sessionToken ? (
            <Nav>
              <Link className="header-link" to="/profil">
                Profil
              </Link>
              <Nav.Link className="header-link" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Link className="header-link" to="/login">
                Login
              </Link>
              <Link className="header-link" to="/register">
                Signin
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
