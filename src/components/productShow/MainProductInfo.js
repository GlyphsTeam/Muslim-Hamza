import React, { useState, useEffect } from "react";
import style from "../../assets/style/showProduct/mainProductInfo.module.css";
import { useTranslation } from "react-i18next";
import Alert from "../alert/Alert";
import { useLocation } from 'react-router-dom';
import Share from "../../utils/Share";
import useFetch from "../../hooks/useFetchPost";
import { useSelector } from 'react-redux';
import { marketState } from '../../redux/Market';
function MainProductInfo() {
  const showProductInfo = useSelector(marketState);
  const [showShareModal, setShowShareModal] = useState(false);
  const token = localStorage.getItem("muslim_comunity_token");
  const [send, setSend] = useState(false);
  const [count, setCount] = useState(4);
  const [isFav, setIsFav] = useState(showProductInfo?.market?.showProductItem?.item?.saved);
  const [showAlert, setShowAlert] = useState(false);
  const [t, i18n] = useTranslation();
  const urlpath = useLocation();
  const pathName = `/${i18n?.language}` + urlpath.pathname;
  useEffect(() => {
    setIsFav(showProductInfo?.market?.showProductItem?.item?.saved);
  }, [showProductInfo?.market?.showProductItem?.item?.saved]);
  let formData = new FormData();
  formData.append("id", showProductInfo?.market?.showProductItem?.item?.id);
  console.log("ssssssssssssssss",showProductInfo?.market?.showProductItem?.item ,"send>>>",send)
  const [Res] = useFetch('favorite/market', formData, send);
 console.log("res>><<<<",Res)
  let favoriteIcon = isFav ? "fas fa-bookmark" : "far fa-bookmark";

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
    <div className={style.mainProductInfoDivContainer}>
      <p className={`${style.spaceParagraph} ${style.dateStyle} `}>
        {showProductInfo?.market?.showProductItem?.created_at}
      </p>
      <div className={style.mainProductInfoDiv}>
        <div>
          <h1> {showProductInfo?.market?.showProductItem?.title} </h1>
        </div>
        <div className={style.shareSaveContainer}>
          <i
            className="fas fa-share-square"
            aria-hidden="true"
            onClick={() => handleClick()}
          ></i>
          <i
            className={favoriteIcon}
            aria-hidden="true"
            onClick={() => addToFavorite(showProductInfo?.market?.showProductItem?.id)}
          ></i>
        </div>
      </div>
      <h3 className={style.showProductPrice}>${showProductInfo?.market?.showProductItem?.price}</h3>
      <div className={style.contactDiv}>
        {showProductInfo?.market?.showProductItem?.phone_number && (
          <p className={style.contactMobile}>
            <a href={`tel:${showProductInfo?.market?.showProductItem?.phone_number}`}>
              <i className={`fas fa-phone-alt`} aria-hidden="true"></i>
              {showProductInfo?.market?.showProductItem?.phone_number}
            </a>
          </p>
        )}

        {showProductInfo?.market?.showProductItem?.phone_number && (
          <p className={`${style.spaceParagraph} ${style.contactMobile}`}>
            <a href={`mailto:${showProductInfo?.market?.showProductItem?.email}`}>
              <i
                className={`fas fa-envelope-open-text ${style.iconJobMain}`}
              ></i>
              {showProductInfo?.market?.showProductItem?.email}
            </a>
            {/* <i className="fas fa-envelope-open-text " aria-hidden="true"></i>
            {showProductInfo?.market?.showProductItem?.email} */}
          </p>
        )}
        <div className={style.locationDateContainer}>
          <p className={style.locationStyle}>
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            {showProductInfo?.market?.showProductItem?.place}
          </p>
        </div>
      </div>
      <div className={style.generalTipsDiv}>
        <h3>{t("General Tips")}</h3>
        <ul>
          <li>{t("Only meet in public places")}</li>
          <li>{t("Never pay or transfer money in advance")}</li>
          <li>{t("Inspect the product before you buy it")}</li>
        </ul>
      </div>

      {showAlert && (
        <Alert
          type="warning"
          message="Please login first."
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          count={count}
          setCount={setCount}
        />
      )}
      {showShareModal && (
        <Share
          url={pathName}
          setShowShareModal={setShowShareModal}
        />
      )}
    </div>
  );
}

export default MainProductInfo;
