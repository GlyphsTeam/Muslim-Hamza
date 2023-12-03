import style from '../../assets/style/showHousing/showHousing.module.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

function ShowHousingImage({showHousingData}) {
  return (
    <div className={style.showHousingImageDiv}>
        <LazyLoadImage src={showHousingData?.image} alt='housingImage'/>
    </div>
  )
}

export default ShowHousingImage