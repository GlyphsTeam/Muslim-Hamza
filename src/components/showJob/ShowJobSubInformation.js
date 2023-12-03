import style from "../../assets/style/showJob/showJobSubInformation.module.css";
import ContactInfo from "../common/ContactInfo";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ShowJobSubInformation({ showJobData }) {
  return (
    <div className={style.showJobSubInformationDiv}>
      {showJobData?.type && (
        <div className={style.ShowJobSubInformationImageDiv}>
          <LazyLoadImage src={require("../../assets/images/Common/time.png")} alt="timeImage"/>
          <p>{showJobData?.type}</p>
        </div>
      )}
      {showJobData?.salary && (
        <div className={style.ShowJobSubInformationImageDiv}>
          <LazyLoadImage src={require("../../assets/images/Common/salary.png")} alt="salerayImage"/>

          <p>{`$ ${showJobData?.salary}`}</p>
        </div>
      )}
      {showJobData?.place && (
        <div className={style.ShowJobSubInformationImageDiv}>
          <LazyLoadImage src={require("../../assets/images/Common/address.png")} alt="addressImage"/>

          <p>{showJobData?.place}</p>
        </div>
      )}
      <ContactInfo data={showJobData} />
    </div>
  );
}

export default ShowJobSubInformation;
