import axios from "axios"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const Login = ({ setCurrentUser }: { setCurrentUser: Function }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value)

  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)

  const handleSubmit = () => {
    const loginData = { email, password }
    axios
      .post("http://localhost:8080/auth/login", loginData)
      .then((response) => {
        console.log(response)
        setCurrentUser(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    navigate("/")
  }

  return (
    <Form className="m-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={onEmail}
          type="email"
          required
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={onPassword}
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
