import React, { useState, useEffect } from 'react';
import filterStyle from '../assets/style/common/filteredPage.module.css'
import Filter from '../components/common/Filter';
import useAxios from '../hooks/useAxios';
import ShopSection from '../components/category/ShopSection';
import { useSelector } from 'react-redux';

function CategoryPage() {
    const categoryRedux = useSelector(state => state.category);
    
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const [mobileFilter, setMobileFilter] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [categoryState, setCategoryState] = useState({mainId: categoryRedux.categoryId, subId: categoryRedux.subCategoryId, activeFilterTitle: categoryRedux.categoryTitle, activeSubFilterTitle : categoryRedux.subCategoryTitle  })

  const nextPage = ()=> {
    if((total/limit) > activeIndex+1){
        setPage(page+1);
        setActiveIndex(activeIndex+1);
    }
}
const previousPage = ()=> {
    if(page > 1){
        setPage(page-1);
        setActiveIndex(activeIndex-1);
    }
}

let customApi = `category-market?limit_by=${limit}&page=${page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
      
useEffect(() => {
  customApi = `category-market?limit_by=${limit}&page=${page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
}, [page]); 
  let url = `main-market/categories?limit_by=${limit}&page=${page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
  const [Data] = useAxios(customApi);
  const categoryData = Data?.data;
  const [Data2] = useAxios(url);
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
            <Filter categoryData={categoryData} filterType='category' filterTitle = 'Category' categoryState = {categoryState} setCategoryState = {setCategoryState} />
          )}
        </div>

         <ShopSection limit = {limit} mainidC={categoryState.mainId} categoryData={categoryData} total={total} nextPage={nextPage} previousPage={previousPage} setActiveIndex = {setActiveIndex} activeIndex={activeIndex} page={page} setPage = {setPage} scrollPagination={scrollPagination} categoryState = {categoryState} setCategoryState = {setCategoryState} />
 
      </div>

    </div>
    </>
  )
}

export default CategoryPage