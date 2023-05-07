import { Container, InputGroup, Form, Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { useState } from "react"
import { ProfileFormData } from "../types/form"
import { useNavigate } from "react-router-dom"
import { updateUser } from "../redux/features/userSlice"

const Profil = () => {
  const user = useAppSelector((state) => state.user)
  const [addRequestStatus, setRequestStatus] = useState("idle")
  const { email, username, sessionToken } = user
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<ProfileFormData>({
    username,
    email,
    password: "",
    sessionToken,
  })
  console.log(formData)
  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, username: event.target.value })

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, email: event.target.value })

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, password: event.target.value })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setRequestStatus("pending")
      dispatch(updateUser(formData))
      navigate("/")
    } catch (error) {
      console.error("Failed to log in", error)
    } finally {
      setRequestStatus("idle")
    }
    navigate("/profile")
  }

  return (
    <Container>
      {sessionToken ? (
        <Form onSubmit={handleSubmit}>
          <InputGroup className=" my-3">
            <InputGroup.Text id="username">Username</InputGroup.Text>
            <Form.Control
              className="profile-form-control"
              value={formData.username ? formData.username : undefined}
              onChange={onUsernameChange}
              aria-label="Username"
              aria-describedby="username"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="email"> Email</InputGroup.Text>
            <Form.Control
              className="profile-form-control"
              value={formData.email ? formData.email : undefined}
              onChange={onEmailChange}
              aria-label="Email"
              aria-describedby="email"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="passowrd">Password</InputGroup.Text>
            <Form.Control
              type="password"
              className="profile-form-control"
              placeholder="*********"
              onChange={onPasswordChange}
              aria-label="passowrd"
              aria-describedby="passowrd"
            />
          </InputGroup>
          <Button type="submit">Save</Button>
        </Form>
      ) : (
        "Log in first! "
      )}
    </Container>
  )
}

export default Profil
