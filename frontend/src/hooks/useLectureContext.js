import { LecturesContext } from '../context/LectureContext';
import {useContext} from 'react'

export const useLectureContext = () => {
    const context = useContext(LecturesContext)

    return context
}