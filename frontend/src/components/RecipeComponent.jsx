import "./recipeComponent.css"

const RecipeComponent = () => {
    return (
        <section className='recipeContainer'>
            <h2>Oppskrift</h2>
            <div>image</div>

            <article className='ingredientsContainer' >
                <h3>Ingredienser</h3>
                <div className="ingredients">
                    <h5 className="ingrediensElement">ingrediens</h5>
                    <h5 className="ingrediensElement">ingrediens</h5>
                    <h5 className="ingrediensElement">ingrediens</h5>
                    <h5 className="ingrediensElement">ingrediens</h5>
                    <h5 className="ingrediensElement">ingrediens</h5>
                </div>
            </article>

            <article className="instructionsContainer">
                <div className="separator"></div>
                <h3>Fremgangsmåte</h3>
            </article>
        </section>
    );
}

export default RecipeComponent