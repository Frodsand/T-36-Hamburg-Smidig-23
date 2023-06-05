import '../styling/schedule.css'
import LectureCard from '../components/LectureCard'

let semesterPlanTitle = "Undervisningsplan"
let lecturesArray = [];

const getLectures = () => {
    //get all lectures in the semesterPlan from db
}

const printLectureCards = () => {
    //prints all cards in lectureArray

    //foreach lecture in lecturesArray
    // -> insert into "gridContainer"
    // -> 
}

function Schedule () {
    return (
        <div>
            <h1>{semesterPlanTitle}</h1>

            <section className="gridContainer">
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
              <LectureCard/>
                
            </section>
            
            
        </div>
    )
}

export default Schedule;