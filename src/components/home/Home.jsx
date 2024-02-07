import homeCss from './home.module.css'
import Card from './card/Card'

const Home = () => {
    return(
        <div className="container">
        <div className={homeCss.card}>
            <div className="col-md-4">
            <h1 className={homeCss.title}>Hello, my name is Bruno</h1>
            </div>
            <div className="col-md-8">
                <Card/>
            </div>
            </div>
        </div>
    )
}

export default Home