import style from "../../assets/style/shopProfile/shopService.module.css";
import ReactHtmlParser from 'html-react-parser';
import { useSelector } from 'react-redux';
import { businessReduxState } from '../../redux/Bussiness'
function ShopService() {
  let stateShowBuss = useSelector(businessReduxState);
  return (
    <div className={style.shopServiceDiv}>
      <h4>Our Services</h4>
      <div className={style.shopServiceContainer}>
        {stateShowBuss.bussinessShowProfile?.offers?.map((item, index) => (
          <div className={style.shopServiceSubDiv}>
            <p>{ReactHtmlParser(`${item?.title}`)} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopService;
