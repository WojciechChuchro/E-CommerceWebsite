import { Index } from "./index"

export interface User extends Index {
  username: string | null
  email: string | null
  sessionToken: string | null
  errors: [Errors] | []
}

export interface RegisterUser {
  status: string | null
  errors: [Errors] | []
}

export interface Errors {
  type: string
  value: string
  msg: string
  path: string
  location: string
}
