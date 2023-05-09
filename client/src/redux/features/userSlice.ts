import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { User } from "../../types/user"
import axios, { isAxiosError } from "axios"
import { LoginFormData, ProfileFormData } from "../../types/form"

const initialState: User = {
  username: null,
  email: null,
  sessionToken: null,
  status: "idle",
  error: null,
}
const BASE_URL = "http://localhost:8080/"
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
      return rejectWithValue(error.message)
    }
    throw error
  }
})

export const updateUser = createAsyncThunk<
  User,
  ProfileFormData,
  { rejectValue: any }
>("users/update", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.patch(BASE_URL + "users/update", credentials)
    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.message)
    }
    throw error
  }
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.username = action.payload.username
        state.email = action.payload.email
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
