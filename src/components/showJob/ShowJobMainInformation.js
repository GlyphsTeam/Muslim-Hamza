import React, { useState, useEffect } from "react";
import style from "../../assets/style/showJob/showJob.module.css";
import useFetch from "../../hooks/useFetchPost";
import Share from "../../utils/Share";
import Alert from "../alert/Alert";
import ReactHtmlParser from 'html-react-parser';

function ShowJobMainInformation({ showJobData }) {
  const [send, setSend] = useState(false);
  const [count, setCount] = useState(4);
  const [showAlert, setShowAlert] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isFav, setIsFav] = useState(showJobData?.saved);
  const token = localStorage.getItem("muslim_comunity_token");
  const id = showJobData?.id;
  const url = `/Show-Job/${id}`;

  let formData = new FormData();
  formData.append("id", id);

  useEffect(() => {
    setIsFav(showJobData?.saved);
  }, [showJobData?.saved]);
  
  const [Res] = useFetch("favorite/job", formData, send);

  let favoriteIcon = isFav ? "fas fa-star" : "far fa-star";


  useEffect(() => {
    setIsFav(showJobData?.saved)
  },[showJobData?.saved]);


  const handleClick = () => {
    setShowShareModal(true);
  };

  const addToFavorite = () => {
    if (token) {
      setSend(true);
      setIsFav(!isFav);
      setTimeout(() => {
        setSend(false);
       
      }, 100);
    } else {
      setShowAlert(true);
      setCount(4);
    }
  };



  return (
    <>
    <div className="d-flex justify-content-between ">
      <div className={style.rightShowJobContainer}>
        <p> {showJobData?.created_at} </p>
        <h3>{showJobData?.title}</h3>
        <div className={style.showJobDescription}>
          <h5>Job description</h5>
          <p>{ReactHtmlParser(`${showJobData?.web_description}`)}</p>
        </div>
      </div>
      <div className={style.showJobIcon}>
        {showJobData?.status === 'active' && (
          <>
        <i onClick={() => handleClick(url)} className="fas fa-share-square"></i>

        <i
          className={`${favoriteIcon} ${style.favIconColor}`}
          onClick={addToFavorite}
        ></i>
          </>
        )}
      </div>
      {showShareModal && <Share url={`/Show-Job/${id}`}  setShowShareModal={setShowShareModal} />}

    </div>
      {showAlert && (<Alert type='warning' message='Please login first' showAlert={showAlert} setShowAlert={setShowAlert} count={count} setCount={setCount} /> )}
      </>
  );
}

export default ShowJobMainInformation;
