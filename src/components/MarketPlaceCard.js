import React, { useState, useEffect } from 'react';
import style from '../assets/style/common/marketPlace.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import useFetch from '../hooks/useFetchPost';
function SavedProduct({ data, isMyPost, baseUrl, type }) {
  const [t, i18n] = useTranslation();
  const token = localStorage.getItem("muslim_comunity_token");
  const [isFav, setIsFav] = useState(data?.save_job);
  const [send, setSend] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [count, setCount] = useState(4);

  let formData = new FormData();
  formData.append('id', data?.id);
  const [Res] = useFetch('favorite/market', formData, send);

  let favoriteIcon = isFav ? 'fas fa-bookmark' : 'far fa-bookmark';

  let urlId;

  let url='/Show-Product';

  useEffect(() => {
    if (data.saved) {
      setIsFav(true);
    }
    else {
      setIsFav(false);
    }
  }, [data.saved])

  const addToFavorite = (id) => {
    if (token) {
      setIsFav(!isFav);
      deleteDiv(id);
      setSend(true);
      setTimeout(() => {
        setSend(false);
      }, 100);
    } else {
   
    }
  }
  const deleteDiv = (id) => {
    const element = document.getElementById(`${id}`);
    element.parentNode.removeChild(element);
  }
  const deleteProduct = (id) => {
    try {
      fetch(`https://${process.env.REACT_APP_domain}/en/${process.env.REACT_APP_CityID}/user/market/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        method: "DELETE",
      }).then(() => {
        deleteDiv(id);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setShowAlertDelete(true);
      setCount(4);
    }
  };
  return (
    <>
      <div id={data.id} className='flexClass' style={{display:'flex'}}>
        <Link to={`${url}/${data.slug}/${data?.id}`} state={(urlId = { id: data?.id })} className={style.wrapper} >
          <div className={style.productImg}>
            <LazyLoadImage className={i18n.language === 'en' ? style.enImgBorder : style.arImgBorder} src={data.image} alt='productImage' />
          </div>
          </Link>

          <div className={style.productInfo}>
            <div className={style.productText}>
              <div className={style.trashContainer}>
                <h1>{data.title}</h1>
                {!data?.is_user_post ? <i className={`${favoriteIcon} ${style.favIconColor}`} onClick={(()=>addToFavorite(data?.id))} ></i> : <></>}
              </div>
              <h2>{data.main_category_name} {" > "} {data.category_name}</h2>
              <p>{data.description}</p>
            </div>
    
            <div className={`${i18n.language === 'en' ? style.enProductPriceBtn : style.arProductPriceBtn} ${style.productPriceBtn}`}>
              <p className={style.productPrice}><span>{data.price}</span>{type === 'blog' ? '' : '$'}</p>
              <p className={style.productDate}>{data.created_at}</p>
              <i className='fas fa-trash-alt' onClick={()=>deleteProduct(data.id)}></i>
            </div>
          </div>

        {isMyPost && (
          <div className={`row ${i18n.language === 'en' ? style.deleteProductEn : style.deleteProductAr}`}>
            <div className={style.approvalDiv}>
              {data.status ? (
                <p className={style.waitingApproval}>{t('Published')}</p>
              ) : (
                <p className={style.published}  >{type === 'blog' ? '' : t('Waiting for approval')}</p>
              )}
              <p>
                {" "}

              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SavedProduct