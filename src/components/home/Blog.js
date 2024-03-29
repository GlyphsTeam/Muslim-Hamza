import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "../../assets/style/HomePage/blog.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux';
import { homeState } from '../../redux/Home';
function Blog() {
  const homeReduxS = useSelector(homeState);
  const blogData = homeReduxS.homeData?.blogs_new?.model;
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={style.blogCardsSectionContainer}>
        <h3>Latest Blogs</h3>
        <div>
          <div className={`${style.blogMainContainer} container`}>
            <div className={`row`} style={{ flexWrap: "nowrap" }}>
              <div className={`${style.mainBlogCards} col-lg-6 col-md-12 `}>
                <LazyLoadImage src={homeReduxS.homeData?.blogs?.row?.image} alt="blogImage" />
                <div className={i18n.language === 'en' ? style.firstMainBlog : style.firstMainBlogAr}>
                  <p>{homeReduxS.homeData?.blogs?.row?.title}</p>
                  <Link to={`/Show-Blog/${homeReduxS.homeData?.blogs?.row?.id}`}>
                    <div className={style.readMoreDiv}>
                      <p>Read More</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className={`${style.subMainBlogCards} col-lg-6 col-md-12 `}>
                {blogData?.map((item, index) => (
                  <div className={style.subBlogCards} key={index}>
                    <LazyLoadImage src={item?.image} alt="subBlogImage" />

                    {/* <div className={  style.subThreeBlog}> */}
                    <div className={i18n.language === 'en' ? style.subThreeBlog : style.subThreeBlogAr}>
                      <div>
                        {/* <h5>{item?.title}</h5> */}
                        <p>{item?.title}</p>
                      </div>
                      <Link to={`/Show-Blog/${item?.id}`}>
                        <div className={style.readMoreDiv}>
                          <p>Read More</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.blogCardsSectionContainerMobile}>
        <h3>Latest Blogs</h3>
        <div>
          <div className={style.blogMainContainer}>
            <div className={style.mainBlogCards}>
              <LazyLoadImage src={homeReduxS.homeData?.blogs?.row?.image} alt="mainImage" />
              <div className={style.firstMainBlog}>
                <p>{homeReduxS.homeData?.blogs?.row?.title}</p>
                <Link to={`/Show-Blog/${homeReduxS.homeData?.blogs?.row?.id}`}>
                  <div className={style.readMoreDiv}>
                    <p>Read More</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className={style.subMainBlogCards}>
              {blogData?.slice(0, 3).map((item, index) => (
                <div className={style.subBlogCards} key={index}>
                  <LazyLoadImage src={item?.image} alt="blogImage" />

                  <div className={style.subThreeBlog}>
                    <div>
                      {/* <h5>{item?.title}</h5> */}
                      <p>{item?.title}</p>
                    </div>
                    <Link to={`/Show-Blog/${item?.id}`}>
                      <div className={style.readMoreDiv}>
                        <p>Read More</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Blog;
