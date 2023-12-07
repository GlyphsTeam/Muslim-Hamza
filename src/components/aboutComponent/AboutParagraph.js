import style from "../../assets/style/about/about.module.scss";
import ReactHtmlParser from 'html-react-parser';
import { aboutReduxState } from '../../redux/About';
import { useSelector } from 'react-redux'
function AboutParagraph() {
  const aboutState = useSelector(aboutReduxState);
  return (
    <div className={`col-lg-8 col-sm-12 ${style.aboutParagraph}`}>
      <div className={style.aboutTitleMobile}>
        <h3>
          <span>About</span> Us
        </h3>
      </div>
      {aboutState.aboutText?.about?.map((item, index) => (
        <div key={index}>
          <h5>{item?.title}</h5>
          <p>{ReactHtmlParser(`${item?.description}`)}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutParagraph;
