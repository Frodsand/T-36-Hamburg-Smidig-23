
import {PrimaryButton, OutlinePrimaryButton, BigPrimaryButton, OutlineBlackButton, OutlineWhiteButton} from '../components/Buttons'

function Schedule () {
    return (
        <div>
            <h1>Schedule</h1>
            <p>This is the schedule page</p>
            <div>
                <PrimaryButton buttonText="Primary button"></PrimaryButton>
                <OutlinePrimaryButton buttonText="Outline button"></OutlinePrimaryButton>
                <BigPrimaryButton buttonText="Big button"></BigPrimaryButton>
                <OutlineBlackButton buttonText="black outline button"></OutlineBlackButton>
            </div>
        </div>
    )
}

export default Schedule;