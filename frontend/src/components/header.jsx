import "../styling/header.css"
import { AiOutlineUser } from "react-icons/ai"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'

const Header = () => {

    const { user } = useAuthContext()
    const { logout } = useLogout()
    const logo = require("../resources/images/logo.png")


    const handleOnClick = () => {
        window.location.href = "/home"
    }

    const handleClick = () => {
        logout()
    }

    return (
        <header className="header">
            <button className="go-home-button" onClick={handleOnClick}>
                <img className="logo" src={logo} alt="logo" />
            </button>
            { user && (
            <div> 
            <span>Logged in user: { user.username }</span>
            </div>
            )}
            <div>
                <button onClick={handleClick}>Logout</button>
            </div>
            <div className="user-icon-box">
                <AiOutlineUser className="user-icon"/>
            </div>
        </header>
    )
}

export default Header