import "../styling/recipeComponent.css"

const RecipeComponent = () => {
    return (
        <section className='recipeContainer'>
            <h2>Oppskrift</h2>
            <div className="imageContainer"></div>

            <article className='ingredientsContainer' >
                <h3>Ingredienser</h3>
                <div className="ingredients"></div>
            </article>

            <article className="instructionsContainer">
                <h3>Fremgangsmåte</h3>
                <div className="instructions"></div>
            </article>
        </section>
    );
}

export default RecipeComponent