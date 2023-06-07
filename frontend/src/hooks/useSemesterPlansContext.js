import { SemesterPlansContext } from '../context/SemesterPlansContext';
import {useContext} from 'react'

export const useSemesterPlansContext = () => {
    const context = useContext(SemesterPlansContext)

    return context
}