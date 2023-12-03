import ShowJobImage from "../components/showJob/ShowJobImage";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import style from "../assets/style/showJob/showJob.module.css";
import ShowJobMainInformation from "../components/showJob/ShowJobMainInformation";
import ShowJobSubInformation from "../components/showJob/ShowJobSubInformation";

function ShowJobPage() {
  const { id } = useParams();
  const url = `show-job/${id}`;
  const [Data] = useAxios(url);
  const showJobData = Data?.data;

  return (
    <div className={`container mb-5`}>
      <div className={`row`}>
        <div className={`col-sm-12 col-md-12 col-lg-5 pt-5`}>
          <ShowJobImage showJobData={showJobData} />
        </div>
        <div
          className={`col-sm-12 col-md-12 col-lg-7 pt-5 ${style.mobilePadding}`}
        >
          <ShowJobMainInformation showJobData={showJobData} />
          <ShowJobSubInformation showJobData={showJobData} />
        </div> 
      </div>
    </div>
  );
}

export default ShowJobPage;
