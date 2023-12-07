import style from '../../assets/style/showProduct/showProduct.module.css';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'html-react-parser';
import { marketState } from '../../redux/Market';
import { useSelector } from 'react-redux';
function ShowProductDescription() {
  const [t] = useTranslation();
  const showProduct = useSelector(marketState);
  return (
    <div className={`${style.showProductDescriptionContainer}  pt-5`}>
      <h2>
        {t("Description")}
      </h2>
      <p>
        {showProduct?.market?.showProductItem?.item?.web_description ? ReactHtmlParser(`${showProduct?.market?.showProductItem?.item?.web_description}`) : showProduct?.market?.showProductItem?.item?.description}
      </p>
    </div>
  )
}

export default ShowProductDescription