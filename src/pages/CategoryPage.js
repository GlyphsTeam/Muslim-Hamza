import React, { useEffect } from 'react';
import filterStyle from '../assets/style/common/filteredPage.module.css'
import Filter from '../components/common/Filter';
import useAxios from '../hooks/useAxios';
import CategorySection from '../components/category/CategorySection';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setMarketList,
  setPage,
  setActiveIndex,
  setMobileFilter,
  marketState,
} from '../redux/Market';

function CategoryPage({ stateName }) {
  const dispatch = useDispatch();
  const marketCatege = useSelector(marketState)
  const nextPage = () => {
    if ((total / marketCatege.market.limit) > marketCatege.market.activeIndex + 1) {
      dispatch(setPage(marketCatege.market.page + 1));
      dispatch(setActiveIndex(marketCatege.market.activeIndex + 1));
    }
  }
  const previousPage = () => {
    if (marketCatege.market.page > 1) {
      dispatch(setPage(marketCatege.market.page - 1));
      dispatch(setActiveIndex(marketCatege.market.activeIndex - 1));
    }
  }

  let customApi = `main-market/categories?limit_by=${marketCatege.market.limit}&page=${marketCatege.market.page}&main_id=${marketCatege.market.categoryState.mainId}&sub_id=${marketCatege.market.categoryState.subId}`;

  useEffect(() => {
    customApi = `main-market/categories?limit_by=${marketCatege.market.limit}&page=${marketCatege.market.page}&main_id=${marketCatege.market.categoryState.mainId}&sub_id=${marketCatege.market.categoryState.subId}`;
  }, [marketCatege.market.page]);

  const [Data] = useAxios(customApi);
  const categoryData = Data?.data;
  const total = Data?.total;
  dispatch(setMarketList(categoryData))
  const scrollPagination = () => {
  };



  return (
    <>
      {/* <NavBar/> */}
      <h1>{stateName}</h1>
      <div className={`row ${filterStyle.pageContainer}`}>

        <div className={`col-sm-1 col-md-3 col-lg-3 ${filterStyle.filterHide}`}>
          <Filter  filterType='category' filterTitle='Category'  />
        </div>

        <div className={`col-sm-12 col-md-9 col-lg-9 ${filterStyle.pageRow}`}>

          <button onClick={() => dispatch(setMobileFilter(!marketCatege.market.mobileFilter))} className={`col-lg-1 col-md-1 col-sm-1 ${filterStyle.filterShow}`}> <i className="fas fa-filter"></i></button>

          <div className={`col-sm-12 mt-3 ${filterStyle.filterShow}`}>
            {marketCatege.market.mobileFilter && (
              <Filter filterType='category' filterTitle='Category'  />

            )}
          </div>

          <CategorySection  total={total} nextPage={nextPage} previousPage={previousPage} setActiveIndex={setActiveIndex} setPage={setPage} scrollPagination={scrollPagination}  />

        </div>

      </div>

    </>
  )
}

export default CategoryPage