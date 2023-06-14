import "../styling/recipeComponent.css";

const RecipeComponent = ({ lectureObject }) => {
  const splitInstructions = lectureObject.instructions.split('\n');
  
  return (
    <section className='recipeContainer'>
      <h3 className="recipeTitle">{lectureObject.recipeTitle}</h3>
      <div className="imageContainer">
          <img src={require("../resources/images/" + lectureObject.recipeImage)} alt={lectureObject.recipeImage} />
      </div>

      <article className='ingredientsContainer'>
        <h4 className="titleIngredients">Ingredienser:</h4>
        <p>
          {lectureObject && lectureObject.ingredients.map((i) => {
            return <li key={i}>{i}</li>
          })}
        </p>
        <div className="ingredients"></div>
      </article>

      <article className="instructionsContainer">
        <h4 className="titleInstructions">Framgangsmåte:</h4>
        <p>
          {splitInstructions.map((instruction, index) => {
            return <p className="instruction" key={index}>{instruction}<br /></p>;
          })}
        </p>
        <div className="instructions"></div>
      </article>
    </section>
  );
}

export default RecipeComponent;
