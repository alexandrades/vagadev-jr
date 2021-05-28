import React, { useContext, useState } from 'react'

const OrdersContext = React.createContext({})

export function OrdersContextProvider({children}) {
    const [orderConfirmationView, setOrderConfirmationView] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const verifyItem = (item) => {
        let result = cartItems.some(elem => elem.index === item.index)
        return result
    }

    return (
        <OrdersContext.Provider value={{
            orderConfirmationView,
            cartItems,
            setOrderConfirmationView,
            setCartItems,
            verifyItem
        }}>
            {children}
        </OrdersContext.Provider>
    )

}

export const useOrders = () => {
    return useContext(OrdersContext)
}

