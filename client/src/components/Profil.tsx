import { Table, Container, InputGroup, Form, Button } from "react-bootstrap"
import { useAppSelector } from "../hooks/redux"
import { useState } from "react"
import { ProfileFormData } from "../types/form"

const Profil = () => {
  const user = useAppSelector((state) => state.user)
  const { email, username, sessionToken } = user

  const [formData, setFormData] = useState<ProfileFormData>({
    username: "",
    email: "",
    password: "",
  })

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, username: event.target.value })

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, email: event.target.value })

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, password: event.target.value })

  return (
    <Container>
      <Form>
        <InputGroup className=" my-3">
          <InputGroup.Text id="username">Username</InputGroup.Text>
          <Form.Control
            className="profile-form-control"
            value={username ? username : undefined}
            onChange={onUsernameChange}
            aria-label="Username"
            aria-describedby="username"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="email"> Email</InputGroup.Text>
          <Form.Control
            className="profile-form-control"
            value={email ? email : undefined}
            onChange={onEmailChange}
            aria-label="Email"
            aria-describedby="email"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="passowrd">Password</InputGroup.Text>
          <Form.Control
            className="profile-form-control"
            placeholder="*********"
            onChange={onPasswordChange}
            aria-label="passowrd"
            aria-describedby="passowrd"
          />
        </InputGroup>
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  )
}

export default Profil
