import React, { useState } from "react";
import style from "../../assets/style/shopProfile/shopGallery.module.css";
import ShowProfileGallery from "./ShowProfileGallery";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ShopGallery({ showStoreData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e) => {
    document.body.style.overflow = "hidden !important";

    setIsModalOpen(!isModalOpen);
    setActiveIndex(e);
  };
  const storeImages = showStoreData?.gallery;

  return (
    <div className={style.shopGalleryContainer}>
      <h4>Gallery</h4>
      <div className={style.shopGalleryContainerDiv}>
        {storeImages?.map((item, index) => (
          <div className={style.shopGalleryImages} key={index} onClick={() => toggleModal(index)}>
            <LazyLoadImage src={item?.image} alt="GalleryImage"/>
        </div>
        ))}
        {isModalOpen && (
          <ShowProfileGallery
            images={storeImages}
            setIsModalOpen={setIsModalOpen}
            activeIndex={activeIndex}
          />
        )}
      </div>
    </div>
  );
}

export default ShopGallery;
