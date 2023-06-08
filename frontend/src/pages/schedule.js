import '../styling/schedule.css'
import Header from '../components/header';
import LectureCard from '../components/LectureCard'
import { useEffect } from "react";
import { useLectureContext } from "../hooks/useLectureContext";
import SidebarComponent from '../components/SidebarComponent'



let semesterPlanTitle = "Undervisningsplan"

function Schedule () {

    const { lectures, dispatch } = useLectureContext();

    useEffect(() => {
        const fetchLectures = async () => {
          const response = await fetch("/api/lectures");
          const json = await response.json();
    
          if (response.ok) {
            dispatch({ type: "SET_LECTURES", payload: json });
          }
        };
    
        fetchLectures();
      }, [dispatch]);
    
      console.log('lectures', lectures)
    
    
    return (
        <div>
          <div className='header'>
                <Header />
            </div>
            <h1 className="semester-plan-title">{semesterPlanTitle}</h1>
            <section className="gridContainer">
              {lectures && lectures.map((lecture) => (<LectureCard  lectureObject={lecture} />))}
            </section>

            <section className='sidebarContainer'>
                <SidebarComponent></SidebarComponent>
            </section>
        </div>
    )
}

export default Schedule;