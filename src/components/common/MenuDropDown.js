// import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from "../../assets/style/common/menuDrop.module.scss";


export default function MenuDropDown({ dropDownInfo, menuElements, title , handleCloseModal }) {
  const { t, i18n } = useTranslation();
  // const navigate = useNavigate();
  const changeLang = (language) => {
    i18n.changeLanguage(language);
  };


  const languageDirection=()=>{
    if (i18n.language === 'en'){
      document.getElementById("root").style.direction = "ltr";
    } else { 
      document.getElementById("root").style.direction = "rtl";
    }
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <div variant="contained" {...bindTrigger(popupState)}>
            {dropDownInfo}
          </div>
          <Menu {...bindMenu(popupState)}>
            {menuElements?.map((item, index) => (
              <Link to={item?.path} key={index} className={style.linkColor}>
                <MenuItem
                  className={style.listColor}
                  onClick={() => {
                    // handleChange(item?.info);
                    popupState.close();
                    // onClick={handleCloseModal}
                    handleCloseModal();
                    if (item?.language) {
                      changeLang(item?.language);
                      languageDirection()
                     
                    }
                  }}
                >
                  {item?.title }
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
