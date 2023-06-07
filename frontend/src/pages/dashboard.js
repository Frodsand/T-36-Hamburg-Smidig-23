import Header from '../components/header';
import Lectures from '../components/showLectures'

function Dashboard(){
    return(
        <div>
            <header><Header /></header>
            <h1>Dashboard</h1>
            <p>This is the dashboard page</p>
            <Lectures />
        </div>
    )
}

export default Dashboard;