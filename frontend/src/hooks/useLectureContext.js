import { LecturesContext } from '../context/LectureContext';
import {useContext} from 'react'

export const useLectureContext = () => {
    const context = useContext(LecturesContext)

    if(!context){
        throw Error('useLectureContext must be used inside an LectureContextProvider')
    }

    return context
}