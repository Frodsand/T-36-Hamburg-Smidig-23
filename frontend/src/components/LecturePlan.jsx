import './LecturePlanStyle.css'
import React from 'react'
import RecipeComponent from './RecipeComponent'
import LearningOutcomeComponent from './LearningOutcomeComponent'



const LecturePlan = () => {

    //let lectureTitle = "lectureTitle"
    let lectureImage = "lectureImage"
    let teachingRequirements = "i denne undervisning ska elevene.."
    let recipe = "oppskrift"

    return(
        <article className='plan'>

          <div className='lecture-image'>
            <div className='lectureImage'>
               <img src={lectureImage} alt='Lecture Image' />
            </div>


            <section className='content'>

              <div className='learningOutcome-Component'>
              <LearningOutcomeComponent></LearningOutcomeComponent>
      
              </div>

              <div className="recipeComponent">
                <RecipeComponent></RecipeComponent>
              </div>
            </section>
            
         </div>

      </article>

    );


}

export default LecturePlan;

/* const LecturePlan = ({lectureObject} ) => {

  
    
    let lectureImage = lectureObject.lecruteImage
    let teachingRequirements = lectureObject.teachingRequirements
    let recipe = lectureObject.recipe
   
    
    return(
        <article className='lecturePlan'>
        
              <div className='lectureImage'>
               <img src={lectureImage} alt='Lecture Image' />
            </div>

            <div className='teaching-requirements'>
              <div className='teachingRequirements'>
                <p>{teachingRequirements}</p>  
              </div>
            </div>

            <div className='recipe'>
                <h3>Recipe</h3>
                <p>{recipe}</p>
          </div>

        </div>
      </article>

    );


}

export default LecturePlan; */