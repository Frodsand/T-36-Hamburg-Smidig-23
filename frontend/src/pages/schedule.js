import '../styling/schedule.css'
import LectureCard from '../components/LectureCard'


let semesterPlanTitle = "Undervisningsplan"



function Schedule () {
    
    return (
        <div>
            <h1>{semesterPlanTitle}</h1>

            <section className="gridContainer">
              <LectureCard/>
            </section>
        </div>
    )
}

export default Schedule;