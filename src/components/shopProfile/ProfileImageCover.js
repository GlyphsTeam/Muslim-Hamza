import style from '../../assets/style/shopProfile/shopProfileCover.module.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux';
import { businessReduxState } from '../../redux/Bussiness'
function ProfileImageCover() {
  const stateProfile = useSelector(businessReduxState);
  console.log("state<MMM",stateProfile.bussinessShowProfile)
  const profileImageCoverData = stateProfile.bussinessShowProfile?.banners[0]
  const firstBanner = profileImageCoverData?.image
  const isMp4File = firstBanner?.endsWith('.mp4')

  return (
    <div className={style.profileImageCoverDiv}>
      {isMp4File ? (
        <video src={firstBanner} autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" type="video/mp4" />
      ) : (
        <LazyLoadImage src={firstBanner} alt="Profile Cover" />
      )}
    </div>
  )
}

export default ProfileImageCover
