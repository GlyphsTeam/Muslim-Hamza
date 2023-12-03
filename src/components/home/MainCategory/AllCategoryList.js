import {  useEffect } from "react";
import Slider from "react-slick";
import style from "../../../assets/style/HomePage/categoryList.module.css";
import CategoryCard from "./CategoryCard";
import { Link } from 'react-router-dom';
function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            // style={{ ...style, display: "none" }}
            onClick={onClick}
          />
        );
      }
      export default function AutoPlay({HomeData, type, dir, sliderToShow}) {
        const mainCategoryData = HomeData?.categories;

  
        // let redirectType = '';

        // if (type === 'shops'){
        //   redirectType = 'business'
        // }
        // else{
        //   redirectType = 'service'
        // }
        const CardList = mainCategoryData?.map((item) => (
          // (item.type === redirectType &&
          <Link
            key={item.id}
            to={`/SubCategory/${item.name}/${item.id}?Page=${type}`}
            className={style.navLink}
          >
            <CategoryCard name={item.name} id={item.id} image={item.image} />
          </Link>
          // )
        ));
=        let slidesToShowNum = Math.round( mainCategoryData?.length/ 4);
        if (slidesToShowNum > 3) {
          slidesToShowNum = 3;
        }
      let mainCategorySlide = slidesToShowNum + 1;

      useEffect(() => {
        mainCategorySlide = slidesToShowNum;
      }, [slidesToShowNum]
      );
      
        const settings = {
        //   infinite: true,
        //   slidesToShow: slidesToShowNum,
        //   slidesToScroll: 1,
        //   autoplay: true,
        //   speed: 5000,
        //   autoplaySpeed: 1000,
        //   cssEase: "linear",
        //   pauseOnHover: true,
        //   rtl: false,
        //   nextArrow: <SampleNextArrow />,
        //   prevArrow: <SamplePrevArrow />,
        
        dots: false,
        infinite: true, 
        // slidesToShow: sliderToShow,
        slidesToShow: slidesToShowNum  ?  mainCategorySlide : 1  ,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3500,
        rows: 2,
        // cssEase: "linear",
        pauseOnHover: true,
        // rtl: dir,
          responsive: [
            {
                breakpoint: 1200,
                settings: {
                  infinite: true,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 1024,
              settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 599,
              settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 3000

              }
            },
            {
              breakpoint: 380,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplaySpeed: 3000
              }
            }
          ]
        };
        return (
          <div className={style.AllCategoryContainer}>
            <Slider {...settings}>
                {CardList}
                </Slider>
          </div>
        );
      }









