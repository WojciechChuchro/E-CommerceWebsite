import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/userSlice"
import itemsReducer from "./features/itemSlice"
import registerUserSlice from "./features/registrationSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
    registerUser: registerUserSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
