import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RegisterUser } from "../../types/user"
import axios, { isAxiosError } from "axios"
import { RegisterFormData } from "../../types/form"

const initialState: RegisterUser = {
  status: "idle",
  errors: [],
}
const BASE_URL = "http://localhost:8080/"

export const registerUser = createAsyncThunk<
  RegisterUser,
  RegisterFormData,
  { rejectValue: any }
>("auth/register", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(BASE_URL + "auth/register", credentials)
    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.message)
    }
    throw error
  }
})

const registerUserSlice = createSlice({
  name: "registrationUser",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.errors = action.payload.errors
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed"
        state.errors = action.payload.errors
      })
  },
})

export default registerUserSlice.reducer
