import { useEffect, useState} from 'react'
import { useIngredientContext } from '../hooks/useIngredientContext'

const Home = () => {
    const { ingredients, dispatch } = useIngredientContext() 

    useEffect(() => {
        const fetchIngredients = async () =>{
            const response = await fetch('/api/ingredients')
            const json = await response.json()
            console.log("json from the backend", json)
            if(response.ok){
                dispatch({type: 'SET_INGREDIENTS', payload: json})
            }
            console.log("ingreidents fetched")
        }
        fetchIngredients()
    }, [dispatch])

    return (
        <div className="home">
            <div className="ingredients">
                {ingredients && ingredients.map((ingredient, idx) => (
                    <p key={idx}>{ingredient.name} {ingredient.price}</p>
                ))}
            </div>
        </div>
    )
}

export default Home