import '../styling/details.css'
import LecturePlan from'../components/LecturePlan'
import { useLocation } from 'react-router-dom'

function DetailPage (){

    const location = useLocation();
    console.log('location', location)
    const { lectureObject } = location.state;

    return (
        <div>
            <h1 className="week-plan">Denne ukes plan</h1>
            <div>
                <LecturePlan lectureObject={lectureObject} />
            </div>
      </div>
    );
}

export default DetailPage;

 