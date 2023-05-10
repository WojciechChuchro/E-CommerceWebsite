import { getUserByEmail, getUserByUsername } from "../models/users.model"

export const checkUserExistsByEmail = async (email: string) => {
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return Promise.reject("User with this email already exists.")
  }
}

export const checkUserExistsByUsername = async (username: string) => {
  const existingUser = await getUserByUsername(username)

  if (existingUser) {
    return Promise.reject("User with this username already exists.")
  }
}
