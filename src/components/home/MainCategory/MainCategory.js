import React from "react";
import Slider from "react-slick";
import style from "../../../assets/style/HomePage/mainCategory.module.scss";
import { useEffect } from "react";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import useAxios from "../../../hooks/useAxios";
export default function MainCategory({ HomeData }) {
  const url = "main-market"
  console.log("HomeData>>>",HomeData)
  const[Data] = useAxios(url);
  const mainCategoryData = Data?.data;

  const mainCategoryCards = mainCategoryData
    ?.slice(0, 10)
    .map((item, index) => (
      <CategoryCard
        name={item?.name}
        description={item?.description}
        image={item?.image}
        key={index}
        id={item?.id}
      />
    ));

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

  let slidesToShowNum = Math.round(mainCategoryData?.length / 4);
  if (slidesToShowNum > 4) {
    slidesToShowNum = 4;
  }

  let mainCategorySlide = slidesToShowNum + 1;

  useEffect(() => {
    mainCategorySlide = slidesToShowNum;
  }, [slidesToShowNum]);

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: "60px",
    slidesToShow: slidesToShowNum ? mainCategorySlide : 1,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={style.mainCategoryContainer}>
      <h2>What are you looking for?</h2>

      <div className={style.cardMainBody}>
        <Slider {...settings}>{mainCategoryCards}</Slider>
      </div>
      <Link to={"/Category"}>
        <Button btnInfo={"See All"} />
      </Link>
    </div>
  );
}
