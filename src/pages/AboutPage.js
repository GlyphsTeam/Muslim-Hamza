import style from "../assets/style/about/about.module.scss";
import useAxios from "../hooks/useAxios";
import AboutImage from '../components/aboutComponent/AboutImage';
import AboutParagraph from '../components/aboutComponent/AboutParagraph';
import SocialMedia from '../components/aboutComponent/SocialMedia';
import { useTranslation } from 'react-i18next';
function AboutPage({ stateName }) {
  const [t] = useTranslation();
  const url = "about";
  const [Data] = useAxios(url);
  const aboutData = Data?.data;
  return (
    <div className={` container ${style.aboutUsMain}`}>
      <div className={style.aboutTitle}>
        <h3>
          <span>{t("about")} Page {stateName}</span> Us
        </h3>
      </div>

      <div className={`row ${style.aboutTopInfo}`}>
        <AboutParagraph aboutData={aboutData} />
        <AboutImage aboutData={aboutData} />
      </div>
      <SocialMedia aboutData={aboutData} />
    </div>
  )
}

export default AboutPage