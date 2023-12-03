import style from "../../assets/style/showBlog/showBlog.module.css";
import ReactHtmlParser from 'html-react-parser';
import { LazyLoadImage } from "react-lazy-load-image-component";

function MainShowBlog({showBlogData}) {
  return (
    <div className={style.MainShowBlogContainer}>
      <div className={style.mainShowBlogFirstSection}>
        <h3>{showBlogData?.title}</h3>
        <p className={style.showBlogDate}>{showBlogData?.created_at}</p>
        <p>
        {ReactHtmlParser(`${showBlogData?.web_description}`)}
        </p>
      </div>
      <div className={style.showBlogMainDiv}>
        <LazyLoadImage src={showBlogData?.cover} alt="blogImage" />
      </div>
    </div>
  );
}

export default MainShowBlog;
