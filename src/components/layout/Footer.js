import style from "../../assets/style/layout/footer.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Footer() {
  let url = "general-setting";
  const [Data] = useAxios(url);
  const footerData = Data?.data;
  const location = useLocation();
  const hideFooter =
    location.pathname === "/login" ||
    location.pathname === "/Register" ||
    location.pathname === "/register" ||
    location.pathname === "/Privacy-policy" ||
    location.pathname === "/Terms-conditions";

  return (
    <>
      {!hideFooter && (
        <footer className={style.footer}>
          <div className={style.mainFooterContainer}>
            <div className={style.mainFooter}>
              <div className={style.firstSection}>
                {/* <%= image_tag "Logo.png" , class:"footer-logo" %> */}
                <LazyLoadImage src={require("../../assets/images/Common/Logo.png")} alt="footerLogo"/>
                <div className={style.subFirstSection}>
                  <div className={style.footerIcon}>
                    <a href={footerData?.facebook_url} target="_blank">
                      {" "}
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a  href={footerData?.instagram_url} target="_blank">
                      {" "}
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={footerData?.twitter_url} target="_blank">
                      {" "}
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={footerData?.youtube_url} target="_blank">
                      {" "}
                      <i className="fab fa-youtube"></i>
                      
                    </a>
                  </div>
                  <p>Cast Aluminum Outdoor Chaise Lounge As an elegant </p>
                </div>
              </div>

              <div className={style.useFulLinksDiv}>
                <h3>Useful Links </h3>

                <Link to="/About">About</Link>
                <Link to="/Category">Categories</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Contact">Contact</Link>
              </div>

              <div className={style.servicesLinks}>
                <h3>Services </h3>
                <Link to="/Jobs">Job</Link>
                <Link to="/Housing">Housing</Link>
                <Link to="/Masjid">Masjid near me</Link>
              </div>

              <div className={style.legalLinks}>
                <h3>Legal </h3>
                <a href="/Privacy-Policy" target="_blank">
                  Privacy & Policy{" "}
                </a>

                <a href="/Terms-conditions" target="_blank">
                  Terms & Conditions{" "}
                </a>

                {/* <Link to="/Privacy-policy">Privacy & Policy</Link> */}
              </div>
            </div>
            <div className={style.hrDiv}>
              <hr />
            </div>
            <div className={style.lastSectionFooter}>
              <p>© Copyright 2023, Glyphs Marketing LLC all rights reserved </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
