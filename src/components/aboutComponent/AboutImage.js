import style from "../../assets/style/about/about.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AboutImage({aboutData}) {
  return (
    <div className={`col-lg-4 ${style.aboutImage}`}>
      <LazyLoadImage src={aboutData?.main?.image} alt="MainImage"/>
    </div>
  );
}

export default AboutImage;
