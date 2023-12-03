import Slider from "react-slick";
import style from '../../assets/style/common/galleryModal.module.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

function ShowProfileGallery({images , setIsModalOpen, activeIndex}) {
 
  const closeModal = (index) => {

    document.body.style.overflow = "auto"
    setIsModalOpen(false)
  };


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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={style.modal}
        
      >
        <div className={style.modalContent}>
          <span className={style.close} onClick={closeModal}>
            &times;
          </span>
            <Slider {...settings} initialSlide={activeIndex}>
              {images?.map((image, index) => (
                <div key={image}>
                  <LazyLoadImage src={image?.image} width={"100%"} className={style.showGalleryImage} alt="showGallery"/>
                </div>
              ))}
            </Slider>
        </div>
      </div>
      
    </>
  );
}

export default ShowProfileGallery;
