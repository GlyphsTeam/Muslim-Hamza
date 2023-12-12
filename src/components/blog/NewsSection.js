import style from "../../assets/style/blog/newsSection.module.css";

import { Link } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux'
import { blogStateRedux } from '../../redux/Blog'
function NewsSection() {
  const blogState = useSelector(blogStateRedux);

  const newsBlog = blogState?.blogMainData?.visit?.model;
  return (
    <div className={style.newsMainDiv}>
      <div className={style.newsTitleDiv}>
        <h3>News</h3>
      </div>
      {newsBlog?.map((item, index) => (
        <Link to={`/Show-Blog/${item?.id}`} key={index}>
          <div className={style.newsMainCards}>
            <div className={style.newsImage}>
              <LazyLoadImage src={item?.image} alt="newImage" />
            </div>
            <div className={style.newsCardsTitle}>
              <p>{item?.title} </p>
              <p className={style.newsCardsDescription}> {ReactHtmlParser(`${item?.web_description}`)} </p>
              {/* <Link to={`/Show-Blog/${newsBlog?.id}`}> */}
              <div className={style.readMoreDiv}>
                <p>Read More</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NewsSection;
