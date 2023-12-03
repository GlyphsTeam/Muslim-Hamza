import LeftAuth from '../components/login_register/LeftAuth';
import RightContact from '../components/contact/RightContact';
import style from '../assets/style/authentication/register.module.scss';

function ContactUsPage() {
  return (
    <>

    <div className={`d-flex ${style.registerPage} ${style.ContactUsPage}`}>
        <LeftAuth/>
        <div className={`${style.rightAuth} col-sm-12 col-md-6 col-lg-7`}>
          <RightContact/>
        </div>
    </div>
    
    </>
  )
}

export default ContactUsPage