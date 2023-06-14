import '../styling/lectureCard.css'
import { useNavigate } from 'react-router-dom'

const LectureCard = ({ lectureObject }) => {

    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/details', { state: { lectureObject } })
    }

    return (
        <article className="card">

            <div className='top-info'>
                <p className='category'>{lectureObject.category}</p>
                <p>{"Nivå " + lectureObject.level}</p>
            </div>

            <h4 className='lectureTitle'>{lectureObject.title}</h4>
            <p className='recipe-info_heading'>Praktisk oppgave:</p>

            <div className='recipe-info'>
                <div className='recipe-info_text'>
                    <h3 className='recipeTitle'>{lectureObject.recipeTitle}</h3>
                    <div className='recipe-info_text_allergies'>
                        <p>Allergier:</p>
                        <div className='allergies-images'></div>
                    </div>
                </div>

                <div className='recipe-info_image'>
                    <img src={require("../resources/images/" + lectureObject.recipeImage)} alt={lectureObject.recipeImage} />
                </div>

            </div>


            <button className="details-btn" onClick={handleOnClick}>Se undervisningsplan</button>


        </article>
    )
}

export default LectureCard