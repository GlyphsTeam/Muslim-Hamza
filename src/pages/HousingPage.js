import React, { useState, useEffect } from 'react';
import filterStyle from '../assets/style/common/filteredPage.module.css'
import Filter from '../components/common/FilterBusiness';
import SearchHouse from '../components/common/Search_job_house';
import useAxios from '../hooks/useAxios';
import HouseSection from '../components/housing/HouseSection';
import Interested from '../components/common/interested/InterestedSection';

function HousingPage({baseUrl}) { 
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [keyword, setKeyWord] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
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

let customApi = `rents?limit_by=${limit}&page=${page}&keyword=${keyword}&zip_code=${zipCode}&gender=${gender}&city=${city}&type=${type}`;
      
useEffect(() => {
  customApi = `rents?limit_by=${limit}&page=${page}&keyword=${keyword}&zip_code=${zipCode}&gender=${gender}&city=${city}&type=${type}`;
}, [page]);

  // const [url, setUrl] = useState('rents');
  const [Data] = useAxios(customApi);
  const houseData = Data?.data;
  const total = Data?.total;


  const scrollPagination = () => {

  };



  return (
    <>
    <div className={`row ${filterStyle.pageContainer}`}>

      <div className={`col-sm-1 col-md-3 col-lg-3 ${filterStyle.filterHide}`}>
        <Filter filterType='housing' filterTitle = 'Housing' type = {type} setType = {setType} setGender = {setGender} gender = {gender} city ={city} setCity = {setCity} />
      </div>

      <div className={`col-sm-12 col-md-9 col-lg-9 ${filterStyle.pageRow}`}>
        <SearchHouse mobileFilter = {mobileFilter} setMobileFilter={setMobileFilter} keyword = {keyword} setKeyWord={setKeyWord} zipCode={zipCode} setZipCode={setZipCode} />
        <div className={`col-sm-12 mt-3 ${filterStyle.filterShow}`}>
          {mobileFilter && (
            <Filter filterType='housing' filterTitle = 'Housing'  type = {type} setType = {setType} setGender = {setGender} gender = {gender} city ={city} setCity = {setCity} />
          )}
        </div>
        <HouseSection baseUrl={baseUrl} type = {type} limit = {limit} setGender={setGender} setCity = {setCity} setType = {setType} gender = {gender} city={city} houseData={houseData} total={total} nextPage={nextPage} previousPage={previousPage} setActiveIndex = {setActiveIndex} activeIndex={activeIndex} page={page} setPage = {setPage} scrollPagination={scrollPagination} />
      </div>

    </div>

    <Interested type='rent' />
    </>
  )
}

export default HousingPage