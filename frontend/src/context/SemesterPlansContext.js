import { createContext, useReducer } from 'react'

export const SemesterPlansContext = createContext()

export const semesterPlansReducer = (state, action) => {
    if(action.type === 'SET_SEMESTER_PLANS'){
        return { semesterPlans: action.payload }
    }else{
        return state;
    }
}

export const SemesterPLansContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(semesterPlansReducer, {
        semesterPlans: null
    })


    return (
        <SemesterPlansContext.Provider value={{...state, dispatch}} >
            {children}
        </SemesterPlansContext.Provider>
    )
}