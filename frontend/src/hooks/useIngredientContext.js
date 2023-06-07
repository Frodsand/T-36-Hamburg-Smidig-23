import { IngredientsContext } from '../context/IngredientContext';
import {useContext} from 'react'

export const useIngredientContext = () => {
    const context = useContext(IngredientsContext)

    return context
}