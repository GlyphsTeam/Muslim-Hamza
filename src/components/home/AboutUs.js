import style from "../../assets/style/HomePage/aboutUs.module.scss";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';
import { LazyLoadImage } from "react-lazy-load-image-component";

function AboutUs({HomeData}) {
  return (
    <div className={style.aboutUsContainer}>
      <div className={style.leftAboutInfo}>
        <p>About us</p>
        <h3>Our Main Focus</h3>
        <p>
        {ReactHtmlParser(`${HomeData?.about?.web_description}`)}
        </p>
        <div className={style.aboutUsBtnDiv}>
          <Link to={'/About'}>
          <Button btnInfo="Read More" className={style.btnWidth} />
          </Link>
        </div>
      </div>
      <div className={style.aboutUsImageContainer}>
        <LazyLoadImage
          src={require("../../assets/images/HomePageImages/AboutUsHome.png")}
          alt="AboutImage"
        />
      </div>
    </div>
  );
}

export default AboutUs;
