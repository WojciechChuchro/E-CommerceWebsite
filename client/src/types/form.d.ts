export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData extends LoginFormData {
  username: string
}

export interface ProfileFormData {
  username: string | null
  email: string | null
  password: string | null
  sessionToken: string | null
}
