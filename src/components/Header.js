import './styles/Header.scss'

function Header() {
    return (
        <div className="header-container">
            <div className="header-content">
                <div className="n1-brand">
                    <span><img src="./svgs/icon_hamburguer.svg" alt="Menu" /></span>
                    <a href="http://localhost:3000/"><img src="./img/logo_n1_rush.png" alt="N1 Rush" /></a>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li className="menu-item">
                            <span className="menu-icon">  <img src="./svgs/paper-plane.svg" alt="Contato" /></span> Contato
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon"><img src="./svgs/search-solid.svg" alt="Buscar" /></span> Buscar
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon"><img src="./svgs/shopping-bag-solid.svg" alt="Contato" /></span> 2
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Header;