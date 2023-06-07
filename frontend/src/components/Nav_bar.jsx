
import "../styling/Sidebar.css"


const NavgationBar = () => {

    const OnClickHome = () => {
        window.location.href = '/Home'
    }

    const OnClickDetails = () => {
        window.location.href = '/Details'
    }

    const OnClickPlanner = () => {
        window.location.href = '/Planner'
    }



    return (

        <div className="NavgationBar">
            <div id="sidebarBox">
                <div className="menu"><li onClick={OnClickHome}> Home </li>
                    <li onClick={OnClickDetails}> Details</li>
                    <li onClick={OnClickPlanner}> Schedule</li></div>
            </div>
        </div>


    )
}

export default NavgationBar