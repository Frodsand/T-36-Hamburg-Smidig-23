import '../styling/sidebarComponent.css'
import {BigPrimaryButton} from './Buttons'


const SidebarComponent = () => {

    return (
        <section className="sidebarComponent">
            <nav className="inputContainer">
                <input className="searchbar" type="text" />
                <select className="selectCategory" name="Kategori" id="category"></select>
                <select className="selectLevel" name="Nivå" id="level"></select>
                <select className="selectAllergies" name="Allergier" id="allergies"></select>
            </nav>

            <h3>Undervisninger</h3>
            <section className="lectureCardsContainer"></section>

            <h3>Sjekkliste</h3>
            <section className='checkListContainer'>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Grunnleggende</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Sikkerhet</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Hygiene</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Næring</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Miljø</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Råvarer</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Kosthold</h5>
                </div>
                <div className='checkListElement'>
                    <div className='checkListIcon'></div>
                    <h5>Tradisjon</h5>
                </div>
                
            </section>

            <BigPrimaryButton buttonText='Godkjenn undervisning'></BigPrimaryButton>

        </section>
    )
}

export default SidebarComponent