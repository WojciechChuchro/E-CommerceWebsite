import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { Items } from "./../../types/item.d"
import axios, { isAxiosError } from "axios"

const initialState: Items = {
  items: [],
  status: "idle",
  error: null,
}

const BASE_URL = "http://localhost:8080/"

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getItems.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.items = [...action.payload]
      })
      .addCase(getItems.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const getItems = createAsyncThunk(
  "items",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}items`)
      return response.data
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data)
      }
      throw error
    }
  }
)
export default itemSlice.reducer
