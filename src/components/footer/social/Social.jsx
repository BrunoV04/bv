import socialCss from './social.module.css'
import be from '../assets/be.svg'
import linkein from '../assets/in.svg'
import git from '../assets/git.svg'
import { Link } from 'react-router-dom';


const Social = () => {
    return(
        <>
        <div className="so">
        <Link to="https://www.linkedin.com/in/brunoviotti/"><img src={linkein} className={socialCss.ico}/></Link><Link to="https://github.com/BrunoV04"><img src={git} className={socialCss.ico}/></Link><Link to="https://www.behance.net/brunoviotti"><img src={be} className={socialCss.ico}/></Link>
        </div>
        </>
    )
}

export default Social