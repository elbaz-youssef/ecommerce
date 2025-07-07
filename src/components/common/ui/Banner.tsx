import type { BannerType } from "../../../types/banner.types"

const Banner = ({urlImg, title, description}: BannerType) => {
  return (
    <section 
        className="py-30 bg-cover bg-center"
        style={{backgroundImage: `url(${urlImg})`}}
    >
        <div className="container">
            <div className="text-center text-white">
                <h3 className="font-bold mb-2">{title}</h3>
                <span>{description}</span>
            </div>
        </div>
    </section>
  )
}

export default Banner