import style from '../../assets/style/shopProfile/shopProfileCover.module.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProfileImageCover({showStoreData}) {
  const profileImageCoverData = showStoreData?.banners[0]
  const firstBanner = profileImageCoverData?.image
  const isMp4File = firstBanner?.endsWith('.mp4')

  return (
    <div className={style.profileImageCoverDiv}>
      {isMp4File ? (
        <video src={firstBanner} autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover"  type="video/mp4" />
      ) : (
        <LazyLoadImage src={firstBanner} alt="Profile Cover" />
      )}
    </div>
  )
}

export default ProfileImageCover
