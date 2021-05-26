import './styles/MainBanner.scss'

function MainBanner() {
    return (
        <div className="banner-container">
            <img className="banner-background" src="https://github.com/agencian1/vagadev-jr/blob/main/img/principal_banner_desktop.jpg?raw=true" alt="" />
            <div className="banner-content">
                <h2 className="banner-title">Mortal Kombat</h2>
                <h3 className="banner-price">R$ 299,99</h3>
                <p>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
            </div>
        </div>
    )
}

export default MainBanner