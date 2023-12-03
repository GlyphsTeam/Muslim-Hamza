import style from '../../assets/style/common/button.module.scss';
import MainCategory from '../home/MainCategory/MainCategory';
import { useTranslation } from 'react-i18next';
function Button({btnInfo ,  handleCloseModal}) {
  const { t, i18n } = useTranslation();

  return (    
   
  <div className={`${MainCategory? style.categoryBtnDiv : ''} ${i18n.language === 'ar'? style.categoryBtnDivAr : ""}`}>
    <button className={style.buttonContainer}   onClick={handleCloseModal}>
        {btnInfo}
    </button>
  </div>
  )
}

export default Button