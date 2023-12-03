import style from "../../assets/style/about/about.module.scss";
import ReactHtmlParser from 'html-react-parser';

function AboutParagraph({ aboutData }) {
  return (
    <div className={`col-lg-8 col-sm-12 ${style.aboutParagraph}`}>
      <div className={style.aboutTitleMobile}>
        <h3>
          <span>About</span> Us
        </h3>
      </div>
      {aboutData?.about?.map((item, index) => (
        <div key={index}>
          <h5>{item?.title}</h5>
          <p>{ReactHtmlParser(`${item?.description}`)}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutParagraph;
