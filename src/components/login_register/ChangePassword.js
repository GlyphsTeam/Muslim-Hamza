import React, { useState } from "react";
import style from "../../assets/style/authentication/register.module.scss";

function ChangePassword({baseUrl, forgetEmail, setAuth}) {

  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [requireNew, setrequireNew] = useState(false);
  const [requireConfirm, setrequireConfirm] = useState(false);

  const [showLengthWarn, setShowLengthWarn] = useState(false);
  const [passwordWarn, setPasswordWarn] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let formData = new FormData();
  forgetEmail && formData.append('email',forgetEmail);
  newPassword && formData.append('password',newPassword);

  const showPasswordEyeNew = () => {
    setShowPasswordNew(!showPasswordNew);
  }
  const showPasswordEyeConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  }

  const handleSubmit = async () => {
    setPasswordWarn(false);
    setShowLengthWarn(false);
    setrequireNew(false);
    setrequireConfirm(false);

    if(newPassword === '' || confirmPassword === '' || newPassword !== confirmPassword || newPassword < 8 ){
        if(newPassword === ''){
            setrequireNew(true);
        }
        if(confirmPassword === ''){
            setrequireConfirm(true);
        }
        if(newPassword !== confirmPassword){
            setPasswordWarn(true);
        }
        if(newPassword < 8 ){
            setShowLengthWarn(true);
        }
    }else{

        await fetch(`${baseUrl}/forgot-password`,{
        method:"POST",
        body:formData
    })
    .then(response => response.json())
    .then(data => {
     if(data.status_number === "S400"){
        setShowLengthWarn(true);

    } else{
        setAuth('login')
    }
})

    }

  }

  return (
    <>
      <div className={`${style.registerFormDiv}`}>
        <h2>Create new password</h2>
        <p>Please create a new password that you don’t use on any other site.</p>
        <form>

          <div className={`w-100 ${style.passwordInput}`}>
            <input name="password" className={`w-100`} type={showPasswordNew ? "text" : "password"} value={newPassword} placeholder="Create New Password" onChange={(e) => setNewPassword(e.target.value)} />
            <div>
              {showPasswordNew ? (
                  <i onClick={showPasswordEyeNew} className={`fas fa-eye ${style.passIcon} ${style.passIconLanguageEn}`}></i>
                ) : (
                  <i onClick={showPasswordEyeNew} className={`fas fa-eye-slash ${style.passIcon} ${style.passIconLanguageEn}`}></i>
              )}
            </div>
          </div>
          {showLengthWarn && <p className={style.validationWarn}>Passwords must be at least 8 characters. </p>}
          {requireNew && <p className={style.validationWarn}>This field is required. </p>}
          
          <div className={`w-100 ${style.passwordInput}`}>
            <input name="password" className={`w-100`} type={showPasswordConfirm ? "text" : "password"} value={confirmPassword} placeholder="Confirm New Password" onChange={(e) => setConfirmPassword(e.target.value)} />
            <div>
              {showPasswordConfirm ? (
                  <i onClick={showPasswordEyeConfirm} className={`fas fa-eye ${style.passIcon} ${style.passIconLanguageEn}`}></i>
                ) : (
                  <i onClick={showPasswordEyeConfirm} className={`fas fa-eye-slash ${style.passIcon} ${style.passIconLanguageEn}`}></i>
              )}
            </div>
          </div>
          {passwordWarn && <p className={style.validationWarn}>Passwords do not match. </p>}
          {requireConfirm && <p className={style.validationWarn}>This field is required. </p>}

        </form>
        <button className={`w-100 ${style.signUpBtn}`} onClick={handleSubmit}>Change password</button>
        

        {/* <Link to="/register" className={` ${style.signInBtn}`}>Don't have an account? <strong className={style.btnAuthAction}> Register now</strong> </Link> */}
      </div>
    </>
  );
}

export default ChangePassword;
