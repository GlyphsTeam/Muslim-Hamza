import React, { useState } from "react";
import style from "../../assets/style/common/search_job_house.module.scss";
import filterStyle from "../../assets/style/common/filteredPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setMobileFilter, setKeyWord, setZipCode, jobsReduxState } from '../../redux/Job';
import Alert from "../alert/Alert";
function Search_job_house() {
  const location = useLocation();
  const pathName = location.pathname;
  const [count, setCount] = useState(4);
  const [showAlert, setShowAlert] = useState(false);
  const token = localStorage.getItem("muslim_comunity_token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobPageState = useSelector(jobsReduxState);

  const alert = () => {
    setCount(4);
    setShowAlert(true);
  }

  const handleAddPostClick = () => {

    if (pathName === '/Jobs') {
      navigate("/Post-Job");


    } else {
      navigate("/Post-Housing");
    }

  };
  return (
    <>
      <div className={`col-12 ${style.mainSearchDiv}`}>
        <button
          onClick={() => dispatch(setMobileFilter(!jobPageState.mobileFilter))}
          className={`col-lg-1 col-md-1 col-sm-1 ${filterStyle.filterShow}`}
        >
          {" "}
          <i className="fas fa-filter"></i>
        </button>
        <form className="col-lg-9 col-md-8 col-sm-6">
          <i className={`fas fa-search ${style.searchIcon}`}></i>
          <input
            className={`col-lg-8 col-md-8 col-sm-9 ${style.keyWordInput}`}
            onChange={(e) => dispatch(setKeyWord(e.target.value))}
            type="search"
            value={jobPageState.keyWord}
            placeholder="Search"
          />
          <input
            className={`col-lg-4 col-md-4 col-sm-3 ${style.zipcodeInput}`}
            onChange={(e) => dispatch(setZipCode(e.target.value))}
            type="search"
            value={jobPageState.zipCode}
            placeholder="Zip Code"
          />
        </form>


        <button
          className={`col-lg-2 col-md-3 col-sm-4  ${style.addPostBtn}`}
          onClick={() => token ? handleAddPostClick() : alert()}
        >
          Add Post
        </button>
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
    </>
  );
}

export default Search_job_house;
