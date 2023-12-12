import style from '../../assets/style/category/categoryCard.module.scss'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

function ShopCard({categoryData, isFavorite, mainidC}) {

  return (
    <Link to={`/Shop-Profile/4/${categoryData.id}`} className={`col-lg-3 col-md-4 col-sm-6 ${style.mainCategoryCard}`}>
        <div className={`${style.categoryCardBody}`}>
            <LazyLoadImage className={style.categoryImage} src={categoryData.image}  alt='CategoryDataImage'/>

            <div className={`row ${style.categoryMainInfoBox}`}>
                <div className={`col-10 ${style.categoryInfo}`}>
                    <h4 className={style.shopTitle}>{categoryData.name}</h4>
                </div>
                <div className={`col-2 ${style.storeAction}`}>
                  
                </div>

            </div> 

        </div>
    </Link>
  )
}

export default ShopCard