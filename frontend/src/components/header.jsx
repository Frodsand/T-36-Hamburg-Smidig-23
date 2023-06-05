import "../styling/header.css"

const Header = () => {

    const logo = require("../resources/images/logo.png")

    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
        </header>
    )
}

export default Header