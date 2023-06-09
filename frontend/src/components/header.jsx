import "../styling/header.css"
import { AiOutlineUser } from "react-icons/ai"
import { useAuthContext } from "../hooks/useAuthContext"

const Header = () => {

    const { user } = useAuthContext()
    const logo = require("../resources/images/logo.png")

    const handleOnClick = () => {
        window.location.href = "/home"
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
            <div className="user-icon-box">
                <AiOutlineUser className="user-icon"/>
            </div>
        </header>
    )
}

export default Header