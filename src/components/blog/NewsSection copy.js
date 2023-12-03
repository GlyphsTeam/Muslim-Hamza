import style from "../../assets/style/blog/newsSection.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function NewsSection({ blogData }) {
  const newsBlog = blogData?.news;
  return (
    <div className={style.newsMainDiv}>
      <div className={style.newsTitleDiv}>
        <h3>News</h3>
      </div>
      {newsBlog?.map((item, index) => (
        <Link to={`/Show-Blog/${item?.id}`} key={index}>
          <div className={style.newsMainCards}>
            <div className={style.newsImage}>
              <LazyLoadImage src={item?.image} alt="newImage"/>
            </div>
            <div className={style.newsCardsTitle}>
              <p>{item?.title} </p>
              <p className={style.newsCardsDescription}>{item?.description} </p>
             
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NewsSection;
