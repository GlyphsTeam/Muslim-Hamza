import style from "../../assets/style/shopProfile/shopService.module.css";
import ReactHtmlParser from 'html-react-parser';

function ShopService({ showStoreData }) {
  return (
    <div className={style.shopServiceDiv}>
      <h4>Our Services</h4>
      <div className={style.shopServiceContainer}>
        {showStoreData?.offers?.map((item, index) => (
          <div className={style.shopServiceSubDiv}>
            <p>{ReactHtmlParser(`${item?.title}`)} </p>
          </div>
        ))}

        {/* ))} */}
      </div>
    </div>
  );
}

export default ShopService;
