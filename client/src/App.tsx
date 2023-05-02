import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Profil from "./components/Profil"
import { useState } from "react"

function App() {
  const [sessionToken, setSessionToken] = useState("")
  return (
    <>
      <BrowserRouter>
        <Header sessionToken={sessionToken} setSessionToken={setSessionToken} />
        <Routes>
          <Route path="/" element={<Home sessionToken={sessionToken} />} />
          <Route
            path="/login"
            element={<Login setSessionToken={setSessionToken} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
