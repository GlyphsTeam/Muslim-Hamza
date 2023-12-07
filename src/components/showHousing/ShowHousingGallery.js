import style from "../../assets/style/showHousing/showHousing.module.css";
import { useState } from "react";
import ShowImage from "../common/ShowGallery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux';
import { houseReduxState } from '../../redux/House';
function ShowHousingGallery() {
  // const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showHouseRedux = useSelector(houseReduxState);
  
  const toggleModal = (e) => {
    document.body.style.overflow = "hidden !important";

    setIsModalOpen(!isModalOpen);
    setActiveIndex(e);

  };

  const images = showHouseRedux?.houseShowData?.gallery;

  return (
    <>
      <div className={style.showHousingGalleryDiv}>
        {/* <ImageModal images={images} /> */}

        {images?.slice(1).map((image, index) => (
          <LazyLoadImage
            src={image}
            onClick={() => toggleModal(index)}
            // className={stye.myImg}
            alt="housingGallery"
            key={index}
          />
        ))}


      </div>
      {isModalOpen && <ShowImage images={images} setIsModalOpen={setIsModalOpen} activeIndex={activeIndex} />}
    </>
  );
}

export default ShowHousingGallery;
