import Header from '../components/header';
import "../styling/dashboard.css"

function Dashboard(){
    return(
        <>
            <div className='header'>
                <Header />
            </div>
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