import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import React, { useState } from "react"
import { RegisterFormData } from "../types/form"
import { registerUser } from "../redux/features/registrationSlice"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { Spinner } from "react-bootstrap"
import AlertDanger from "./AlertDanger"

const Register = () => {
  const dispatch = useAppDispatch()
  const register = useAppSelector((state) => state.registerUser)
  const { status, errors } = register
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    username: "",
    password: "",
  })

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, email: event.target.value })
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, password: event.target.value })
  const onUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, username: event.target.value })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      dispatch(registerUser(formData))
    } catch (error) {
      console.error("Failed to register", error)
    }
  }

  return (
    <>
      {!errors?.length ? (
        <Form className="m-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={formData.username}
              onChange={onUsername}
              type="username"
              required
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={formData.email}
              onChange={onEmail}
              type="email"
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={formData.password}
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
      ) : (
        <Form className="m-5" onSubmit={handleSubmit}>
          {errors.map((error) => {
            return <AlertDanger key={error.msg} message={error.msg} />
          })}
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={formData.username}
              onChange={onUsername}
              type="username"
              required
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={formData.email}
              onChange={onEmail}
              type="email"
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={formData.password}
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
      )}
    </>
  )
}

export default Register
