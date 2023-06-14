import { useEffect, useState } from 'react'
import '../styling/sidebarComponent.css'
import {BigPrimaryButton} from './Buttons'


const SidebarComponent = ({lectures}) => {

    const [lectureArray, setLectureArray] = useState(lectures)
    const categoryArray = lectures ?[...new Set(lectures.map((lecture) => lecture.category))] : [] // checks if lectures is null before setting
    const levelArray = lectures ? [...new Set(lectures.map((lecture) => lecture.level))] : []

    //populates the lectureArray when component is mounted
    useEffect(
        () => {
            setLectureArray(lectures)
        }, [lectures] ) 
    
    const handleSearchInput = (event) => {
        const searchInput = event.target.value
        searchLectureCards(searchInput)
    }

    //Searches for title or recipe
    const searchLectureCards = (searchInput) => {
        if (searchInput === ''){
            setLectureArray(lectures)
        }else{
            const searchResult = lectures.filter((lecture) =>
            lecture.recipeTitle.toLowerCase().includes(searchInput.toLowerCase()) ||
            lecture.title.toLowerCase().includes(searchInput.toLowerCase())
    )
            setLectureArray(searchResult)
        }
    }

    const handleCategoryInput = (event) => {
        const filterInput = event.target.value
        filterCategory(filterInput)
    }

    const filterCategory = (filterInput) => {
        if(filterInput === ''){
            setLectureArray(lectures)
        }else{
            const filterResult = lectures.filter((lecture) =>
            lecture.category === filterInput )

            setLectureArray(filterResult)
        }  
    }

    const handleLevelInput = (event) => {
        const filterInput = event.target.value
        filterLevel(filterInput)
    }

    const filterLevel = (filterInput) => {
        if(filterInput === ''){
            setLectureArray(lectures)
        }else{
            const filterResult = lectures.filter((lecture) =>
            lecture.level === filterInput )

            setLectureArray(filterResult)
        }  
    }


    return (
        <section className="sidebarComponent">
            <nav className="inputContainer">
                <input 
                    className="searchbar" 
                    type="text" 
                    placeholder='Søk etter undervisninger' 
                    onChange={handleSearchInput}
                />

                <select className="select" name="Kategori" id="category" onChange={handleCategoryInput}>
                    <option 
                        value="">Kategori
                    </option>
                    {categoryArray.map((category) => (
                        <option value={category} key={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <select className="select" name="Nivå" id="level" onChange={handleLevelInput}>
                    <option value="">Nivå</option>
                    {levelArray.map((level) => (
                        <option value={level} key={level}>
                            {level}
                        </option>
                    ))}
                </select>

                <select className="select" name="Allergier" id="allergies">
                    <option value="">Allergier</option>
                </select>
            </nav>

            <h3 className='subtitle'>Undervisninger</h3>
            <section className="lectureCardsContainer">{
                lectureArray && lectureArray.map( (lecture) => (
                        <div className='lectureCard' key={lecture._id}>
                            <div className='lectureCard_imageContainer'>
                                <img src={require("../resources/images/" + lecture.recipeImage)} alt={lecture.recipeImage} />
                            </div>
                            
                            <div className='lectureCard_textContainer'>
                                <h5 className='lectureCard_lectureCategory'>{lecture.category}</h5>
                                <h5 className='lectureCard_lectureTitle'>{lecture.title}</h5> 
                                <h5 className='lectureCard_recipeTitle'>{lecture.recipeTitle}</h5> 
                            </div>

                            <div className='lectureCard_infoContainer'>
                                <h5>{"Nivå: " + lecture.level}</h5>
                                <h5>Allergier</h5>
                            </div>
                            
                        </div>
                    ))
            }</section>

            <h3 className='subtitle'>Sjekkliste</h3>
            <section className='checkListContainer'>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Grunnleggende</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Sikkerhet</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Hygiene</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Næring</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Miljø</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Råvarer</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Kosthold</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Tradisjon</h5>
                </div>
                
            </section>

            <BigPrimaryButton buttonText='Godkjenn undervisning'></BigPrimaryButton>

        </section>
    )
}

export default SidebarComponent