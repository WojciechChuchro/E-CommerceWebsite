import axios from "axios"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../hooks/redux"
import { login, loginUser } from "../redux/features/userSlice"
import { User } from "../types/user"
import { LoginFormData } from "../types/form"

const Login = () => {
  const [addRequestStatus, setRequestStatus] = useState("idle")
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  })
  const loading =
    [formData.email, formData.password].every(Boolean) &&
    addRequestStatus === "idle"
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, email: event.target.value })

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, password: event.target.value })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setRequestStatus("pending")
      dispatch(loginUser(formData))
      navigate("/")
    } catch (error) {
      console.error("Failed to log in", error)
    } finally {
      setRequestStatus("idle")
    }
  }

  return (
    <Form className="m-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={formData.email}
          onChange={onEmailChange}
          type="email"
          required
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={formData.password}
          onChange={onPasswordChange}
          type="password"
          required
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          required
          label="Accept terms and conditions"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Login
