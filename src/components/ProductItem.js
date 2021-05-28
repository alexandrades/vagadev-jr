import './styles/ProductItem.scss'
import './styles/OrderPlaced.scss'
import { useOrders } from '../contexts/OrdersContext'
import { useEffect, useState } from 'react'

function BuyButton(props) {
    return(
        <button onClick={props.handleClick} disabled={(props.state)} type="button" className={props.state ? 'purchased' : ''}>{props.textContent}</button>
    )
}

function ProductItem(props) {
    const { setOrderConfirmationView, setCartItems, cartItems, orderConfirmationView, verifyItem} = useOrders()


    const buyHandleClick = () => {
        setOrderConfirmationView(true)
        setCartItems((prev) => {
            return [...prev , props.productData]
        })
    }

    return (
        <>
            <div className="product-container">
                <img src={props.productData.imageSrc} alt={props.productData.title} className="product-image" />
                <span className="divisor"></span>
                <div className="product-info">
                    <p className="product-title">{props.productData.title}</p>
                    <h4 className="product-price">R$ {props.productData.price}</h4>
                    <button onClick={buyHandleClick} disabled={verifyItem(props.productData)} type="button" className={verifyItem(props.productData) ? 'purchased' : ''}>{!verifyItem(props.productData) ? "Comprar" : "Comprado!"}</button>
                </div>
            </div>
        </>
    )
}

export default ProductItem