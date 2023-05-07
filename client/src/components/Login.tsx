import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { loginUser } from "../redux/features/userSlice"
import { LoginFormData } from "../types/form"
import Spinner from "react-bootstrap/Spinner"

const Login = () => {
  const user = useAppSelector((state) => state.user)
  const { status } = user
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, email: event.target.value })

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, password: event.target.value })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      dispatch(loginUser(formData))
    } catch (error) {
      console.error("Failed to log in", error)
    }
  }
  if (status === "succeeded") navigate("/")

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
      {status === "loading" ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        <Button variant="primary" type="submit">
          Submit
        </Button>
      )}
    </Form>
  )
}

export default Login
