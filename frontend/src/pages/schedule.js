import React from 'react';
import '../styling/schedule.css';
import LectureCard from '../components/LectureCard';
import Header from '../components/header';
import SidebarComponent from '../components/SidebarComponent';
import { useLectureContext } from '../hooks/useLectureContext';
import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

let semesterPlanTitle = "Undervisningsplan"

function Schedule() {

  const { lectures, dispatch } = useLectureContext();
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchLectures = async () => {
      const response = await fetch("/api/lectures", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_LECTURES", payload: json });
      }
    };

    if(user){
      fetchLectures();
    }

  }, [dispatch, user]);

  console.log('lectures', lectures)

  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <h1 className='semester-plan-title'>{semesterPlanTitle}</h1>
      <section className="gridContainer">
        {lectures && lectures.map((lecture) => (
          <LectureCard key={lecture._id} lectureObject={lecture} />
        ))}
      </section>

      <section className='sidebarContainer'>
        <SidebarComponent lectures={lectures} />
      </section>
    </div>
  )
}

export default Schedule;