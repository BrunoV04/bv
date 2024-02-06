import Social from './social/Social.jsx'
import Location from './location/Location.jsx'
import FooterCss from './footer.module.css'

const Footer = () =>{
    return(
    <>
    <div className="container-fluid">
    <div className={FooterCss.foo}>
    <Location/>
    <Social/>
    </div>
    </div>
    </>
    )
}

export default Footer