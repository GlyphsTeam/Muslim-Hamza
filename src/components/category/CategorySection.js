import Card from './CategoryCard';
import Pagination from '../common/Pagination';
import style from '../../assets/style/CategorySection.module.css'
import { useSelector } from 'react-redux';
import { marketState } from '../../redux/Market'
function HouseSection({ limit, previousPage, nextPage, total, setActiveIndex, setPage, scrollPagination }) {
  const marketCategpry = useSelector(marketState)
  return (
    <>
      <div className={`row ${style.categoryContanier}`}>
        {marketCategpry?.market?.marketList?.main?.map((item, index) =>
          <Card key={index} categoryData={item} navUrl={'/Shop'} />
        )}
      </div>

      {limit < total && (
        <Pagination
          totalPosts={total}
          postsPerPage={marketCategpry?.market?.limit}
          setCurrentPage={setPage}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={marketCategpry?.market?.page}
          setActiveIndex={setActiveIndex}
          activeIndex={marketCategpry?.market?.activeIndex}
          scrollPagination={scrollPagination}
        />
      )
      }
    </>
  )
}

export default HouseSection