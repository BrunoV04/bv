import locationCss from './location.module.css'
import ubic from '../assets/ubic.svg'
const Location = () => {
return(
    <>
    <div className={locationCss.card}>
        <img src={ubic} className={locationCss.ubic}/>
    <p className={locationCss.text}>MY LOCATION</p>
    </div>
    </>
)
}

export default Location