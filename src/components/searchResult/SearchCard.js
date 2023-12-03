import style from "../../assets/style/category/categoryCard.module.scss";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SearchCard({card, path, imageKey, titleKey}) {
  return (
  <div
    key={card?.id}
    className={`col-lg-3 col-md-4 col-sm-6 ${style.mainCategoryCard}`}
  >
    <Link to={`${path}/${card.id}`} className={style.categoryCardBody}>
      <div className={`${style.categoryCardBody}`}>
        <LazyLoadImage
          className={style.categoryImage}
          src={card[imageKey]}
          alt="catergoryImage"
        />
        <div className={`row ${style.categoryMainInfoBox}`}>
          <div className={`col-12 ${style.categoryInfo}`}>
            <h4 className={style.categoryTitle}>
              {card[titleKey]}
            </h4>
            <br />
          </div>
        </div>
      </div>
    </Link>
  </div>
);

  
}

export default SearchCard