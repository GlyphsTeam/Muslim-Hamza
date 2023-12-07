import style from "../../assets/style/showJob/showJobSubInformation.module.css";
import ContactInfo from "../common/ContactInfo";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux';
import { jobsReduxState } from '../../redux/Job';

function ShowJobSubInformation() {
  const jobReduxS = useSelector(jobsReduxState);
  return (
    <div className={style.showJobSubInformationDiv}>
      {jobReduxS.showJobPage?.type && (
        <div className={style.ShowJobSubInformationImageDiv}>
          <LazyLoadImage src={require("../../assets/images/Common/time.png")} alt="timeImage" />
          <p>{jobReduxS.showJobPage?.type}</p>
        </div>
      )}
      {jobReduxS.showJobPage?.salary && (
        <div className={style.ShowJobSubInformationImageDiv}>
          <LazyLoadImage src={require("../../assets/images/Common/salary.png")} alt="salerayImage" />

          <p>{`$ ${jobReduxS.showJobPage?.salary}`}</p>
        </div>
      )}
      {jobReduxS.showJobPage?.place && (
        <div className={style.ShowJobSubInformationImageDiv}>
          <LazyLoadImage src={require("../../assets/images/Common/address.png")} alt="addressImage" />

          <p>{jobReduxS.showJobPage?.place}</p>
        </div>
      )}
      <ContactInfo data={jobReduxS.showJobPage}/>
    </div>
  );
}

export default ShowJobSubInformation;
