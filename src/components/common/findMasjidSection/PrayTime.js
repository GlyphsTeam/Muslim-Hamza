import style from "../../../assets/style/common/findMasjid/prayTime.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PrayTime({ findMasjidData }) {
  const prayerTime = findMasjidData;
  const formatPrayerTime = (time) => time?.replace("%pm%", "pm")?.replace("%am%", "am");
  return (
    <>
      <div className={style.prayTimeTitle}>
        <LazyLoadImage src={require("../../../assets/images/Common/prayerTime.png")} alt="prayerTimeImage"/>
        <h5>Prayer Time</h5>
      </div>
      <hr />
     <div className={style.prayTimeMobile}>
      <div className={style.prayTimeDiv}>
        <div className={style.prayTimeInfo}>{formatPrayerTime(prayerTime?.Fajr)}</div>
        <div className={style.prayTimeInfoTitle}>
          <h5>Fajr</h5>
           <hr className={style.hrStyle} />
        </div>
      </div>
      <div className={style.prayTimeDiv}>
        <div className={style.prayTimeInfo}>{formatPrayerTime(prayerTime?.Dhuhr)}</div>
        <div  className={style.prayTimeInfoTitle}>
          <h5>Dhuhr</h5>
          <hr className={style.hrStyle} />

        </div>
      </div>


      <div className={style.prayTimeDiv}>
        <div className={style.prayTimeInfo}>{formatPrayerTime(prayerTime?.Asr)}</div>
        <div  className={style.prayTimeInfoTitle}>
          <h5>Asr</h5>
          <hr className={style.hrStyle} />

        </div>
      </div>

      <div className={style.prayTimeDiv}>
        <div className={style.prayTimeInfo}>{formatPrayerTime(prayerTime?.Maghrib)}</div>
        <div  className={style.prayTimeInfoTitle}>
          <h5>Maghrib</h5>
          <hr className={style.hrStyle} />

        </div>
      </div>
      <div className={style.prayTimeDiv}>
        <div className={style.prayTimeInfo}>{formatPrayerTime(prayerTime?.Isha)}</div>
        <div  className={style.prayTimeInfoTitle}>
          <h5>Isha</h5>
          <hr className={style.hrStyle} />

        </div>
      </div>
      </div>
    </>
  );
}

export default PrayTime;
