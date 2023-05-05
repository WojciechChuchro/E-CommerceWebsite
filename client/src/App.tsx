import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Profil from "./components/Profil"
import { useState } from "react"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { ISessionToken } from "./types/sessionTokenInterface"

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
