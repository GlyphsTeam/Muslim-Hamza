import React, { useEffect } from 'react';
import filterStyle from '../assets/style/common/filteredPage.module.css'
import Filter from '../components/common/FilterBusiness';
import SearchHouse from '../components/common/Search_job_house';
import useAxios from '../hooks/useAxios';
import HouseSection from '../components/housing/HouseSection';
import Interested from '../components/common/interested/InterestedSection';
import {
  setHousing,
  setActiveIndex,
  setPage,
  houseReduxState
} from '../redux/House';
import { useDispatch, useSelector } from 'react-redux';
function HousingPage({ baseUrl }) {

  const dispatch = useDispatch();
  const housePageState = useSelector(houseReduxState);
  const nextPage = () => {
    if ((total / housePageState.limit) > housePageState.activeIndex + 1) {
      dispatch(setPage(housePageState.page + 1));
      dispatch(setActiveIndex(housePageState.activeIndex + 1));
    }
  }
  const previousPage = () => {
    if (housePageState.page > 1) {
      dispatch(setPage(housePageState.page - 1));
      dispatch(setActiveIndex(housePageState.activeIndex - 1));
    }
  }

  let customApi = `rents?limit_by=${housePageState.limit}&page=${housePageState.page}&keyword=${housePageState.keyword}&zip_code=${housePageState.zipCode}&gender=${housePageState.gender}&city=${housePageState.city}&type=${housePageState.type}`;

  useEffect(() => {
    customApi = `rents?limit_by=${housePageState.limit}&page=${housePageState.page}&keyword=${housePageState.keyword}&zip_code=${housePageState.zipCode}&gender=${housePageState.gender}&city=${housePageState.city}&type=${housePageState.type}`;
  }, [housePageState.page]);

  // const [url, setUrl] = useState('rents');
  const [Data] = useAxios(customApi);
  dispatch(setHousing(Data?.data));
  const total = Data?.total;


  const scrollPagination = () => {

  };



  return (
    <>
      <div className={`row ${filterStyle.pageContainer}`}>

        <div className={`col-sm-1 col-md-3 col-lg-3 ${filterStyle.filterHide}`}>
          <Filter filterType='housing' filterTitle='Housing' />
        </div>
        <div className={`col-sm-12 col-md-9 col-lg-9 ${filterStyle.pageRow}`}>
          <SearchHouse  />
          <div className={`col-sm-12 mt-3 ${filterStyle.filterShow}`}>
            {housePageState.mobileFilter && (
              <Filter filterType='housing' filterTitle='Housing'/>
            )}
          </div>
          <HouseSection baseUrl={baseUrl}   total={total} nextPage={nextPage} previousPage={previousPage}     scrollPagination={scrollPagination} />
        </div>

      </div>

      <Interested type='rent' />
    </>
  )
}

export default HousingPage