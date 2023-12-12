import style from "../../assets/style/CardShop.module.css";
import filterStyle from '../../assets/style/common/filteredPage.module.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from '../common/Filter';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useSelector, useDispatch } from 'react-redux';
import { marketState, setMarketList } from '../../redux/Market'
function Card({ navUrl }) {
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(12);
  const dispatch = useDispatch();
  const marketCatege = useSelector(marketState)
  const { id, id2 } = useParams();
  const url = `filter-market?main_id=${id}&sub_id=${id2}&page=${marketCatege.market?.page}&limit_by=${marketCatege.market?.limit}&model_id=&sort_by=&condition=&looking=&place=&year_from=&year_to=&color=`;
  const [Data] = useAxios(url);
  const showStoreData = Data?.data;
  const categoryRedux = useSelector(state => state.category);

  const [categoryState, setCategoryState] = useState({ mainId: categoryRedux.categoryId, subId: categoryRedux.subCategoryId, activeFilterTitle: categoryRedux.categoryTitle, activeSubFilterTitle: categoryRedux.subCategoryTitle })
  let customApi = `main-market/categories?limit_by=${marketCatege.market?.limit}&page=${marketCatege.market?.page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
  useEffect(() => {
    customApi = `main-market/categories?limit_by=${marketCatege.market?.limit}&page=${marketCatege.market?.page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
  }, [marketCatege.market?.page]);
  const [Data2] = useAxios(customApi);
  dispatch(setMarketList(Data2?.data))
  return (
    <>
      {/* <div className={style.subBlogCards}> */}
      <div className={`${filterStyle.pageContainer}`}>
        <div className={`col-sm-1 col-md-3 col-lg-3 ${filterStyle.filterHide}`}>
          <Filter categoryData={Data2?.data} filterType='category' filterTitle='Category' categoryState={categoryState} setCategoryState={setCategoryState} />
        </div>
        <div className={filterStyle.categoryContanier}>
          {showStoreData?.map((store) => {
            return <div className={style.subBlogMainCard} key={store?.id}>
              <Link to={`/Show-product/${store?.slug}/${store?.id}`}>
                <div className={style.subBlogCardImg}>
                  <LazyLoadImage src={store?.image} alt={store?.name} />
                </div>
                <div className={style.bottomCard}>
                  <h5>{store?.title}</h5>
                  <p>{store?.description}</p>
                  {/* <Link to={`/Show-Blog/${id}`}> */}
                  <div className={style.readMoreDiv}>
                    <p>Read More</p>
                    <p>$ {store?.price}</p>
                  </div>
                  {/* </Link> */}
                </div>
              </Link>
            </div>
          })

          }
        </div>
      </div>

      {/* ))} */}
      {/* </div> */}
    </>
  );
}

export default Card;
