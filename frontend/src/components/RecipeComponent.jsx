import "../styling/recipeComponent.css"

const RecipeComponent = ({ lectureObject }) => {
  const splitInstructions = lectureObject.instructions.split('\n');

  return (
    <section className='recipeContainer'>
      <h3>{lectureObject.recipeTitle}</h3>
      <div className="imageContainer"></div>

      <article className='ingredientsContainer'>
        <p>
          {lectureObject && lectureObject.ingredients.map((i) => {
            return <li key={i}>{i}</li>
          })}
        </p>
        <div className="ingredients"></div>
      </article>

      <article className="instructionsContainer">
        <p>
          {splitInstructions.map((instruction, index) => {
            return <span key={index}>{instruction}<br /></span>;
          })}
        </p>
        <div className="instructions"></div>
      </article>
    </section>
  );
}

export default RecipeComponent;
