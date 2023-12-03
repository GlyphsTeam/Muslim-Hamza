import React, { useState, useEffect } from 'react';
import filterStyle from '../assets/style/common/filteredPage.module.css'
import Filter from '../components/common/FilterBusiness';
import useAxios from '../hooks/useAxios';
import CategorySection from '../components/category/CategoryBuisness';
import Interested from '../components/common/interested/InterestedSection';
function Business({stateName}) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const [mobileFilter, setMobileFilter] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [categoryState, setCategoryState] = useState({mainId: '', subId: '', activeFilterTitle: '', activeSubFilterTitle : ''  })

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

let customApi = `main-market/categories?limit_by=${limit}&page=${page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
      
useEffect(() => {
  customApi = `main-market/categories?limit_by=${limit}&page=${page}&main_id=${categoryState.mainId}&sub_id=${categoryState.subId}`;
}, [page]); 

  const [Data] = useAxios(customApi);
  const categoryData = Data?.data;
  const total = Data?.total;
  const url = 'main-categories';
  const [Data2] = useAxios(url)
  const allData = Data2?.data?.service?.concat(Data2?.data?.business)

  const scrollPagination = () => {
  };



  return (
    <>
    {/* <NavBar/> */}
    <h1>{stateName}</h1>
    <div className={`row ${filterStyle.pageContainer}`}>

      <div className={`col-sm-1 col-md-3 col-lg-3 ${filterStyle.filterHide}`}>
        <Filter categoryData={categoryData} filterType='category' filterTitle = 'Category' categoryState = {categoryState} setCategoryState = {setCategoryState} />
      </div>

      <div className={`col-sm-12 col-md-9 col-lg-9 ${filterStyle.pageRow}`}>

      <button onClick={()=> setMobileFilter(!mobileFilter)} className={`col-lg-1 col-md-1 col-sm-1 ${filterStyle.filterShow}`}> <i className="fas fa-filter"></i></button>

        <div className={`col-sm-12 mt-3 ${filterStyle.filterShow}`}>
          {mobileFilter && (
            <Filter categoryData={categoryData} filterType='category' filterTitle = 'Category' categoryState = {categoryState} setCategoryState = {setCategoryState} />

          )}
        </div>

        <CategorySection limit = {limit} categoryData={allData} total={total} nextPage={nextPage} previousPage={previousPage} setActiveIndex = {setActiveIndex} activeIndex={activeIndex} page={page} setPage = {setPage} scrollPagination={scrollPagination} categoryState = {categoryState} setCategoryState = {setCategoryState} />
       
      </div>

    </div>

    <Interested type='store' />
    </>
  )
}

export default Business