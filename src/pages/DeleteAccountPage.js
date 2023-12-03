import LeftAuth from '../components/login_register/LeftAuth';
import style from '../assets/style/authentication/register.module.scss';
import DeleteAccount from '../components/deleteAccount/DeleteAccount';

function DeleteAccountPage({baseUrl}) {

  return (
    <>
       <div className={`d-flex ${style.registerPage}`}>
        <LeftAuth/>
        <DeleteAccount baseUrl = {baseUrl} />
    </div>
    </>
  )
}

export default DeleteAccountPage