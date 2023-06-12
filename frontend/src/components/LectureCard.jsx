import '../styling/lectureCard.css'
import { useNavigate } from 'react-router-dom'

const LectureCard = ({ lectureObject }) => {

    const navigate = useNavigate()

    const handleOnCLick = () => {
        navigate('/Details', { state: { lectureObject } })
    }

    return (
        <article className="card">

            <div className='top-info'>
                <p className='category'>{lectureObject.category}</p>
                <p>{"Nivå " + lectureObject.level}</p>
            </div>

            <h3 className='lectureTitle'>{lectureObject.title}</h3>
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
                    {lectureObject.image}
                </div>

            </div>
            <button onClick={handleOnCLick}>Se undervisningsplan</button>
        </article>
    )
}

export default LectureCard