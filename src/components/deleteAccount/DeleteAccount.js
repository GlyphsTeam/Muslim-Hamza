import React, { useState } from "react";
import style from "../../assets/style/authentication/register.module.scss";
import {useNavigate} from "react-router-dom";
import Alert from "../alert/Alert";

function ChangePassword({ baseUrl }) {
    const [count, setCount] = useState(4);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("muslim_comunity_token")
;

    const handleSubmit = () => {
        try {
            fetch(`https://${process.env.REACT_APP_domain}/api/v1/en/client/profile/delete-user`, {
                headers: { 'Authorization': `Bearer ${token}` , 'Accept': 'application/json' },
                method: 'DELETE'
              }).then(() => {
                setCount(4);
                setShowAlert(true);
              })
          }
          catch (error) {
            console.log(error);
          }
          finally {
            setTimeout(() => {
              localStorage.clear();
              navigate('/')
                  }, 3000);
         
          }
    }
    const handleCancel = () => {
        navigate('/profile')
    }

  return (
    <>
    <div className={`${style.rightAuth} col-sm-12 col-md-6 col-lg-7`}>

      <div className={`${style.registerFormDiv}`}>
        <form>

     <div className={`w-100 ${style.changePasswordDiv}`}>
        <div className={`w-100 ${style.passwordInput}`}>
            <h3>Are you sure you want to delete your account?</h3>
          </div>
            </div>
        </form>
        <div className={style.loginBtnsDiv}>
        <button className={`w-50 ${style.deleteAccountBtn}  ${style.ConfirmDeleteAccountBtn}`} onClick={handleSubmit}>Yes</button>
        <button className={`w-50 ${style.deleteAccountBtn}  ${style.CancelDeleteAccountBtn}`} onClick={handleCancel}>No</button>
        </div>

      </div>
      </div>

      {showAlert && (<Alert type='success' message='Your account deleted successfully.' showAlert={showAlert} setShowAlert={setShowAlert} count={count} setCount={setCount} />)}

    </>
  );
}

export default ChangePassword;
