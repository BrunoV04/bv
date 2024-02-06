import socialCss from './social.module.css'
import be from '../assets/be.svg'
import linkein from '../assets/in.svg'
import git from '../assets/git.svg'


const Social = () => {
    return(
        <>
        <div className="so">
        <img src={linkein} className={socialCss.ico}/><img src={git} className={socialCss.ico}/><img src={be} className={socialCss.ico}/>
        </div>
        </>
    )
}

export default Social