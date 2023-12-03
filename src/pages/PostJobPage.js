import LeftAuth from '../components/login_register/LeftAuth';
import style from '../assets/style/authentication/register.module.scss';
import RightPostJob from '../components/postJobComponent/RightPostJob'

function PostJobPage() {
  return (
    <div className={`d-flex ${style.registerPage} ${style.ContactUsPage}`}>
      <LeftAuth />
      <div className={`${style.rightAuth} col-sm-12 col-md-6 col-lg-7`}>
        <RightPostJob/>
      </div>
    </div>
  );
}

export default PostJobPage;
