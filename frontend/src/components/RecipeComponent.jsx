import "../styling/recipeComponent.css"

const RecipeComponent = ({lectureObject}) => {

    return (
        <section className='recipeContainer'>
            <h2>{lectureObject.recipeTitle}</h2>
            <div className="imageContainer"></div>

            <article className='ingredientsContainer' >
                <p>{lectureObject && lectureObject.ingredients.map((i) => {
                    return <li key={i._id}>{i}</li>
                })}</p>
                <div className="ingredients"></div>
            </article>

            <article className="instructionsContainer">
                <p>{lectureObject.instructions}</p>
                <div className="instructions"></div>
            </article>
        </section>
    );
}

export default RecipeComponent