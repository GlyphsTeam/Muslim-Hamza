import style from '../../assets/style/shopProfile/shopMap.module.css';
import { useSelector } from 'react-redux';
import { businessReduxState } from '../../redux/Bussiness';
function ShopMap() {
 let showBusinessState = useSelector(businessReduxState);

  return (
    <div className={style.shopMap}>
      <div className="mapouter">
        <div className="gmap_canvas">
          {showBusinessState.bussinessShowProfile?.lat && showBusinessState.bussinessShowProfile?.lng ? (
            <iframe
              src={`https://maps.google.com/maps?q=${showBusinessState.bussinessShowProfile?.lat},${showBusinessState.bussinessShowProfile?.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}

            />
          ) : (
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438896.9110684074!2d-83.17829695!3d32.6781266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f136c51d5f8157%3A0x6684bc10ec4f10e7!2sGeorgia%2C%20USA!5e0!3m2!1sen!2sjo!4v1680526343121!5m2!1sen!2sjo"></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
export default ShopMap;
