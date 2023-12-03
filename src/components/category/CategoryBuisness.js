import Card from './CategoryCard';
import Pagination from '../common/Pagination';

function CategoryBuisness({ limit, categoryData, previousPage, nextPage, total, setActiveIndex, activeIndex, page, setPage, scrollPagination, categoryState, setCategoryState, subFilter, mainFilter, setMainFilter, setSubFilter }) {
  return (
    <>
      <div className={`row `}>
        {categoryData?.map((item, index) =>
          <Card key={index} categoryData={item} navUrl={`/businessPage/${item?.id}`}/>
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

export default CategoryBuisness