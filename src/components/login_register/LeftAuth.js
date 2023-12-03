import style from '../../assets/style/authentication/login.module.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";

function LeftLogin() {
  return (
    <div className={`${style.leftAuth} col-sm-12 col-md-6 col-lg-5`}>
        <LazyLoadImage src={require('../../assets/images/login/loginLogo.png')} alt="Login Logo" />
    </div>
  ) 
}

export default LeftLogin