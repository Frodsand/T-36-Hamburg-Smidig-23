import Header from '../components/header';
import {Ingredient} from '../components/showIngredient'

function Dashboard(){
    return(
        <div>
            <header><Header /></header>
            <h1>Dashboard</h1>
            <p>This is the dashboard page</p>
            <Ingredient />
        </div>
    )
}

export default Dashboard;