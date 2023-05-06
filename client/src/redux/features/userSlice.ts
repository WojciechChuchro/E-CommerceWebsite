import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../types/user"
import axios, { isAxiosError } from "axios"
import { LoginFormData } from "../../types/form"

const BASE_URL = "http://localhost:8080/"

const initialState: User = {
  username: null,
  email: null,
  sessionToken: null,
  status: "idle",
  error: null,
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
      state.status = "idle"
      state.error = null
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.username = action.payload.username
        state.email = action.payload.email
        state.sessionToken = action.payload.sessionToken
        console.log(action.payload)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const loginUser = createAsyncThunk<
  User,
  LoginFormData,
  { rejectValue: any }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(BASE_URL + "auth/login", credentials)
    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data)
    }
    throw error
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
