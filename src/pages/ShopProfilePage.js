import ProfileImageCover from "../components/shopProfile/ProfileImageCover";
import ProfileInformation from "../components/shopProfile/ProfileInformation";
import ShopMap from "../components/shopProfile/ShopMap";
import ShopService from "../components/shopProfile/ShopService";
import ShopGallery from "../components/shopProfile/ShopGallery";
import WorkHours from "../components/shopProfile/WorkHours";
import InterestedSection from "../components/common/interested/InterestedSection";
import style from '../assets/style/shopProfile/shopProfile.module.css'
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { setBussinessSHowProfile } from '../redux/Bussiness';
import { useDispatch } from 'react-redux';
function ShopProfilePage() {
  const { id, id2 } = useParams();
  const dispatch = useDispatch();
  // const url = `stores?main_id=${id}`;
  const url = `show-store/${id2}`;
  const [Data] = useAxios(url);
  const showStoreData = Data?.data;
  dispatch(setBussinessSHowProfile(showStoreData));

  return (
    <div>
      <ProfileImageCover  />
      <ProfileInformation />

      <div className={`container ${style.shopMiddleProfileContainer}`}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 ">
            <ShopMap />
            <WorkHours/>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <ShopService  />
            <ShopGallery  />
          </div>
        </div>
      </div>
      <InterestedSection type='store' />
    </div>
  );
}

export default ShopProfilePage;
