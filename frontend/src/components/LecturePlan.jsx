import './LecturePlanStyle.css'
import React from 'react'
import RecipeComponent from './RecipeComponent'
import LearningOutcomeComponent from './LearningOutcomeComponent'
import Header from './header'
import images from '../images/ukensplan.png'

//use the code down below inside the /**/ when we have the data from the database


const LecturePlan = () => {

    //let lectureTitle = "lectureTitle"
    //let lectureImage = "lectureImage"
    let learningOutcomeComponent = "i denne undervisning ska elevene.."
    let recipeComponent = "oppskrift"

    return(


      <article className='plan'>
          <div className='headerContainer'>
            <Header></Header>
          </div>
            
          
          <div className='lectureImage'>
               <img src={images} alt='Lecture Image' />
            </div>


            <section className='content'>

              <div className='learningOutcome-Component'>
              <LearningOutcomeComponent></LearningOutcomeComponent>
      
              </div>

              <div className="recipeComponent">
                <RecipeComponent></RecipeComponent>
              </div>
            </section>
            
         

      </article>

    );


}

export default LecturePlan;


/* 

import React from 'react'
import './LecturePlanStyle.css'
import RecipeComponent from './RecipeComponent'
import LearningOutcomeComponent from './LearningOutcomeComponent'
import Header from './header'

const LecturePlan = ({lectureObject} ) => {

  
    let lectureImage = lectureObject.lectureImage
    let learningOutcomeComponent = lectureObject.learningOutcomeComponent
    let recipeComponent = lectureObject.recipeComponent

    return(
      
        <article className='plan'>

          <div className='headerContainer'>
            <Header></Header>
          </div>
            
          
            <div className='lectureImage'>
               <img src={lectureImage} alt='Lecture Image' />
            </div>

        

            <section className='content'>

              <div className='learningOutcome-Component'>
              <LearningOutcomeComponent learningOutcome={learningOutcome} />

      
              </div>

              <div className="recipeComponent">
                  <RecipeComponent recipeComponent={recipeComponent} />
              </div>
            </section>
            
         

      </article>
  

    );


}

export default LecturePlan; */