import Card from './CategoryCard';
import Pagination from '../common/Pagination';
import style from '../../assets/style/CategorySection.module.css'
function HouseSection({ limit, categoryData, previousPage, nextPage, total, setActiveIndex, activeIndex, page, setPage, scrollPagination, categoryState, setCategoryState, subFilter, mainFilter, setMainFilter, setSubFilter }) {


  return (
    <>
      <div className={`row ${style.categoryContanier}`}>
        {categoryData?.main?.map((item, index) =>
          <Card key={index} categoryData={item} navUrl={'/Shop'}/>
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