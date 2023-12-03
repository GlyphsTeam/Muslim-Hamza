import style from "../../assets/style/showJob/showJob.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";


function ShowJobImage({showJobData}) {
  return (
    <div className={style.showJobMainImage} >
        <LazyLoadImage src={showJobData?.user_image} alt='jobMainImage'/>
    </div>
  )
}

export default ShowJobImage
