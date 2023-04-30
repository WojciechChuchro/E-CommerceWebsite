import Login from "./Login"
import Register from "./Register"

const Header = () => {
  return (
    <div className="flex justify-between m-2">
      <div>Header</div>
      <div className="flex ">
        <Login />
        <Register />
      </div>
    </div>
  )
}

export default Header
