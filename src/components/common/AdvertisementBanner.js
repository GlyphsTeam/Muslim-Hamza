import Slider from "react-slick";
import style from "../../assets/style/common/adv.module.scss";
import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AdvertisementBanner({ Data }) {
  // const advertisementsData = HomeData?.advertisements;
  const location = useLocation();
  const pathName = location.pathname;
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={pathName === '/' ?  style.advertisementBannerDiv : style.advBannerLessPadding} >
      <Slider {...settings}>
        {Data?.map((item, index) => (
          <div key={index}>
            <Link to={item?.url}>
              <LazyLoadImage src={item?.image} alt="AdvertismentImage" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AdvertisementBanner;
