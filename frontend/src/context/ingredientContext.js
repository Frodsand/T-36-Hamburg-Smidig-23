import { createContext, useReducer } from 'react';

export const IngredientContext = createContext();

export const ingredientReducer = (state, action) => {
        switch (action.type){

        
        case 'SET_INGREDIENTS':
            return {
                ingredients: action.payload
            }
        case 'CREATE_INGREDIENT':
            return{
                ingredients: [action.payload, ...state.ingredients]
            }
        case 'DELETE_INGREDIENT':
            return{
                ingredients: state.ingredients.filter((i) => i._id !== action.payload._id)
                
            }
        default: 
            return state;
    }
}

export const IngredientContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(ingredientReducer, {
        ingredients: null
    })

    return (
        <IngredientContext.Provider value={{...state, dispatch}}>
            {children}
        </IngredientContext.Provider>
    )
}