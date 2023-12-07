import style from "../../assets/style/showJob/showJob.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux';
import { jobsReduxState } from '../../redux/Job';
function ShowJobImage() {
  const showReduxS = useSelector(jobsReduxState);
  return (
    <div className={style.showJobMainImage} >
      <LazyLoadImage src={showReduxS.showJobPage?.user_image} alt='jobMainImage' />
    </div>
  )
}

export default ShowJobImage
