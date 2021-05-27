import './styles/ProductItem.scss'
import './styles/OrderPlaced.scss'
import { useOrders } from '../contexts/OrdersContext'

function ProductItem(props) {
    const {orderConfirmationView, setOrderConfirmationView} = useOrders()

    const buyHandleClick = () => {
        setOrderConfirmationView(true)
    }
    return (
        <>
            <div className="product-container">
                <img src={props.productImgSrc} alt={props.title} className="product-image" />
                <span className="divisor"></span>
                <div className="product-info">
                    <h4 className="product-title">{props.title}</h4>
                    <h4 className="product-price">R$ {props.price}</h4>
                    <button onClick={buyHandleClick} type="button">Comprar</button>
                </div>
            </div>
        </>
    )
}

export default ProductItem