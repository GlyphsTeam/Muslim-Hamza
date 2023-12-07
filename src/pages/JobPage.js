import React, { useState, useEffect } from 'react';
import filterStyle from '../assets/style/common/filteredPage.module.css'
import Filter from '../components/common/FilterBusinessJob';
import SearchJob from '../components/common/SearchJob';
import useAxios from '../hooks/useAxios';
import JobSection from '../components/job/JobSection';
import Interested from '../components/common/interested/InterestedSection';
import { 
  setJobs,
  setJobTotal, 
  setActiveIndex, 
  setPage,
  jobsReduxState
} from '../redux/Job';
import { useDispatch ,useSelector } from 'react-redux'
function JobPage({ baseUrl }) {

  const dispatch = useDispatch();
  const jobReduxState = useSelector(jobsReduxState);

  const nextPage = () => {
    if ((total / jobReduxState.limit) > jobReduxState.activeIndex + 1) {
      dispatch(setPage(jobReduxState.page + 1));
      dispatch(setActiveIndex(jobReduxState.activeIndex + 1));
    }
  }
  const previousPage = () => {
    if (jobReduxState.page > 1) {
      dispatch(setPage(jobReduxState.page - 1));
      dispatch(setActiveIndex(jobReduxState.activeIndex - 1));
    }
  }

  let customApi = `jobs?limit_by=${jobReduxState.limit}&page=${jobReduxState.page}&keyword=${jobReduxState.keyword}&zip_code=${jobReduxState.zipCode}&city=${jobReduxState.city}&type=${jobReduxState.type}`;

  useEffect(() => {
    customApi = `jobs?limit_by=${jobReduxState.limit}&page=${jobReduxState.page}&keyword=${jobReduxState.keyword}&zip_code=${jobReduxState.zipCode}&city=${jobReduxState.city}&type=${jobReduxState.type}`;
  }, [jobReduxState.page]);

  const [Data] = useAxios(customApi);
  dispatch(setJobs(Data?.data));
  dispatch(setJobTotal(Data?.total))
  const total = Data?.total;


  const scrollPagination = () => {
    // if (window.innerWidth < 480) {
    //   placesToVisitId.current.scrollIntoView(
  };

  return (
    <>
      <div className={`row ${filterStyle.pageContainer}`}>

        <div className={`col-sm-1 col-md-3 col-lg-3 ${filterStyle.filterHide}`}>
          <Filter filterType='job' filterTitle='Job' />
        </div>

        <div className={`col-sm-12 col-md-9 col-lg-9 ${filterStyle.pageRow}`}>
          <SearchJob />
          <div className={`col-sm-12 mt-3 ${filterStyle.filterShow}`}>
            {jobReduxState.mobileFilter && (
              <Filter filterType='job' filterTitle='Job' />
            )}
          </div>

          <JobSection total={total} nextPage={nextPage} previousPage={previousPage}   scrollPagination={scrollPagination} baseUrl={baseUrl} />
        </div>

      </div>

      <Interested type='job' />
    </>
  )
}

export default JobPage