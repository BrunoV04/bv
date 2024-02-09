import headerCss from './header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
        
        <div className="container-fluid">
        <div className={headerCss.head}>
<div className={headerCss.logo}>
<Link to="/" className={headerCss.enlace}><h2>bv.</h2></Link>
</div>
<div className={headerCss.nav}>
<Link className={headerCss.btn} to="/">HOME</Link>
<Link className={headerCss.btn} to="/">I'AM</Link>
<Link className={headerCss.btn} to="/">PORFOLIO</Link>
</div>
        </div>
        </div>
        </>
    )
}

export default Header