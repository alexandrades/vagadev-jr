import './styles/TrendingProducts.scss'
import ProductItem from './ProductItem'

function TrendingProducts() {

    const trendingData = [
        {
            imageSrc: "./img/product-outriders.jpg",
            title: "Outriders",
            price: "200,00"
        },
        {
            imageSrc: "./img/product-cyberpunk2077.jpg",
            title: "CYBERPUNK 2077",
            price: "200,00"
        },
        {
            imageSrc: "./img/product-donkey-kong-country-tropical-freeze.jpg",
            title: "Donkey King Country Tropical Freeze",
            price: "200,00"
        },
    ]

    return (
        <>
            <div className="trending-container">
                <div className="trending-content">
                    <h3><span><img src="./svgs/section-icon.svg" alt="Destaques" /></span>Produtos em destaque</h3>
                    <div className="product-items">
                        {
                            trendingData.map((trendingItem) => {
                                return (
                                    <ProductItem productImgSrc={trendingItem.imageSrc} title={trendingItem.title} price={trendingItem.price} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingProducts