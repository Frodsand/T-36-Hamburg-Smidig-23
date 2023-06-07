import { createContext, useReducer } from 'react'

export const UsersContext = createContext()

export const usersReducer = (state, action) => {
    if(action.type === 'SET_USERS'){
        return { users: action.payload }
    }else{
        return state;
    }
}

export const UsersContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(usersReducer, {
        users: null
    })


    return (
        <UsersContext.Provider value={{...state, dispatch}} >
            {children}
        </UsersContext.Provider>
    )
}