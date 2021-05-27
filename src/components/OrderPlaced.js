import { useOrders } from '../contexts/OrdersContext'
import './styles/OrderPlaced.scss'

function OrderPlaced() {
    const {orderConfirmationView, setOrderConfirmationView} = useOrders()

    const closeHandleClick = () => {
        setOrderConfirmationView(false)
    }

    return (
        <>
            <div className="order-confirmation-container">
                <div className="order-confitmation-content">
                    <span></span>
                    <h4>Pedido realizado com sucesso!</h4>
                    <img src="./img/order-confirmation-view.jpg" alt="Sucesso!" />
                    <button type="button" onClick={closeHandleClick} className="close-button"><img src="./svgs/close_btn.svg" alt="Fechar" /></button>
                </div>
            </div>
        </>
    )
}

export default OrderPlaced