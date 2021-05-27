import React, { useContext, useState } from 'react'

const OrdersContext = React.createContext({})

export function OrdersContextProvider({children}) {
    const [orderConfirmationView, setOrderConfirmationView] = useState(false)

    return (
        <OrdersContext.Provider value={{
            orderConfirmationView,
            setOrderConfirmationView
        }}>
            {children}
        </OrdersContext.Provider>
    )

}

export const useOrders = () => {
    return useContext(OrdersContext)
}

