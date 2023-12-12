import React from 'react'
import PostLogo from '../components/postProduct/postProductLogo'
import FormProduct from '../components/postProduct/postProductForm';
import style from "../assets/style/postProduct/postProduct.module.css";
function PostProductForm() {
    return (
        <div className={style.formContainer}>
            <PostLogo />
            <FormProduct />
        </div>

    )
}

export default PostProductForm
