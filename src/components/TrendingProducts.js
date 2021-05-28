import './styles/TrendingProducts.scss'
import ProductItem from './ProductItem'
import { useState } from 'react'

function TrendingProducts() {

    const trendingData = [
        {
            index: 0,
            imageSrc: "./img/product-outriders.jpg",
            title: "Outriders",
            price: "200,00"
        },
        {
            index: 1,
            imageSrc: "./img/product-cyberpunk2077.jpg",
            title: "CYBERPUNK 2077",
            price: "200,00"
        },
        {
            index: 2,
            imageSrc: "./img/product-donkey-kong-country-tropical-freeze.jpg",
            title: "Donkey King Country Tropical Freeze",
            price: "200,00"
        },
    ]

    const [currentProduct, setCurrentProduct] = useState(trendingData[0])

    const prevHandleClick = () => {
        setCurrentProduct((prev) => {
            if(prev.index === 0){
                return trendingData[trendingData.length - 1]
            }
            return trendingData[prev.index - 1]
        })
    }

    const nextHandleClick = () => {
        setCurrentProduct((prev) => {

            if(prev.index === trendingData.length - 1){
                return trendingData[0]
            }
            return trendingData[prev.index + 1]
        })
    }

    return (
        <>
            <div className="trending-container">
                <div className="trending-content">
                    <h3><span><img src="./svgs/section-icon.svg" alt="Destaques" /></span>Produtos em destaque</h3>
                    <div className="product-items">
                        <button className="navigation-button" onClick={prevHandleClick} type="button"><img src="./svgs/angle-left-solid.svg" alt="Anterior"/></button>
                        {
                            window.innerWidth > 960 ? trendingData.map((trendingItem) => {
                                return (
                                    <ProductItem productData={trendingItem} />
                                    )
                                }) : <ProductItem productData={currentProduct} />
                                
                            }
                        <button className="navigation-button" onClick={nextHandleClick} type="button"><img src="./svgs/angle-right-solid.svg" alt="Próximo"/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingProducts