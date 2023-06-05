import "../styling/header.css"
import { AiOutlineUser } from "react-icons/ai"

const Header = () => {

    const logo = require("../resources/images/logo.png")

    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
            <div className="user-icon-box">
                <AiOutlineUser className="user-icon"/>
            </div>
        </header>
    )
}

export default Header