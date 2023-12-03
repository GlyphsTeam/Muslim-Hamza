import LeftAuth from '../components/login_register/LeftAuth';
import style from '../assets/style/authentication/register.module.scss';
import ChangePassword from '../components/changePassword/ChangePassword';

function ChangePasswordPage({baseUrl}) {

  return (
    <>
       <div className={`d-flex ${style.registerPage}`}>
        <LeftAuth/>
        <ChangePassword baseUrl = {baseUrl} />
    </div>
    </>
  )
}

export default ChangePasswordPage