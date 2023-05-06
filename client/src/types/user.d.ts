import { Index } from "./index"

export interface User extends Index {
  username: string | null
  email: string | null
  sessionToken: string | null
}
