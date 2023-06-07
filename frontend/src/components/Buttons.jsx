import "./buttons.css"

//How to use button components:
// 1 -> import {PrimaryButton, OutlinePrimaryButton, BigPrimaryButton, OutlineBlackButton, OutlineWhiteButton} from '../components/Buttons'
// 2 -> in jsx: <PrimaryButton buttonText="Enter butten text here"></PrimaryButton> 


export const PrimaryButton = ({buttonText}) => {

    return <button className="button primary">{buttonText}</button>
}

export const OutlinePrimaryButton = ({buttonText}) => {

    return <button className="button primaryOutline">{buttonText}</button>
}

export const BigPrimaryButton = ({buttonText}) => {

    return <button className="button primary big">{buttonText}</button>
}

export const OutlineBlackButton = ({buttonText}) => {

    return <button className="button blackOutline">{buttonText}</button>
}

export const OutlineWhiteButton = ({buttonText}) => {

    return <button className="button whiteOutline">{buttonText}</button>
}








