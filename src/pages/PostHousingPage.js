import LeftAuth from '../components/login_register/LeftAuth';
import style from '../assets/style/authentication/register.module.scss';
import RightPostHousing from '../components/postHousingComponent/RightPostHousing';

function PostRentPage() {
  return (
    <div className={`d-flex ${style.registerPage} ${style.ContactUsPage}`}>
    <LeftAuth />
    <div className={`${style.rightAuth} col-sm-12 col-md-6 col-lg-7`}>
      <RightPostHousing/>
    </div>
  </div>
  )
}

export default PostRentPage