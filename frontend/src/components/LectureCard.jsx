import '../styling/lectureCard.css'

const LectureCard = ({lectureObject}) => {

    console.log("lectureObject inne i lecture card: " + lectureObject)

    let category = "kategori"
    let level = "Nivå 1"
    let lectureTitle = "Undervisningstittel"
    let recipeTitle = "Oppskrift tittel"
    let image = "image"
    

    const handleOnClick = () => {
        window.location.href = "/Details"
    }

    return (
        <article className="card">
            
            <div className='top-info'>
                <p className='category'>{category}</p>
                <p>{level}</p>
            </div>

            <h3 className='lectureTitle'>{lectureTitle}</h3>
            <p className='recipe-info_heading'>Praktisk oppgave:</p>
            
            <div className='recipe-info'>    
                <div className='recipe-info_text'>
                    <h3 className='recipeTitle'>{recipeTitle}</h3>
                    <div className='recipe-info_text_allergies'>
                        <p>Allergier:</p>
                        <div className='allergies-images'></div>
                    </div>
                </div>

                <div className='recipe-info_image'>
                    {image}
                </div>
                
            </div>

            
                <button onClick={handleOnClick}>Se undervisningsplan</button>
            
            
            
            
        </article>
    )
}

export default LectureCard