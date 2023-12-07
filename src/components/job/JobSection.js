import Card from './JobCard';
import Pagination from '../common/Pagination';
import style from '../../assets/style/job/jobCard.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { jobsReduxState, setCity, setType, setPage, setActiveIndex } from '../../redux/Job'
function HouseSection({ previousPage, nextPage, total,  scrollPagination, baseUrl }) {
  const jobReduxState = useSelector(jobsReduxState);
  const dispatch = useDispatch();
  const removeFilter = (e) => {
    if (e === 'type') {
      dispatch(setType(''));
    } else if (e === 'city') {
      dispatch(setCity(''));
    }
  }
  return (
    <>
      <div className={`row `}>
        {jobReduxState.type && (
          <h3 className={style.filterResult}>{jobReduxState.type} <i className="far fa-times-circle" onClick={() => removeFilter('type')}></i></h3>
        )}
        {jobReduxState.city && (
          <h3 className={style.filterResult}>{jobReduxState.city} <i className="far fa-times-circle" onClick={() => removeFilter('city')}></i></h3>
        )}
      </div>
      <div className={`row `}>
        {jobReduxState?.jobs?.map((item, index) =>
          <Card key={index} jobData={item} baseUrl={baseUrl} />
        )}
      </div>

      {jobReduxState.limit < total && (
        <Pagination
          totalPosts={total}
          postsPerPage={jobReduxState.limit}
          setCurrentPage={setPage}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={jobReduxState.page}
          setActiveIndex={setActiveIndex}
          activeIndex={jobReduxState.activeIndex}
          scrollPagination={scrollPagination}
        />
      )
      }
    </>
  )
}

export default HouseSection