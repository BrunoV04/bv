import locationCss from './location.module.css'
import wsp from '../assets/wsp.svg'
import { Link } from 'react-router-dom';
const Location = () => {
return(
    <Link to="https://api.whatsapp.com/send?phone=543424234616" className={locationCss.enlace}>
    <div className={locationCss.card}>
        <img src={wsp} className={locationCss.ubic}/>
    <p className={locationCss.text}>LET'S TALK</p>
    </div>
    </Link>
)
}

export default Location