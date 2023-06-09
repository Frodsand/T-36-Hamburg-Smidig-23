import React from 'react';
import '../styling/schedule.css';
import LectureCard from '../components/LectureCard';
import Header from '../components/header';

let semesterPlanTitle = "Undervisningsplan"

function Schedule () {
    
    return (
        <div>
          <div className='header'>
                <Header />
            </div>
            <h1 className="semester-plan-title">{semesterPlanTitle}</h1>
            <section className="gridContainer">
              <LectureCard/>
            </section>
        </div>
    )
}

export default Schedule;