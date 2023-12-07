import React, { useState, useEffect } from "react";
import style from "../../assets/style/showJob/showJob.module.css";
import useFetch from "../../hooks/useFetchPost";
import Share from "../../utils/Share";
import Alert from "../alert/Alert";
import ReactHtmlParser from 'html-react-parser';
import { useSelector } from 'react-redux';
import { jobsReduxState } from '../../redux/Job';
function ShowJobMainInformation() {
  const jobReduxPage = useSelector(jobsReduxState);
  const [send, setSend] = useState(false);
  const [count, setCount] = useState(4);
  const [showAlert, setShowAlert] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isFav, setIsFav] = useState(jobReduxPage?.showJobPage?.saved);
  const token = localStorage.getItem("muslim_comunity_token");
  const id = jobReduxPage?.showJobPage?.id;
  const url = `/Show-Job/${id}`;
  console.log("jobReduxPage>>>",jobReduxPage)
  let formData = new FormData();
  formData.append("id", id);

  useEffect(() => {
    setIsFav(jobReduxPage?.showJobPage?.saved);
  }, [jobReduxPage?.showJobPage?.saved]);

  const [Res] = useFetch("favorite/job", formData, send);

  let favoriteIcon = isFav ? "fas fa-star" : "far fa-star";

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
          <p> {jobReduxPage?.showJobPage?.created_at} </p>
          <h3>{jobReduxPage?.showJobPage?.title}</h3>
          <div className={style.showJobDescription}>
            <h5>Job description</h5>
            <p>{ReactHtmlParser(`${jobReduxPage?.showJobPage?.web_description}`)}</p>
          </div>
        </div>
        <div className={style.showJobIcon}>
          {jobReduxPage?.showJobPage?.status === 'active' && (
            <>
              <i onClick={() => handleClick(url)} className="fas fa-share-square"></i>

              <i
                className={`${favoriteIcon} ${style.favIconColor}`}
                onClick={addToFavorite}
              ></i>
            </>
          )}
        </div>
        {showShareModal && <Share url={`/Show-Job/${id}`} setShowShareModal={setShowShareModal} />}

      </div>
      {showAlert && (<Alert type='warning' message='Please login first' showAlert={showAlert} setShowAlert={setShowAlert} count={count} setCount={setCount} />)}
    </>
  );
}

export default ShowJobMainInformation;
