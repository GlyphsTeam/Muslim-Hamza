import React, { useState, useEffect } from 'react';
import filterStyle from '../assets/style/common/filteredPage.module.css'
import Filter from '../components/common/Filter';
import useAxios from '../hooks/useAxios';
import ShopSection from '../components/category/ShopSection';
import { useSelector, useDispatch } from 'react-redux';
import { marketState, setPage, setActiveIndex, setMarketList } from '../redux/Market'

function CategoryPage() {
    const categoryRedux = useSelector(state => state.category);
    const marketCatege = useSelector(marketState)
    const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(12);

  const [mobileFilter, setMobileFilter] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(0);

  const [categoryState, setCategoryState] = useState({mainId: categoryRedux.categoryId, subId: categoryRedux.subCategoryId, activeFilterTitle: categoryRedux.categoryTitle, activeSubFilterTitle : categoryRedux.subCategoryTitle  })

  const nextPage = ()=> {
    if((total/marketCatege.market?.limit) > marketCatege.market?.activeIndex+1){
      dispatch(setPage(marketCatege.market?.page+1));
      dispatch(setActiveIndex(marketCatege.market?.activeIndex+1));
    }
}
const previousPage = ()=> {
    if(marketCatege.market?.page > 1){
      dispatch(setPage(marketCatege.market?.page-1));
      dispatch(setActiveIndex(marketCatege.market?.activeIndex-1));
    }
}

let customApi = `category-market?limit_by=${marketCatege.market?.limit}&page=${marketCatege.market?.page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
      
useEffect(() => {
  customApi = `category-market?limit_by=${marketCatege.market?.limit}&page=${marketCatege.market?.page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
}, [marketCatege.market?.page]); 
  let url = `main-market/categories?limit_by=${marketCatege.market?.limit}&page=${marketCatege.market?.page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
  const [Data] = useAxios(customApi);
  const categoryData = Data?.data;
  const [Data2] = useAxios(url);
  dispatch(setMarketList(Data2?.data))

  const total = Data?.total;
  const scrollPagination = () => {
  };



  return (
    <>
    <div className={`row ${filterStyle.pageContainer}`}>

      <div className={`col-sm-1 col-md-3 col-lg-3 ${filterStyle.filterHide}`}>
        <Filter categoryData={Data2?.data}  filterType='category' filterTitle = 'Category' categoryState = {categoryState} setCategoryState = {setCategoryState} />
      </div>

      <div className={`col-sm-12 col-md-9 col-lg-9 ${filterStyle.pageRow}`}>

      <button onClick={()=> setMobileFilter(!mobileFilter)} className={`col-lg-1 col-md-1 col-sm-1 ${filterStyle.filterShow}`}> <i className="fas fa-filter"></i></button>

        <div className={`col-sm-12 mt-3 ${filterStyle.filterShow}`}>
          {mobileFilter && (
            <Filter categoryData={Data2?.data} filterType='category' filterTitle = 'Category' categoryState = {categoryState} setCategoryState = {setCategoryState} />
          )}
        </div>

         <ShopSection limit = {marketCatege.market?.limit} mainidC={categoryState.mainId} categoryData={categoryData} total={total} nextPage={nextPage} previousPage={previousPage} setActiveIndex = {setActiveIndex} activeIndex={marketCatege.market?.activeIndex} page={marketCatege.market?.page} setPage = {setPage} scrollPagination={scrollPagination} categoryState = {categoryState} setCategoryState = {setCategoryState} />
 
      </div>

    </div>
    </>
  )
}

export default CategoryPage