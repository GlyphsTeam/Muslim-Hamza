import style from "../../assets/style/blog/blogCards.module.css";
import filterStyle from '../../assets/style/common/filteredPage.module.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from '../common/FilterBusiness';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useSelector } from 'react-redux';

function Card({ navUrl }) {
    const { id, id2 } = useParams();
    const url = `stores?main_id=${id}&category_id=${id2}`;
    const [Data] = useAxios(url);
    const showStoreData = Data?.data;
    const categoryRedux = useSelector(state => state.category);
    const [categoryState, setCategoryState] = useState({mainId: categoryRedux.categoryId, subId: categoryRedux.subCategoryId, activeFilterTitle: categoryRedux.categoryTitle, activeSubFilterTitle : categoryRedux.subCategoryTitle  })

  return (
    <>
      {/* <div className={style.subBlogCards}> */}
      <div className={`row ${filterStyle.pageContainer}`}>
      <div className={`col-sm-1 col-md-3 col-lg-3 ${filterStyle.filterHide}`}>
        <Filter filterType='category' filterTitle = 'Category' categoryState = {categoryState} setCategoryState = {setCategoryState} />
      </div>
     {showStoreData?.map((store)=>{
        return <div className={style.subBlogMainCard} key={store?.id}>
        <Link to={`/Shop-Profile/4/${store?.id}`}>
          <div className={style.subBlogCardImg}>
            <LazyLoadImage src={store?.image} alt={store?.name} />
          </div>
          <div className={style.bottomCard}>
            <h5>{store?.name}</h5>
            <p>{store?.description}</p>
            {/* <Link to={`/Show-Blog/${id}`}> */}
              <div className={style.readMoreDiv}>
                <p>Read More</p>
              </div>
            {/* </Link> */}
          </div>
        </Link>
      </div>
     }) 
  }
     </div>

      {/* ))} */}
      {/* </div> */}
    </>
  );
}

export default Card;
