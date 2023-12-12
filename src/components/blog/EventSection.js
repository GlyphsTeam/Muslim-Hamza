import style from "../../assets/style/blog/blogCards.module.css";
import { useEffect } from "react";
import BlogCard from "../common/BlogCard";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { blogStateRedux } from '../../redux/Blog';
function EventCard() {
  const stateBlog = useSelector(blogStateRedux);
  const eventBlog = stateBlog?.blogMainData?.events?.model

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={style.customNextArrow} onClick={onClick}>

        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (

      <div className={style.customPrevArrow} onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

  let slidesToShowNum = Math.round(eventBlog?.length / 2);
  if (slidesToShowNum > 4) {
    slidesToShowNum = 4;
  }

  let mainCategorySlide = slidesToShowNum + 1;

  useEffect(() => {
    mainCategorySlide = slidesToShowNum;
  }, [slidesToShowNum]
  );

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // rows: 2,
    // slidesPerRow: 1,
    slidesToShow: slidesToShowNum ? mainCategorySlide : 1,

    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          slidesToShow: 2


        },
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2

        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 380,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 340,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={style.eventMainDiv}>
      <h3>Events</h3>
      <div className={style.subBlogCards}>
        <Slider {...settings}>
          {eventBlog?.map((item, index) => (

            <BlogCard
              title={item?.title}
              image={item?.image}
              description={item?.description}
              index={index}
              created_at={item?.created_at}
              key={index}
              id={item?.id}
            />

          ))}
        </Slider>
      </div>
    </div>

  );
}

export default EventCard;
