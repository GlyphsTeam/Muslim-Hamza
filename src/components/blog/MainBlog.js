import style from "../../assets/style/blog/mainBlog.module.css";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';
import { LazyLoadImage } from "react-lazy-load-image-component";

function MainBlog({ blogData }) {
  const blogMainData = blogData?.main;
  return (
    <div className={style.mainBlogContainer}>
      <div className={style.mainBlogSubContainer}>
        <div className={style.mainBlogCardDiv}>
          <div className={style.mainBlogImage}>
            <LazyLoadImage src={blogMainData?.image} alt="blogMainImage"/>
          </div>

          <div className={style.rightMainBlog}>
            <p className={style.dateClass}>{blogData?.created_at}</p>
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
