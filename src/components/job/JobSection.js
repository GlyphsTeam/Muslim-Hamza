import Card from './JobCard';
import Pagination from '../common/Pagination';
import style from '../../assets/style/job/jobCard.module.scss'

function HouseSection({jobData, limit, setCity, setType, type, city, previousPage, nextPage, total, setActiveIndex, activeIndex, page, setPage, scrollPagination, baseUrl}) {

  const removeFilter = (e) => {
    if(e === 'type'){
      setType('');
    }else if(e === 'city'){
      setCity('');
    }
  }
  
  return (
    <>
    <div className={`row `}>
        {type && (
          <h3 className={style.filterResult}>{type} <i className="far fa-times-circle" onClick={()=> removeFilter('type')}></i></h3>
        )}
        {city && (
          <h3 className={style.filterResult}>{city} <i className="far fa-times-circle" onClick={()=> removeFilter('city')}></i></h3>
        )}
    </div> 
    <div className={`row `}>
        {jobData?.map((item, index)=>
              <Card key={index} jobData = {item} baseUrl={baseUrl} />
        )}
    </div>

    {limit < total && (
                <Pagination
                    totalPosts={total}
                    postsPerPage={limit}
                    setCurrentPage={setPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    currentPage={page}
                    setActiveIndex={setActiveIndex}
                    activeIndex={activeIndex}
                    scrollPagination={scrollPagination}
                />
            )
            }
    </>
  )
}

export default HouseSection