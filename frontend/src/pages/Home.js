import { useEffect, useState } from 'react'

const Home = () => {
    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
        const fetchIngredients = async () =>{
            const response = await fetch('/api/ingredients')
            const json = await response.json()
            console.log("json from the backend", json)
            if(response.ok){
                setIngredients(json)
            }
            console.log("ingreidents fetched")
        }
        fetchIngredients()
    }, [])

    return (
        <div className="home">
            <div className="ingredients">
                {ingredients && ingredients.map((ingredient, idx) => (
                    <p key={idx}>{ingredient.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Home