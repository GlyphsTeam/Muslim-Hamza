import style from '../../assets/style/showHousing/showHousing.module.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux';
import { houseReduxState } from '../../redux/House';
function ShowHousingImage() {
  const houseShowRed = useSelector(houseReduxState);
  return (
    <div className={style.showHousingImageDiv}>
      <LazyLoadImage src={houseShowRed?.houseShowData?.image} alt='housingImage' />
    </div>
  )
}

export default ShowHousingImage