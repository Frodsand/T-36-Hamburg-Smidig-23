import NavgationBar from '../components/Nav_bar';
import Header from '../components/header';
import "../styling/dashboard.css"

function Dashboard() {

    const handleOnClick = () => {
        window.location.href = '/Planner';
    }

    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='mainGrid'>
                <div className='my-plan-card'>
                    <h1 className='my-plan-title'>Min årsplan</h1>
                    <button onClick={handleOnClick} type='button' className='my-plan-button'>Gå til min årsplan</button>
                </div>
                <div className='nav-bar'>
                    <NavgationBar />
                </div>
            </div>
        </>
    )
}

export default Dashboard;
