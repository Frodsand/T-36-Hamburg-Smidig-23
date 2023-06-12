import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router"

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const navigate = useNavigate()

    const logout = () => {
        // remover username and jwt from the local storage
        localStorage.removeItem('user')
    
        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        navigate('/')
    }

    return {logout}
}