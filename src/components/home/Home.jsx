import homeCss from './home.module.css'
import Card from './card/Card'

const Home = () => {
    return(
        <div className="container">
        <div className={homeCss.card}>
            <div className="col-md-3">
            <h1 className={homeCss.title}>
I am a strategic partner to digitize your business 🤙</h1>
            </div>
            <div className="col-md-9">
                <Card/>
            </div>
            </div>
        </div>
    )
}

export default Home