import React, { useState, useEffect } from "react";
import style from "../../assets/style/showHousing/showHousing.module.css";
import Share from "../../utils/Share";
import ContactInfo from "../common/ContactInfo";
import ShowHousingGallery from "../../components/showHousing/ShowHousingGallery";
import useFetch from "../../hooks/useFetchPost";
import Alert from "../alert/Alert";
import ReactHtmlParser from 'html-react-parser';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux';
import { houseReduxState } from '../../redux/House'
function ShowHousingInformation() {
  const showDataHouse= useSelector(houseReduxState)
  const [send, setSend] = useState(false);
  const [count, setCount] = useState(4);
  const [showAlert, setShowAlert] = useState(false);
  const [isFav, setIsFav] = useState(showDataHouse.houseShowData?.saved);
  const token = localStorage.getItem("muslim_comunity_token");
  const id = showDataHouse.houseShowData?.id;
     
    let formData = new FormData();
  formData.append("id", id);

  useEffect(() => {
    setIsFav(showDataHouse.houseShowData?.saved)
  }, [showDataHouse.houseShowData?.saved]);

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
          <h3>{showDataHouse.houseShowData?.title}</h3>
        </div>

        <div className={style.showHousingIcon}>
          {showDataHouse.houseShowData?.status === 'active' && (
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
      {showDataHouse.houseShowData?.description && (
        <div>
          <p>{ReactHtmlParser(`${showDataHouse.houseShowData?.web_description}`)}</p>
        </div>
      )}
      <div className={style.showHousingAddress}>
        <p>
          <i className={`fas fa-map-marker-alt ${style.showHousingMarker}`}></i>{" "}
          {showDataHouse.houseShowData?.place}
        </p>
        {showDataHouse.houseShowData?.is_bathroom_shared ? (
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
        {showDataHouse.houseShowData?.bedrooms && (
          <div className={style.showHousingThirdSectionMargin}>
            <p className={style.showHousingIconParagraph}>
              <i className={`fas fa-bed ${style.thirdSectionIcon}`}></i>{" "}
              {showDataHouse.houseShowData?.bedrooms}
            </p>
          </div>
        )}
        {showDataHouse.houseShowData?.bathrooms && (
          <div className={style.showHousingThirdSectionMargin}>
            <p className={style.showHousingIconParagraph}>
              <i className={`fas fa-bath ${style.thirdSectionIcon}`}></i>{" "}
              {showDataHouse.houseShowData?.bathrooms}
            </p>
          </div>
        )}
        {showDataHouse.houseShowData?.area && (
          <div className={style.showHousingThirdSectionMargin}>
            <p className={style.showHousingIconParagraph}>
              <i
                className={`fas fa-expand-arrows-alt ${style.thirdSectionIcon}`}
              ></i>
              {showDataHouse.houseShowData?.area}
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
      <ShowHousingGallery  />

      <div className={style.lastSectionDiv}>
        <ContactInfo data={showDataHouse.houseShowData} />
        {showDataHouse.houseShowData?.price && (
          <p
            className={style.priceParagraph}
          >{`$ ${showDataHouse.houseShowData?.price}`}</p>
        )}
      </div>
      {showAlert && (<Alert type='warning' message='Please login first' showAlert={showAlert} setShowAlert={setShowAlert} count={count} setCount={setCount} />)}

      {showShareModal && <Share url={`/Show-Housing/${id}`} setShowShareModal={setShowShareModal} />}
    </div>
  );
}

export default ShowHousingInformation;
