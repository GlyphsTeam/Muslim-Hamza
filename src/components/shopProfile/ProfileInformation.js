import React, { useEffect, useState } from "react";
import style from "../../assets/style/shopProfile/shopInfo.module.css";
import WorkHoursMobile from "./WorkHoursMobile";
import SocialMedia from "./SocialMedia";
import ContactInfo from "../common/ContactInfo";
import Share from "../../utils/Share";
import useFetch from "../../hooks/useFetchPost";
import Alert from "../alert/Alert";
import ReactHtmlParser from 'html-react-parser';
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProfileInformation({ showStoreData }) {
  const [send, setSend] = useState(false);
  const [count, setCount] = useState(4);
  const [showAlert, setShowAlert] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const [isFav, setIsFav] = useState(showStoreData?.saved);
  const token = localStorage.getItem("muslim_comunity_token");

  const id = showStoreData?.id;
  const url = `/Shop-Profile/${id}`;

  let formData = new FormData();
  formData.append("id", id);

  useEffect(() => {
    setIsFav(showStoreData?.saved);
  }, [showStoreData?.saved]);

  const [Res] = useFetch("favorite/store", formData, send);

  let favoriteIcon = isFav ? "fas fa-star" : "far fa-star";

  const handleClick = () => {
    setShowShareModal(true);
  };

  const addToFavorite = () => {
    if (token) {
      setIsFav(!isFav);
      setSend(true);
      setTimeout(() => {
        setSend(false);
      }, 100);
    } else {
      setShowAlert(true);
      setCount(4);
    }
  };
    const handleClickMap = (lat, lng) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  };


  return (
    <>
      <div className={`container col-9 ${style.leftInfo}`}>
        <div className={`row  ${style.infoSubDiv}`}>
          <div className={`col-sm-12 col-md-8 col-lg-4`}>
            <div className={style.shopInfoImage}>
              <LazyLoadImage src={showStoreData?.image} alt="shopInfoImage"/>
            </div>
          </div>
          <div className={`col-sm-12 col-md-8 col-lg-8 `}>
            {/* <div className={style.leftInfo}> */}
            <div className={style.leftInfoFirstSection}>
              <h3> {showStoreData?.name}</h3>
              <div className={style.favoriteIconDiv}>
                <i
                  onClick={() => handleClick(url)}
                  className="fas fa-share-square"
                ></i>

                <i className={`${favoriteIcon} `} onClick={addToFavorite}></i>
              </div>
            </div>
            <div className={style.profileInfoParagraph}>
              <p>{showStoreData?.description}</p>
            </div>
              {showStoreData?.locations_address && (
            <p className={`px-2 ${style.webAddress}`} onClick={() => handleClickMap(showStoreData?.locations_lat, showStoreData?.locations_lng)}  >
              <i className={`fas fa-map-marker-alt`}></i>
              {showStoreData?.locations_address}
            </p>
              )}
            <div className={style.socialMediaDiv}>
              <ContactInfo data={showStoreData} />
              <SocialMedia showStoreData={showStoreData} />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div>
        <div className={`${style.leftInfoMobile}`}>
          <div className={` ${style.infoSubDiv}`}>
            <div className={style.shopInfoImage}>
              <LazyLoadImage src={showStoreData?.image} alt="shopInfoImage"/>
            </div>
            {/* <div className={style.leftInfo}> */}
            <div className={style.leftInfoFirstSection}>
              <div>
                {" "}
                <h3> {showStoreData?.name}</h3>
                <SocialMedia showStoreData={showStoreData} />
              </div>
              

              <div className={style.favoriteIconDiv}>
                <i
                  onClick={() => handleClick(url)}
                  className="fas fa-share-square"
                ></i>

                <i className={`${favoriteIcon} `} onClick={addToFavorite}></i>
              </div>
            </div>
          </div>
        </div>
        {showStoreData?.locations_address && (
            <p className={`px-3 ${style.webAddressMobile}`} onClick={() => handleClickMap(showStoreData?.locations_lat, showStoreData?.locations_lng)}  >
              <i className={`fas fa-map-marker-alt`}></i>
              {showStoreData?.locations_address}
            </p>
              )}
        <div className={style.contactDiv}>
          {" "}
          <ContactInfo data={showStoreData} />
        </div>
        

        <WorkHoursMobile showStoreData={showStoreData} />
        <div className={style.profileInfoParagraphMobile}>
          <h4>Description</h4>
          <p>{ReactHtmlParser(`${showStoreData?.web_description}`)}</p>
        </div>
      </div>
      {showAlert && (
        <Alert
          type="warning"
          message="Please login first"
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          count={count}
          setCount={setCount}
        />
      )}
      {showShareModal && (
        <Share
          url={`/Shop-Profile/${id}`}
          setShowShareModal={setShowShareModal}
        />
      )}
    </>
  );
}

export default ProfileInformation;
