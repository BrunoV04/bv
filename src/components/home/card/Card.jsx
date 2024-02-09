import cardCss from './card.module.css'
import left from './assets/left.svg'
import right from './assets/right.svg'
import webApp from './assets/web-app.png'
import socialMedia from './assets/social-media.png'
import { useState } from 'react'
const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        webApp,
        socialMedia,
        'imagen3.jpg',
    ];

    const texts = [
        'Desarrollamos sitios a medida de las necesidades de nuestros clientes, basandonos',
        'Desarrollamos sitios a medida de las necesidades de nuestros clientes, basandonos',
        'Texto 3',
    ];

    const title = [
        'Web Apps',
        'Social Media',
        'Title 3',
    ];

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    };

    return (
        <div className={cardCss.card}>
            <div className={cardCss.img}>
                <img src={images[currentIndex]} />
            </div>
            <div className={cardCss.base}>
                <h6 className={cardCss.category}>HOME</h6>
                <div className={cardCss.cuerpo}>
                    <h2 className={cardCss.title}>{title[currentIndex]}</h2>
                    <p className={cardCss.texto}>{texts[currentIndex]}</p>
                    <img className={cardCss.btn} src={left} onClick={handlePrevious} />
                    <img className={cardCss.btn} src={right} onClick={handleNext} />
                </div></div></div>
    )
}

export default Card