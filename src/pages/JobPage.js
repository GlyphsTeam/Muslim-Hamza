import React, { useState, useEffect } from 'react';
import filterStyle from '../assets/style/common/filteredPage.module.css'
import Filter from '../components/common/FilterBusiness';
import SearchHouse from '../components/common/Search_job_house';
import useAxios from '../hooks/useAxios';
import JobSection from '../components/job/JobSection';
import Interested from '../components/common/interested/InterestedSection';

function JobPage({baseUrl}) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [keyword, setKeyWord] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [mobileFilter, setMobileFilter] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

let customApi = `jobs?limit_by=${limit}&page=${page}&keyword=${keyword}&zip_code=${zipCode}&city=${city}&type=${type}`;
      
useEffect(() => {
  customApi = `jobs?limit_by=${limit}&page=${page}&keyword=${keyword}&zip_code=${zipCode}&city=${city}&type=${type}`;
}, [page]);

  const [Data] = useAxios(customApi);
  const jobData = Data?.data;
  const total = Data?.total;


  const scrollPagination = () => {
    // if (window.innerWidth < 480) {
    //   placesToVisitId.current.scrollIntoView(
  };

  return (
    <>
    <div className={`row ${filterStyle.pageContainer}`}>

      <div className={`col-sm-1 col-md-3 col-lg-3 ${filterStyle.filterHide}`}>
        <Filter filterType='job' filterTitle = 'Job' type = {type} setType = {setType} city ={city} setCity = {setCity} />
      </div>

      <div className={`col-sm-12 col-md-9 col-lg-9 ${filterStyle.pageRow}`}>
        <SearchHouse mobileFilter = {mobileFilter} setMobileFilter={setMobileFilter} keyword = {keyword} setKeyWord={setKeyWord} zipCode={zipCode} setZipCode={setZipCode} />
        <div className={`col-sm-12 mt-3 ${filterStyle.filterShow}`}>
          {mobileFilter && (
            <Filter filterType='job' filterTitle = 'Job'  type = {type} setType = {setType} city ={city} setCity = {setCity} />
          )}
        </div>

        <JobSection jobData={jobData} limit = {limit} setCity = {setCity} setType = {setType} type = {type} city = {city} total={total} nextPage={nextPage} previousPage={previousPage} setActiveIndex = {setActiveIndex} activeIndex={activeIndex} page={page} setPage = {setPage} scrollPagination={scrollPagination} baseUrl={baseUrl} />
      </div>

    </div>

    <Interested type='job' />
    </>
  )
}

export default JobPage