import "../styling/header.css"
import { AiOutlineUser } from "react-icons/ai"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import {OutlineWhiteButton} from '../components/Buttons'


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
            <div className="userName"> 
            <span>{ user.username }</span>
            </div>
            )}
            <div className="logOut">
                <OutlineWhiteButton buttonText="logg ut" onClick={handleClick}></OutlineWhiteButton>
            </div>
            <div className="user-icon-box">
                <AiOutlineUser className="user-icon"/>
            </div>
        </header>
    )
}

export default Header