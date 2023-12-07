// import style from "../../assets/style/pagination.module.css";
import style from "../../assets/style/common/pagination.module.css";
import { useDispatch } from 'react-redux';

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  previousPage,
  nextPage,
  setActiveIndex,
  activeIndex,
  scrollPagination
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const dispatch = useDispatch();

  return (
    <div className={style.pagination}>
      <li
        onClick={() => {
          previousPage();
          scrollPagination();
        }}
      >
        <i className="fas fa-chevron-left"></i>
        {" "}
        Previous
      </li>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={`${style.paginationBtn} ${activeIndex === index ? style.activeLi : ""}`}
            onClick={() => {
              dispatch(setCurrentPage(page));
              dispatch(setActiveIndex(index));
              scrollPagination();
            }}
          >
            {page}
          </button>
        );
      })}
      <li
        onClick={() => {
          nextPage();
          scrollPagination();
        }}
      >
        Next {" "}
        <i className="fas fa-chevron-right"></i>
      </li>
    </div>
  );
};

export default Pagination;
