import style from "../../assets/style/category/categoryCard.module.scss";
import { Link } from "react-router-dom";
import searchStyle from "../../assets/style/searchResult/searchResultPage.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SearchResultsCard({ cardsData, url_search, type }) {
  let rentData;
  let blogData;
  let jobData;
  let storeData;

  if (cardsData?.rents) {
    rentData = cardsData.rents.filter(Boolean);
  }

  if (cardsData?.jobs) {
    jobData = cardsData.jobs.filter(Boolean);
  }

  if (cardsData?.blogs) {
    blogData = cardsData.blogs.filter(Boolean);
  }

  if (cardsData?.stores) {
    storeData = cardsData.stores.filter(Boolean);
  }

  // check if no data found for any category
  const noDataFound =
    rentData?.length === 0 &&
    jobData?.length === 0 &&
    blogData?.length === 0 &&
    storeData?.length === 0;

  return (
    <div
      className={`row d-flex justify-content-between ${searchStyle.searchContainer}`}
    >
      {noDataFound ? (
        <div className={`text-center w-100 ${searchStyle.noResultDiv} `}>
          <p>No results found</p>
        </div>
      ) : (
        <>
          {rentData?.length > 1 && (
            <>
              <h3>Housing</h3>
              {rentData?.map((rent) => (
                <div
                  key={rent.id}
                  className={`col-lg-3 col-md-4 col-sm-6 ${style.mainCategoryCard}`}
                >
                  <Link
                    to={`/Show-Housing/${rent.id}`}
                    className={style.categoryCardBody}
                  >
                    <div className={`${style.categoryCardBody}`}>
                      <LazyLoadImage className={style.categoryImage} src={rent?.image} alt="CategoryImage"/>
                      <div className={`row ${style.categoryMainInfoBox}`}>
                        <div className={`col-12 ${style.categoryInfo}`}>
                          <h4 className={style.categoryTitle}>{rent?.title}</h4>
                          <br />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          )}

          {jobData?.length > 1 && (
            <>
              <h3>Jobs</h3>

              {jobData?.map((job) => (
                <div
                  key={job.id}
                  className={`col-lg-3 col-md-4 col-sm-6 ${style.mainCategoryCard}`}
                >
                  <Link
                    to={`/Show-Job/${job.id}`}
                    className={style.categoryCardBody}
                  >
                    <div className={`${style.categoryCardBody}`}>
                      <LazyLoadImage
                        className={style.categoryImage}
                        src={job.user_image}
                        alt="userImage"
                      />
                      <div className={`row ${style.categoryMainInfoBox}`}>
                        <div className={`col-12 ${style.categoryInfo}`}>
                          <h4 className={style.categoryTitle}>{job?.title}</h4>
                          <br />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          )}

          {blogData?.length > 1 && (
            <>
              <h3>Blogs</h3>

              {blogData?.map((blog) => (
                <div
                  key={blog.id}
                  className={`col-lg-3 col-md-4 col-sm-6 ${style.mainCategoryCard}`}
                >
                  <Link
                    to={`/Show-Blog/${blog.id}`}
                    className={style.categoryCardBody}
                  >
                    <div className={`${style.categoryCardBody}`}>
                      <LazyLoadImage className={style.categoryImage} src={blog.image}  alt="blogImage"/>
                      <div className={`row ${style.categoryMainInfoBox}`}>
                        <div className={`col-12 ${style.categoryInfo}`}>
                          <h4 className={style.categoryTitle}>{blog.title}</h4>
                          <br />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          )}
          {storeData?.length > 1 && (
            <>
              <h3>Stores</h3>
              {storeData?.map((store) => (
                <div
                  key={store.id}
                  className={`col-lg-3 col-md-4 col-sm-6 ${style.mainCategoryCard}`}
                >
                  <Link
                    to={`/Shop-Profile/${store.id}`}
                    className={style.categoryCardBody}
                  >
                    <div className={`${style.categoryCardBody}`}>
                      <LazyLoadImage className={style.categoryImage} src={store?.image} alt="storeImage" />
                      <div className={`row ${style.categoryMainInfoBox}`}>
                        <div className={`col-12 ${style.categoryInfo}`}>
                          <h4 className={style.categoryTitle}>{store?.name}</h4>
                          <br />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
