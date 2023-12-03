import style from "../../assets/style/blog/blogCards.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Card({ title, image, description, index, created_at, id }) {
  return (
    <>
      {/* <div className={style.subBlogCards}> */}

      <div className={style.subBlogMainCard} key={index}>
        <Link to={`/Show-Blog/${id}`}>
          <div className={style.subBlogCardImg}>
            <LazyLoadImage src={image} alt={title} />
          </div>
          <div className={style.bottomCard}>
            <li>{`${created_at}`}</li>
            <h5>{title}</h5>
            {/* <p>{description}</p> */}
            {/* <Link to={`/Show-Blog/${id}`}> */}
              <div className={style.readMoreDiv}>
                <p>Read More</p>
              </div>
            {/* </Link> */}
          </div>
        </Link>
      </div>

      {/* ))} */}
      {/* </div> */}
    </>
  );
}

export default Card;
