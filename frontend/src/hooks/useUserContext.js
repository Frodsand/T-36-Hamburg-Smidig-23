import { UsersContext } from '../context/UserContext';
import {useContext} from 'react'

export const useUserContext = () => {
    const context = useContext(UsersContext)

    return context
}