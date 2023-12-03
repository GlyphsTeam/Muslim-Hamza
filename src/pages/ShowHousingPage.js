import ShowHousingImage from "../components/showHousing/ShowHousingImage";
import ShowHousingInformation from "../components/showHousing/ShowHousingInformation";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import style from "../assets/style/showHousing/showHousing.module.css";
// import ShowHousingGallery from "../components/showHousing/ShowHousingGallery";

function ShowHousingPage() {
  const { id } = useParams();
  const url = `show-rent/${id}`;
  const [Data] = useAxios(url);
  const showHousingData = Data?.data;

  return (
    <div className={`container-fluid `}>
       <div className={`row`}>
      <div className={`col-sm-12 col-md-12 col-lg-6 p-0`}>
        <ShowHousingImage showHousingData={showHousingData} />
      </div>
      <div
        className={`col-sm-12 col-md-12 col-lg-6 ${style.showHousingInfoDiv}`}
      >
        <ShowHousingInformation showHousingData={showHousingData}/>
   
      </div> 
      </div>
    </div>
  );
}

export default ShowHousingPage;



