import { useAppSelector } from "../hooks/redux"

const Profil = () => {
  const { username, email, sessionToken } = useAppSelector(
    (state) => state.user
  )
  return (
    <div>
      {username && email && sessionToken
        ? `Username: ${username}`
        : "You must log in to see username"}
    </div>
  )
}

export default Profil
