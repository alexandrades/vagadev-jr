import { useEffect, useState } from 'react'
import './styles/MainBanner.scss'


function MainBanner() {
    
    
    const sliderData = [
        {
            index: 0,
            imgSrc: "./img/principal_banner_desktop.jpg",
            alt: "Mortal Kombat",
            title: "Mortal Kombat",
            price: [299, 99],
            description: "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta."
        },
        {
            index: 1,
            imgSrc: "./img/principal_banner_desktop_02.jpg",
            alt: "Red Dead Redemption II",
            title: "Red Dead Redemption II",
            price: [199, 99],
            description: "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta."
        },
    ]
    const [sliderImage, setSliderImage] = useState(sliderData[0])

    useEffect(() => {
        const sliderTime = setTimeout(() => {
            setSliderImage((prev) => {
                if(prev.index === sliderData.length - 1){
                    return sliderData[0]
                }
                return sliderData[prev.index + 1]
            })
        }, 8000)

        return () => {
            clearTimeout(sliderTime)
        }

    }, [sliderImage])

    const prevHandleClick = () => {
        setSliderImage((prev) => {
            if(prev.index === 0){
                return sliderData[sliderData.length - 1]
            }
            return sliderData[prev.index - 1]
        })
    }

    const nextHandleClick = () => {
        setSliderImage((prev) => {
            if(prev.index === sliderData.length - 1){
                return sliderData[0]
            }
            return sliderData[prev.index + 1]
        })
    }

    return (
        <>
            <div className="banner-container">
                <div className="overlay">
                    <img className="banner-background" src={sliderImage.imgSrc} alt={sliderImage.alt} />
                </div>
                <div className="banner-content">
                    <h2 className="banner-title">{sliderImage.title}</h2>
                    <h3 className="banner-price">R$ {sliderImage.price[0]}<span className="price-cents">,{sliderImage.price[1]}</span> </h3>
                    <p>{sliderImage.description}</p>
                </div>
                <div className="slider-navigation">
                    <div className="current-product">
                        <h2>{sliderImage.title}</h2>
                    </div>
                    <div className="slider-buttons">
                        <p>{`${sliderImage.index + 1} / ${sliderData.length}`}</p>
                        <button onClick={prevHandleClick} type="button"><img src="./svgs/slider-arrow-prev.svg" alt="Anterior" /></button>
                        <button onClick={nextHandleClick} type="button"><img src="./svgs/slider-arrow-next.svg" alt="Próximo" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner