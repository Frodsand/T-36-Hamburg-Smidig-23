import Header from '../components/header';
import "../styling/dashboard.css"

function Dashboard(){
    return(
        <>
            <header className='header'><Header /></header>
            <div className='mainGrid'>
                <div className='welcome'>
                <h1 className='welcomeTitle'>Dashboard</h1>
                <p className='welcomeMessage'>This is the dashboard page</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard;