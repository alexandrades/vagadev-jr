import { useState } from 'react';
import { useOrders } from '../contexts/OrdersContext';
import OrderPlaced from './OrderPlaced';

import './styles/Header.scss'
import './styles/FloatingMenu.scss'

function FloatingMenu() {

    const productsData = [
        {
            category: "Luta",
            products: [
                {
                    name: "Mortal Kombat",
                    productUrl: "#"
                },
                
                {
                    name: "Smash Bros",
                    productUrl: "#"
                },
                
                {
                    name: "Killer Instict",
                    productUrl: "#"
                },
                
                {
                    name: "DBZ Kakarot",
                    productUrl: "#"
                }
                
            ]
        },
        {
            category: "Ação / Aventura",
            products: [
                {
                    name: "GTA V",
                    productUrl: "#"
                },
                
                {
                    name: "Tomb Raider",
                    productUrl: "#"
                },
                
                {
                    name: "HALO",
                    productUrl: "#"
                },
                
                {
                    name: "Call of Duty",
                    productUrl: "#"
                }
                
            ]
        },
        {
            category: "Corrida",
            products: [
                {
                    name: "NEED For SPEED",
                    productUrl: "#"
                },
                
                {
                    name: "Forza Horizon",
                    productUrl: "#"
                }
                
            ]
        }
    ]

    return (
        <>
            <div className="menu-content">
                {
                    productsData.map((category) => {
                        return(
                            <div className="category-list">
                                <h4 className="category-name">{category.category}</h4>
                                {
                                    category.products.map((product) => {
                                        return (
                                            <a href={product.productUrl} className="category-item">{product.name}</a>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

function Header() {
    const {orderConfirmationView, setOrderConfirmationView} = useOrders()
    const [menuVisibility, setMenuVisibility] = useState(false)

    const menuHandleClick = () => {
        menuVisibility ? setMenuVisibility(false) : setMenuVisibility(true)
    }

    // const menuHandleEnter = () => {
    //     if(!menuVisibility) {
    //         setMenuVisibility(true)
    //         return
    //     }
    // }
    
    // const menuHandleLeave = () => {
    //     if(menuVisibility) {
    //         setMenuVisibility(false)
    //         return
    //     }
    // }
    
    return (
        <>
            {
                orderConfirmationView ? <OrderPlaced /> : ''
            }
            <div className="header-container">
                <div className="header-content">
                    <div className="n1-brand">
                        <button type="button" onClick={menuHandleClick}><img src="./svgs/icon_hamburguer.svg" alt="Menu" /></button>
                        {
                            menuVisibility ? <FloatingMenu /> : ''
                        }
                        <a href="http://localhost:3000/"><img src="./img/logo_n1_rush.png" alt="N1 Rush" /></a>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <li className="menu-item">
                                <span className="menu-icon"><img src="./svgs/paper-plane.svg" alt="Contato" /></span> Contato
                            </li>
                            <li className="menu-item">
                                <span className="menu-icon"><img src="./svgs/search-solid.svg" alt="Buscar" /></span> Buscar
                            </li>
                            <li className="menu-item">
                                <span className="menu-icon"><img src="./svgs/shopping-bag-solid.svg" alt="Contato" /></span> <span id="cart-length">2</span>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>

        </>
    )
}

export default Header;