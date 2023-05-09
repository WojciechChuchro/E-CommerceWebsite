import { register, login } from "./../controllers/authentication"
import express from "express"
import { check } from "express-validator"
export default (router: express.Router) => {
  router.post(
    "/auth/register",
    [
      check("email", "Your address email is invalid.").isEmail(),
      check(
        "password",
        "Your password must have atleast 6 characters."
      ).isLength({ min: 6 }),
    ],
    register
  )
  router.post("/auth/login", login)
}
