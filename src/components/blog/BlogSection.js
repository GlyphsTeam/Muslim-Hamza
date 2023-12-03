import style from "../../assets/style/blog/blogCards.module.css";
import { useState } from "react";
import BlogCard from "../common/BlogCard";

function BlogCards({ blogData }) {
  const [showAllCards, setShowAllCards] = useState(false);

  const subBlogData = blogData?.statistics?.model;
  const cardsToShow = showAllCards ? subBlogData : subBlogData?.slice(0, 6);
 

  return (
    <>
      <div className={style.subBlogCardsPadding}>
        {cardsToShow?.map((item, index) => (
          <BlogCard
            title={item?.title}
            image={item?.image}
            description={item?.description}
            index={index}
            created_at = {item?.created_at}
            key={index}
            id = {item?.id}
          />
        ))}
      </div>
      <div className={style.showBtn}>
        <button onClick={() => setShowAllCards(!showAllCards)}>
          {showAllCards ? "See Less" : "See More"}
        </button>
      </div>
      </>
  );
}

export default BlogCards;
