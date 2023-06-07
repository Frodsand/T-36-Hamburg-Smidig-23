import "./recipeComponent.css"

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