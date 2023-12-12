import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import logo from '../../assets/images/login/loginLogo.png'
import style from "../../assets/style/postProduct/postProduct.module.css";

function postProductLogo() {
  return (
    <div className={style.containerPostProduct}>
      <p>Post your product</p>
      <LazyLoadImage src={logo} alt='logo'/>
    </div>
  )
}

export default postProductLogo
