import React, { useState, useEffect } from "react";
import style from "../../assets/style/showHousing/showHousing.module.css";
import Share from "../../utils/Share";
import ContactInfo from "../common/ContactInfo";
import ShowHousingGallery from "../../components/showHousing/ShowHousingGallery";
import useFetch from "../../hooks/useFetchPost";
import Alert from "../alert/Alert";
import ReactHtmlParser from 'html-react-parser';
import { LazyLoadImage } from "react-lazy-load-image-component";

function ShowHousingInformation({ showHousingData }) {
  const [send, setSend] = useState(false);
  const [count, setCount] = useState(4);
  const [showAlert, setShowAlert] = useState(false);
  const [isFav, setIsFav] = useState(showHousingData?.saved);
  const token = localStorage.getItem("muslim_comunity_token");
  const id = showHousingData?.id;
  const url = `/Show-Housing/${id}`;

  let formData = new FormData();
  formData.append("id", id);

  useEffect(() => {
    setIsFav(showHousingData?.saved)
  }, [showHousingData?.saved]);

  const [Res] = useFetch("favorite/rent", formData, send);

  let favoriteIcon = isFav ? "fas fa-star" : "far fa-star";


  const [showShareModal, setShowShareModal] = useState(false);

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


  return (
    <div className={style.showHousingInfoContainer}>
      <div className={style.showHousingFirstSection}>
        <div className={style.showHousingTitle}>
          <h3>{showHousingData?.title}</h3>
        </div>

        <div className={style.showHousingIcon}>
          {showHousingData?.status === 'active' && (
            <>
              <i
                onClick={() => setShowShareModal(true)}
                className="fas fa-share-square"
              ></i>



              <i
                className={`${favoriteIcon} ${style.favIconColor}`}
                onClick={addToFavorite}
              ></i>
            </>
          )}

        </div>

      </div>
      {showHousingData?.description && (
        <div>
          <p>{ReactHtmlParser(`${showHousingData?.web_description}`)}</p>
        </div>
      )}
      <div className={style.showHousingAddress}>
        <p>
          <i className={`fas fa-map-marker-alt ${style.showHousingMarker}`}></i>{" "}
          {showHousingData?.place}
        </p>
        {showHousingData?.is_bathroom_shared ? (
          <div className={style.showHousingThirdSectionMargin}>
            <p>
              <LazyLoadImage
                alt="sharedImage"
                src={require("../../assets/images/Common/shared.png")}
                height={"20px"}
              />{" "}
              Bathroom Shared{" "}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={style.showHousingThirdSection}>
        {showHousingData?.bedrooms && (
          <div className={style.showHousingThirdSectionMargin}>
            <p className={style.showHousingIconParagraph}>
              <i className={`fas fa-bed ${style.thirdSectionIcon}`}></i>{" "}
              {showHousingData?.bedrooms}
            </p>
          </div>
        )}
        {showHousingData?.bathrooms && (
          <div className={style.showHousingThirdSectionMargin}>
            <p className={style.showHousingIconParagraph}>
              <i className={`fas fa-bath ${style.thirdSectionIcon}`}></i>{" "}
              {showHousingData?.bathrooms}
            </p>
          </div>
        )}
        {showHousingData?.area && (
          <div className={style.showHousingThirdSectionMargin}>
            <p className={style.showHousingIconParagraph}>
              <i
                className={`fas fa-expand-arrows-alt ${style.thirdSectionIcon}`}
              ></i>
              {showHousingData?.area}
            </p>
          </div>
        )}
        <div className={style.showHousingThirdSectionMargin}>
          <p>
            <LazyLoadImage
              alt="housingImage"
              className={style.thirdSectionIcon}
              src={require("../../assets/images/Common/gender.png")}
              height={"20px"}
            />
            Gender
          </p>
        </div>
      </div>
      <ShowHousingGallery showHousingData={showHousingData} />

      <div className={style.lastSectionDiv}>
        <ContactInfo data={showHousingData} />
        {showHousingData?.price && (
          <p
            className={style.priceParagraph}
          >{`$ ${showHousingData?.price}`}</p>
        )}
      </div>
      {showAlert && (<Alert type='warning' message='Please login first' showAlert={showAlert} setShowAlert={setShowAlert} count={count} setCount={setCount} />)}

      {showShareModal && <Share url={`/Show-Housing/${id}`} setShowShareModal={setShowShareModal} />}
    </div>
  );
}

export default ShowHousingInformation;
