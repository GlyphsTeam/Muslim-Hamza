import style from "../../assets/style/showBlog/showBlog.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ShowBlogParagraph({ showBlogData }) {
  const showBlogParagraphData = showBlogData?.paragraphs;
  return (
    <div className={style.showBlogParagraphContainer}>
      {showBlogParagraphData?.map((item, index) => (
        <div className={style.showBlogParagraphMain}>
          <h3>{item?.title}</h3>
          <p>
          {item?.description}
          </p>
          <div className={style.showBlogParagraphImage}>
            <LazyLoadImage src={ item?.image}  alt="blogImage"/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowBlogParagraph;
