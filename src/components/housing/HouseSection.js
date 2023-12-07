import Card from './HouseCard';
import Pagination from '../common/Pagination';
import style from '../../assets/style/house/housingCard.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { houseReduxState,setGender, setCity, setType, setActiveIndex, setPage } from '../../redux/House';
function HouseSection({ previousPage, nextPage, total, scrollPagination, isMyPost, baseUrl }) {
  const dispatch = useDispatch();
  const removeFilter = (e) => {
    if (e === 'type') {
      dispatch(setType(''));
    } else if (e === 'city') {
      dispatch(setCity(''));
    } else if (e === 'gender') {
      dispatch(setGender(''));
    }
  }
  const houseState = useSelector(houseReduxState);
  return (
    <>
      <div className={`row `}>
        {houseState.type && (
          <h3 className={style.filterResult}>{houseState.type} <i className="far fa-times-circle" onClick={() => removeFilter('type')}></i></h3>
        )}
        {houseState.city && (
          <h3 className={style.filterResult}>{houseState.city} <i className="far fa-times-circle" onClick={() => removeFilter('city')}></i></h3>
        )}
        {houseState.gender && (
          <h3 className={style.filterResult}>{houseState.gender} <i className="far fa-times-circle" onClick={() => removeFilter('gender')}></i></h3>
        )}
      </div>
      <div className={`row `}>
        {houseState?.housing?.map((item, index) =>
          <Card key={index} houseData={item} isMyPost={isMyPost} baseUrl={baseUrl} />
        )}
      </div>

      {houseState.limit < total && (
        <Pagination
          totalPosts={total}
          postsPerPage={houseState.limit}
          setCurrentPage={setPage}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={houseState.page}
          setActiveIndex={setActiveIndex}
          activeIndex={houseState.activeIndex}
          scrollPagination={scrollPagination}
        />
      )
      }
    </>
  )
}

export default HouseSection