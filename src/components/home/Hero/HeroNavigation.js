import style from "../../../assets/style/HomePage/hero.module.scss";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HeroNavigation() {
  return (
    <div className={style.heroNavDiv}>
      <div className={style.imageNavIcon}>  <Link to='/Category'><LazyLoadImage src={require("../../../assets/images/HomePageImages/category.png")} alt='category' /> </Link></div>
        <div className={style.imageNavIcon}> <Link to='/Jobs'><LazyLoadImage src={require("../../../assets/images/HomePageImages/job.png")} alt='job' /></Link></div>
        <div className={style.imageNavIcon}><Link to='/Housing'><LazyLoadImage src={require("../../../assets/images/HomePageImages/Rent.png")} alt='rent' /></Link></div>
        <div className={style.imageNavIcon}><Link to='/Masjid'><LazyLoadImage src={require("../../../assets/images/HomePageImages/Masjid.png")} alt='masjid'/></Link></div>
    </div>
  )
}

export default HeroNavigation