import '../styling/schedule.css'
import LectureCard from '../components/LectureCard'
import SidebarComponent from '../components/SidebarComponent'
import { useEffect } from "react";
import { useLectureContext } from "../hooks/useLectureContext";


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
            <h1>{semesterPlanTitle}</h1>
            <section className="gridContainer">
            
            </section>

            <section className='sidebarContainer'>
                <SidebarComponent></SidebarComponent>
            </section>
        </div>
    )
}

export default Schedule;