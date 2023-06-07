import "./recipeComponent.css"

//use the code down below inside the /**/ when we have the data from the database


const RecipeComponent = () => {
    return (
        <section className='recipeContainer'>
            <h2>Oppskrift</h2>
            <div>image</div>

            <article className='ingredientsContainer' >
                <h2>Ingredienser</h2>
                <div className="ingredients">
                    <h5 className="ingrediensElement">ingrediens</h5>
                    <h5 className="ingrediensElement">ingrediens</h5>
                    <h5 className="ingrediensElement">ingrediens</h5>
                    <h5 className="ingrediensElement">ingrediens</h5>
                    <h5 className="ingrediensElement">ingrediens</h5>
                    <h5 className="ingrediensElement">ingrediens</h5>
                    
                    
                </div>
            </article>

            <article className="instructionsContainer"></article>
        </section>
    );
}

export default RecipeComponent

/* 
import React from 'react';
import "./recipeComponent.css";

const RecipeComponent = ({ recipeComponent }) => {
  const { ingredients, instructions } = recipeComponent;

  return (
    <section className='recipeContainer'>
      <h2>Oppskrift</h2>
      <div className="imageContainer">
        <img src={image} alt="Recipe Image" />
      </div>

      <article className='ingredientsContainer'>
        <h2>Ingredienser</h2>
        <div className="ingredients">
          {ingredients.map((ingredient, index) => (
            <h5 className="ingrediensElement" key={index}>{ingredient}</h5>
          ))}
        </div>
      </article>

      <article className="instructionsContainer">
        {instructions.map((instruction, index) => (
          <p key={index}>{instruction}</p>
        ))}
      </article>
    </section>
  );
}

export default RecipeComponent;

*/