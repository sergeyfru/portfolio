import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons'

const Contacts = () => {
    return (
        <>
            <div id="contacts">
                <h2>Contacts</h2>
                <div className="contact-info">
                    <div style={{display:'flex'}}>
                    <FontAwesomeIcon icon={faPhone} /> <p>+972 58 4737556</p>
                    </div>
                    <div style={{display:'flex'}}>
                    <FontAwesomeIcon icon={faAt} /> <p>sn.fruman@gmail.com</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Contacts