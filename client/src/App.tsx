import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Profil from "./components/Profil"
import { useState } from "react"
interface userInterface {
  username: String
  email: String
  authentication: {
    password: String
    salt: String
    sessionToken: String
  }
}
function App() {
  const [currentUser, setCurrentUser] = useState<userInterface | undefined>()
  return (
    <>
      <BrowserRouter>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setCurrentUser={setCurrentUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profil"
            element={<Profil currentUser={currentUser} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
