import '../styling/sidebarComponent.css'
import {BigPrimaryButton} from './Buttons'


const SidebarComponent = () => {

    return (
        <section className="sidebarComponent">
            <nav className="inputContainer">
                <input className="searchbar" type="text" placeholder='Søk etter undervisninger' />

                <select className="select" name="Kategori" id="category">
                    <option value="">Kategori</option>
                </select>

                <select className="select" name="Nivå" id="level">
                    <option value="">Nivå</option>
                </select>

                <select className="select" name="Allergier" id="allergies">
                    <option value="">Allergier</option>
                </select>
            </nav>

            <h3 className='subtitle'>Undervisninger</h3>
            <section className="lectureCardsContainer"></section>

            <h3 className='subtitle'>Sjekkliste</h3>
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