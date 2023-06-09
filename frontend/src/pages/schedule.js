<<<<<<< HEAD
import React from 'react';
import '../styling/schedule.css';
import LectureCard from '../components/LectureCard';
=======
import '../styling/schedule.css'
import LectureCard from '../components/LectureCard'
import { useEffect } from "react";
import { useLectureContext } from "../hooks/useLectureContext";
import SidebarComponent from '../components/SidebarComponent';
import Header from '../components/header';

>>>>>>> 78adfc154119bbd5c0750018c05ecbce7288a7a8


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