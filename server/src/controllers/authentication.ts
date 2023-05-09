import express from "express"
import { check, validationResult } from "express-validator"
import {
  getUserByEmail,
  createUser,
  getUserBySessionToken,
} from "../models/users.model"
import { random, authentication } from "../helpers/index"

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const errors = validationResult(req)
    const { email: reqEmail, password } = req.body

    if (!reqEmail || !password) {
      return res.sendStatus(400).json({
        errors: [
          {
            msg: "Invalid Credentials",
          },
        ],
      })
    }

    const user = await getUserByEmail(reqEmail).select(
      "+authentication.salt +authentication.password"
    )

    if (!user) {
      return res.sendStatus(400).json({
        errors: [
          {
            msg: "Invalid Credentials",
          },
        ],
      })
    }

    const expectedHash = authentication(user.authentication.salt, password)

    if (user.authentication.password !== expectedHash) {
      return res.sendStatus(403)
    }

    const salt = random()
    user.authentication.sessionToken = authentication(salt, user._id.toString())

    await user.save()

    res.cookie("E-COMMERCE-WEBSITE-AUTH", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    })

    const {
      username,
      email,
      authentication: { sessionToken },
    } = user

    const userObject = { username, email: reqEmail, sessionToken }

    return res.status(200).json(userObject).end()
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body
    const errors = validationResult(req)
    if (!email || !password || !username) {
      return res.status(400).send("Your inputs cannot be empty.")
    }

    if (!errors.isEmpty()) {
      return res.send({
        errors: errors.array(),
      })
    }

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
      return res.status(400).send("User with this email already exists.")
    }

    const salt = random()
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    })

    return res.status(200).json(user).end()
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}
