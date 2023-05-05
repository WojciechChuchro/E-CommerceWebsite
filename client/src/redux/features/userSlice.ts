import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../types/sessionTokenInterface"

const initialState: User = {
  username: null,
  email: null,
  sessionToken: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.sessionToken = action.payload.sessionToken
    },
    logout: (state) => {
      state.username = null
      state.email = null
      state.sessionToken = null
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
