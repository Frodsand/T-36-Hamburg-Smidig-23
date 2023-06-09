import '../styling/details.css'
import LecturePlan from'../components/LecturePlan'

function DetailPage (){
    return (
        <div>
            <h1 className="week-plan">Denne ukes plan</h1>
            
            <div>
                <LecturePlan/>
            </div>
            
      </div>
    );
}

export default DetailPage;

 