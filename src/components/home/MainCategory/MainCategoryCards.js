import style from "../../../assets/style/HomePage/mainCategory.module.scss";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../../redux/CategoryRedux";
import { setSubCategoryId } from "../../../redux/CategoryRedux";
import { setCategoryTitle } from "../../../redux/CategoryRedux";
import { setSubCategoryTitle } from "../../../redux/CategoryRedux";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MainCategoryCards({ name, description, id, image }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Navigate = (id, name) => {
    dispatch(setCategoryId(id));
    dispatch(setSubCategoryId(""));
    dispatch(setCategoryTitle(name));
    dispatch(setSubCategoryTitle(""));
    localStorage.setItem("mainCategoryId", id);
    localStorage.removeItem("subCategoryId");
    localStorage.setItem("mainCategoryTitle", name);
    localStorage.removeItem("subCategortTitle");
    navigate("/Shop");
  };
  return (
    <div className={style.cardBody} onClick={() => Navigate(id, name)}>
      <div className={style.cardImg}>
        <div className={style.subCardImage}>
          <LazyLoadImage src={image} alt="subCardImage"/>
        </div>
      </div>
      <div className={style.cardBodyInfo}>
        <h4 className={style.cardListTitle}>{name}</h4>
        {/* <p> {ReactHtmlParser(`${description}`)}</p> */}
      </div>
    </div>
  );
}

export default MainCategoryCards;
