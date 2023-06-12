import "../styling/Sidebar.css"


const NavgationBar = () => {

    const OnClickHome = () => {
        window.location.href = '/Home'
    }

    const OnClickPlanner = () => {
        window.location.href = '/Planner'
    }

    return (
        <div className="NavgationBar">
            <div className="sidebarBox">
                <div className="menu">
                    <li onClick={OnClickHome}>Home</li>
                    <li onClick={OnClickPlanner}>Schedule</li>
                </div>
            </div>
        </div>
    )
}

export default NavgationBar