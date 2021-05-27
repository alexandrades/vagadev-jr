import './styles/MiddleBanner.scss'
import './styles/MiddleBannerItem.scss'


function MiddleBannerItem(props) {

    return(
        <>
            <div className="banner-item-content">
                <img src={props.imageSrc} alt={props.gameName} className="banner-item-image" />
                <p className="banner-item-title">{props.gameName}</p>
            </div>
        </>
    )
}

function MiddleBanner() {

    const middleBannerData = [
        {
            imageSrc: "./img/zelda_banner.jpg",
            gameName: "The Legend of Zelda - Breath of th wild"
        },
        {
            imageSrc: "./img/sekiro_banner.jpg",
            gameName: "SEKIRO - Shadows die twice"
        }
    ]

    return(
        <>
            <div className="middle-banner-container">
                <div className="middle-banner-content">
                    {
                        middleBannerData.map((bannerItem) => {
                            return (
                                <MiddleBannerItem imageSrc={bannerItem.imageSrc} gameName={bannerItem.gameName} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MiddleBanner