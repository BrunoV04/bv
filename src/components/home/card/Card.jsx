import cardCss from './card.module.css'
import img from './assets/img.svg'
const Card = () => {
    return (
        <div className={cardCss.card}>
            <div className={cardCss.img}>
                <img src={img}/>
            </div>
            <div className={cardCss.base}>
                <h6 className={cardCss.category}>HOME</h6>
                <div className={cardCss.cuerpo}>
                <h2 className={cardCss.title}>BASIC TENT</h2>
                <p className={cardCss.texto}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud </p>
            </div></div></div>
    )
}

export default Card