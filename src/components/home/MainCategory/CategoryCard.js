import style from "../../../assets/style/HomePage/categoryList.module.css";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../../redux/CategoryRedux";
import { setSubCategoryId } from "../../../redux/CategoryRedux";
import { setCategoryTitle } from "../../../redux/CategoryRedux";
import { setSubCategoryTitle } from "../../../redux/CategoryRedux";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CategoryCard({name, description, id, image}) {

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
    <>
      <div key={id} onClick={() => Navigate(id, name)} >
        <div className={style.cardBody}>
          <LazyLoadImage
            className={style.listImg}
            src={`${image}`}
            alt={`list ${name}`}
          />
          <h3 className={style.cardListTitle}>{name}</h3>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
