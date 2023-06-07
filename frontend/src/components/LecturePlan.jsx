import React from 'react'
import '../styling/LecturePlanStyle.css'
import RecipeComponent from './RecipeComponent'
import LearningOutcomeComponent from './LearningOutcomeComponent'
import Header from './header'
import images from '../images/ukensplan.png'


const LecturePlan = () => {

    //let lectureTitle = "lectureTitle"
    //let lectureImage = "lectureImage"
    let learningOutcomeComponent = "i denne undervisning ska elevene.."
    let recipeComponent = "oppskrift"

    return(


      <article className='plan'>
          <div className='headerContainer'>
            <Header />
          </div>
          
          <div className='lectureImage'>
               <img src={images} alt='Lecture Image' />
            </div>

            <section className='content'>

              <div className='learningOutcome-Component'>
              <LearningOutcomeComponent />
      
              </div>

              <div className="recipeComponent">
                <RecipeComponent/>
              </div>
            </section>
            
         

      </article>

    );


}

export default LecturePlan;

