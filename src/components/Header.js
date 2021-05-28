import { useState } from 'react';
import { useOrders } from '../contexts/OrdersContext';
import OrderPlaced from './OrderPlaced';

import './styles/Header.scss'
import './styles/FloatingMenu.scss'
import './styles/MobileMenu.scss'

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
    }
]

function FloatingMenu() {
    
    return (
        <>
            <div className="menu-content-desktop">
                {
                    productsData.map((category) => {
                        return(
                            <div className="category-list-desktop">
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

function MobileMenu() {

    return (
        <>
            <div className="menu-content-mobile">
            {
                productsData.map((category) => {
                    return(
                        <div className="category-list-mobile">
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
    const {orderConfirmationView, setOrderConfirmationView, cartItems, setCartItems} = useOrders()
    const [menuVisibility, setMenuVisibility] = useState(false)
    
    const menuHandleClick = () => {
        menuVisibility ? setMenuVisibility(false) : setMenuVisibility(true)
    }
    
    return (
        <>
            {
                orderConfirmationView ? <OrderPlaced /> : ''
            }
            {
                menuVisibility ? (window.innerWidth < 960 ? <MobileMenu/> : '') : ''
            }
            <div className="header-container">
                <div className={menuVisibility ? "header-content menu-active" : "header-content"}>
                    <div className="n1-brand">
            {
                menuVisibility ? (window.innerWidth < 960 ? '' : <FloatingMenu />) : ''
            }
                        <button type="button" onClick={menuHandleClick}><img src="./svgs/icon_hamburguer.svg" alt="Menu" /></button>
                        <a href="http://localhost:3000/"><img src="./img/logo_n1_rush.png" alt="N1 Rush" /></a>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <li className="menu-item">
                                <span className="menu-icon"><img src="./svgs/paper-plane.svg" alt="Contato" /></span> <span>Contato</span>
                            </li>
                            <li className="menu-item">
                                <span className="menu-icon"><img src="./svgs/search-solid.svg" alt="Buscar" /></span> <span>Buscar</span>
                            </li>
                            <li className="menu-item">
                                <span className="menu-icon"><img src="./svgs/shopping-bag-solid.svg" alt="Contato" /></span>
                                <span id="cart-length">{cartItems.length}</span>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>

        </>
    )
}

export default Header;