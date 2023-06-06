import '../styling/schedule.css'
import LectureCard from '../components/LectureCard'
// import { useState } from 'react';

let semesterPlanTitle = "Undervisningsplan"



function Schedule () {

// const [lectureArray, setLectureArray] = useState([]);

// useEffect(() => {
//     const getSemesterPlan = async () => {
//       try {
//         const response = await fetch();
//         const data = await response.json();

//         const getLectures = data.lectureArray.map(async (id) => {
//             const response = await fetch(id); // Fetch the linked element
//             const lecture = await response.json(); // Parse the response body as JSON
//             return lecture; // Return the fetched linked element
//           });
      
//           const lectures = await Promise.all(getLectures); // Wait for all promises to resolve
//           setLectureArray(lectures);


//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getSemesterPlan();
// }, []); 

// console.log(lectureArray)

// const printLectureCards = () => {
//     lectureArray.array.forEach(element => {
        
//     });
// }


    return (
        <div>
            <h1>{semesterPlanTitle}</h1>

            <section className="gridContainer">
            {/* {lectureArray.map((lectureObject, index) => (<LectureCard key={index} lectureObject={lectureObject} />))} */}
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