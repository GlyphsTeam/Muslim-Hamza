import React, { useState } from "react";
import PrayTime from "./PrayTime";
import style from "../../../assets/style/common/findMasjid/findMasjidSection.module.css";
import useAxios from "../../../hooks/useAxios";
import MasjidSearch from "./MasjidSearch";
import Map from "../../common/Map";
import { useLocation } from "react-router-dom";

function FindMasjidSection({masjidKeyword , setMasjidKeyword, dataMasjid}) {
  const [homeKeyword, setHomeKeyword] = useState('');
  // const [masjidKeyword, setMasjidKeyword] = useState('');
  const location = useLocation();
  const pathName = location.pathname;
  const masjidUrl = `/Masjid`;
  const HomeUrl = '/';
  
  let url = '';

  if (pathName === masjidUrl) {
    url = `masjid/azan/masjid?keyword=${masjidKeyword}`;

  } else if (pathName === HomeUrl) {
    url = `masjid/azan/masjid?keyword=${homeKeyword}`;
  }
    const [Data] = useAxios(url);
  let findMasjidData = Data?.data;
  let findMasjidDataList = findMasjidData?.masjid

  
  // const findMasjidData = Data?.data;

  return (
    <div className={style.findMasjidSectionContainer}>
      <div
        className={
          pathName === masjidUrl
            ? style.findMasjidSectionSideTitle
            : style.findMasjidSectionTitle
        }
      >
        <h3>Find A Masjid Near Me</h3>
      </div>
      <div
        className={`${
          pathName === masjidUrl
            ? style.findMasjidSectionPageContainer
            : style.findMasjidSectionInfoContainer
        } container`}
      >
        <div className={`row`}>
          <div className={`col-sm-12 col-md-12 col-lg-6`}>
            <div>
              <MasjidSearch
                homeKeyword={homeKeyword}
                setHomeKeyword={setHomeKeyword} 
                masjidKeyword = {masjidKeyword}
                setMasjidKeyword = {setMasjidKeyword}
                pathName={pathName}
                masjidUrl={masjidUrl}
              />
              <div className={style.mapDiv}>
                <Map data={findMasjidDataList} height="360px" />
              </div>
            </div>
          </div>
          <div className={`col-sm-12 col-md-12 col-lg-6`}>
            <PrayTime
              findMasjidData={dataMasjid}
              pathName={pathName}
              masjidUrl={masjidUrl}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindMasjidSection;
