import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState<String>()
  const [username, setUsername] = useState<String>()
  const navigate = useNavigate()

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value)

  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)
  const onUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value)
  const handleSubmit = () => {
    const registerData = { email, password, username }
    axios
      .post("http://localhost:8080/auth/register", registerData)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    navigate("/")
  }
  return (
    <Form className="m-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={onUsername}
          type="username"
          required
          placeholder="Enter username"
        />
      </Form.Group>
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

export default Register
