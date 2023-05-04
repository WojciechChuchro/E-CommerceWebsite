import React from "react"
interface userInterface {
  username: String
  email: String
  authentication: {
    password: String
    salt: String
    sessionToken: String
  }
}
const Profil = ({
  currentUser,
}: {
  currentUser: userInterface | undefined
}) => {
  return (
    <div>
      {currentUser?.username
        ? currentUser?.username
        : "You must log in to see username"}
    </div>
  )
}

export default Profil
