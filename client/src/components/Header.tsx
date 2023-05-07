import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { logout } from "../redux/features/userSlice"
import { Link, useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { sessionToken } = useAppSelector((state) => state.user)

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
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
            <Link className="header-link" to="/about">
              About
            </Link>
          </Nav>
          {sessionToken ? (
            <Nav className="header-nav">
              <Link className="header-link" to="/profile">
                Profil
              </Link>
              <span className="header-link" onClick={handleLogout}>
                Logout
              </span>
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
