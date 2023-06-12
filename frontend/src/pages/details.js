import React from 'react';
import '../styling/details.css'
import LecturePlan from'../components/LecturePlan'
import { useLocation } from 'react-router-dom'

function DetailPage (){

    const location = useLocation();
    console.log('location', location)
    const { lectureObject } = location.state;

    return (
        <div>
            <h2 className="week-plan">{lectureObject.title}</h2>
            <div>
                <LecturePlan lectureObject={lectureObject} />
            </div>
      </div>
    );
}

export default DetailPage;

 