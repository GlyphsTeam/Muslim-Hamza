import Card from './HouseCard';
import Pagination from '../common/Pagination';
import style from '../../assets/style/house/housingCard.module.scss'

function HouseSection({houseData, limit, setType, setCity, setGender, gender, city, type, previousPage, nextPage, total, setActiveIndex, activeIndex, page, setPage, scrollPagination, isMyPost, baseUrl}) {
  const removeFilter = (e) => {
    if(e === 'type'){
      setType('');
    }else if(e === 'city'){
      setCity('');
    }else if(e === 'gender'){
      setGender('');
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
        {gender && (
          <h3 className={style.filterResult}>{gender} <i className="far fa-times-circle" onClick={()=> removeFilter('gender')}></i></h3>
        )}
    </div>
    <div className={`row `}>
        {houseData?.map((item, index)=>
              <Card key={index} houseData = {item} isMyPost={isMyPost} baseUrl={baseUrl}/>
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