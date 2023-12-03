import style from '../../assets/style/findMasjid/masjidContainer.module.css';
import AdvertisementBanner from '../../components/common/AdvertisementBanner'
function masjidImage({findMasjidData}) {
   const masjidBanner = findMasjidData?.advertisement
  return (
    <div className={style.masjidImageDiv}>
       <AdvertisementBanner Data={masjidBanner} />
    </div>
  )
}

export default masjidImage