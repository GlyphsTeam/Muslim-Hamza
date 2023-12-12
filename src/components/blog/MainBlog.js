import style from "../../assets/style/blog/mainBlog.module.css";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux'
import { blogStateRedux } from '../../redux/Blog'
function MainBlog() {
  const blogStateMain = useSelector(blogStateRedux);
  const blogMainData = blogStateMain.blogMainData?.main;
  return (
    <div className={style.mainBlogContainer}>
      <div className={style.mainBlogSubContainer}>
        <div className={style.mainBlogCardDiv}>
          <div className={style.mainBlogImage}>
            <LazyLoadImage src={blogMainData?.image} alt="blogMainImage" />
          </div>

          <div className={style.rightMainBlog}>
            <h5>{blogMainData?.title}</h5>
            <p className={style.mainCardParagraph}>
              {ReactHtmlParser(`${blogMainData?.web_description}`)}
            </p>
            <Link to={`/Show-Blog/${blogMainData?.id}`}>
              <div className={style.readMoreDiv}>
                <p>Read More</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MainBlog;
