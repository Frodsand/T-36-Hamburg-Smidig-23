import '../styling/buttons.css'

//How to use button components:
// 1 -> import {PrimaryButton, OutlinePrimaryButton, BigPrimaryButton, OutlineBlackButton, OutlineWhiteButton} from '../components/Buttons'
// 2 -> in jsx: <PrimaryButton buttonText="Enter butten text here"></PrimaryButton> 


export const PrimaryButton = ({buttonText, onClick}) => {

    return <button className="button primary" onClick={onClick}>{buttonText}</button>
}

export const OutlinePrimaryButton = ({buttonText, onClick}) => {

    return <button className="button primaryOutline" onClick={onClick}>{buttonText}</button>
}

export const BigPrimaryButton = ({buttonText, onClick}) => {

    return <button className="button primary big" onClick={onClick}>{buttonText}</button>
}

export const OutlineBlackButton = ({buttonText, onClick}) => {

    return <button className="button blackOutline" onClick={onClick}>{buttonText}</button>
}

export const OutlineWhiteButton = ({buttonText, onClick}) => {

    return <button className="button whiteOutline" onClick={onClick}>{buttonText}</button>
}








