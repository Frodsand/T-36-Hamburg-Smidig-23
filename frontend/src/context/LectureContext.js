import { createContext, useReducer } from 'react'

export const LecturesContext = createContext()

export const lecturesReducer = (state, action) => {
    if(action.type === 'SET_LECTURES'){
        return { lectures: action.payload }
    }else{
    return state;
    }
}

export const LecturesContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(lecturesReducer, {
        lectures: null
    })


    return (
        <LecturesContext.Provider value={{...state, dispatch}} >
            {children}
        </LecturesContext.Provider>
    )
}