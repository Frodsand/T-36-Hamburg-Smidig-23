import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();

    const login = async (username, password) => {
        setIsLoading(true)
        setError(null)

        try {

            const response = await fetch('http://localhost:4000/api/login/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password})
            })
            const json = await response.json()

            console.log(response)

            if(!response.ok){
                setError(json.error)
            } else {
                // saving user to local storage
                localStorage.setItem('user', JSON.stringify(json))

                // update the auth context
                dispatch({ type: 'LOGIN', payload: json})
                navigate('/home');
                
            }
        } catch (err){
            setError(err.message);
        } finally {
            // updating the loading state
            setIsLoading(false)
        }
    }
    return {login, isLoading, error}
}