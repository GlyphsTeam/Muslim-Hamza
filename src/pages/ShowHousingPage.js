import ShowHousingImage from "../components/showHousing/ShowHousingImage";
import ShowHousingInformation from "../components/showHousing/ShowHousingInformation";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import style from "../assets/style/showHousing/showHousing.module.css";
// import ShowHousingGallery from "../components/showHousing/ShowHousingGallery";
import { useDispatch } from 'react-redux';
import { setShowHouseDate } from '../redux/House';
function ShowHousingPage() {
  const { id } = useParams();
  const url = `show-rent/${id}`;
  const [Data] = useAxios(url);
  const dispatch = useDispatch();
  dispatch(setShowHouseDate(Data?.data))
  return (
    <div className={`container-fluid `}>
      <div className={`row`}>
        <div className={`col-sm-12 col-md-12 col-lg-6 p-0`}>
          <ShowHousingImage />
        </div>
        <div
          className={`col-sm-12 col-md-12 col-lg-6 ${style.showHousingInfoDiv}`}
        >
          <ShowHousingInformation />

        </div>
      </div>
    </div>
  );
}

export default ShowHousingPage;



