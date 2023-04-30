import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const handleLogin = () => navigate("/login")
  const handleRegister = () => navigate("/register")

  return (
    <div className="flex justify-between m-2 ">
      <div>Header</div>
      <div className="flex ">
        <div className="pr-5">
          <span
            onClick={handleLogin}
            className="cursor-pointer bg-beige py-1 px-3 text-darkBlue rounded-lg"
          >
            Login
          </span>
        </div>
        <div className="">
          <span
            onClick={handleRegister}
            className="cursor-pointer bg-lime-500 bg-beige py-1 px-3 text-darkBlue rounded-lg"
          >
            Register
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
