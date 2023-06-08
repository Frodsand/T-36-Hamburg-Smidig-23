import '../styling/schedule.css'
import LectureCard from '../components/LectureCard'
import SidebarComponent from '../components/SidebarComponent'


let semesterPlanTitle = "Undervisningsplan"

function Schedule () {
    
    return (
        <div>
            <h1>{semesterPlanTitle}</h1>
            <section className="gridContainer">
              <LectureCard/>
            </section>

            <section className='sidebarContainer'>
                <SidebarComponent></SidebarComponent>
            </section>
        </div>
    )
}

export default Schedule;