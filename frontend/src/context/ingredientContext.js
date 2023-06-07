import { createContext, useReducer } from 'react'

export const IngredientsContext = createContext()

export const ingredientsReducer = (state, action) => {
    if(action.type === 'SET_INGREDIENTS'){
        return { ingredients: action.payload }
    }else{
        return state;
    }
}

export const IngredientsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(ingredientsReducer, {
        ingredients: null
    })


    return (
        <IngredientsContext.Provider value={{...state, dispatch}} >
            {children}
        </IngredientsContext.Provider>
    )
}