import style from "../../assets/style/about/about.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux'
import { aboutReduxState } from '../../redux/About'
function AboutImage({ aboutData }) {
  const aboutState = useSelector(aboutReduxState);

  return (
    <div className={`col-lg-4 ${style.aboutImage}`}>
      <LazyLoadImage src={aboutState?.aboutText?.main?.image} alt="MainImage" />
    </div>
  );
}

export default AboutImage;
