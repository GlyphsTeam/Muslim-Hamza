import React, { useState, useEffect } from "react";
import style from "../../assets/style/authentication/register.module.scss";
import {useNavigate} from "react-router-dom";
import useFetch from "../../hooks/useFetchPost";
import Alert from "../alert/Alert";

function ChangePassword({ baseUrl }) {
    const [passChange, setPassChange] = useState({password: '', new_password:'', confirm_password: ''})
    const [send, setSend] = useState(false)
    const [count, setCount] = useState(4);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [showLengthWarn, setShowLengthWarn] = useState(false);
  const [showLengthWarnNew, setShowLengthWarnNew] = useState(false);
  const [showNotMatchWarn, setShowNotMatchWarn] = useState(false);

  const [passwordWarn, setPasswordWarn] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  let formData = new FormData();
  passChange.password && formData.append('password', passChange.password);
  passChange.new_password && formData.append('new_password', passChange.new_password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassChange({ ...passChange, [name]: value });
  }

  const [Res] = useFetch('profile/change-password', formData, send);

  const handleSubmit = () => {
    setShowLengthWarn(false);
    setShowLengthWarnNew(false);
    setPasswordWarn(false);
    setShowNotMatchWarn(false);

    if(passChange.password.length < 8 || passChange.new_password.length < 8 || passChange.confirm_password.length < 8 || passChange.new_password !== passChange.confirm_password ){

      if(passChange.password.length < 8){
        setShowLengthWarn(true);
      }
      if(passChange.new_password.length < 8){
        setShowLengthWarnNew(true);
      }
      if(passChange.new_password !== passChange.confirm_password && passChange.new_password.length >= 8){
        setShowNotMatchWarn(true);
      }

    }else{
      setSend(true);
      setTimeout(() => {
          setSend(false);
        }, 100);
    }
    }

    useEffect(() => {
        if(Res.errors){
            setPasswordError(Res.errors.password);
            setPasswordWarn(true);
        }else if(Res.status === true){
          setShowAlert(true);

          setTimeout(() => {
            navigate('/profile')
          }, 3500);
        }
    },[Res]);

  return (
    <>
    <div className={`${style.rightAuth} col-sm-12 col-md-6 col-lg-7`}>

      <div className={`${style.registerFormDiv}`}>
        <p>Change password</p>
        <form>

     <div className={`w-100 ${style.changePasswordDiv}`}>
        <div className={`w-100 ${style.passwordInput}`}>
            <input name="password" className={`w-100`} type={showPassword ? "text" : "password"} placeholder="Old Password" onChange={handleChange} value={passChange.password} />
            <div>
              {showPassword ? (
                  <i onClick={()=> setShowPassword(!showPassword)} className={`fas fa-eye ${style.passIcon} ${style.passIconLanguageEn}`}></i>
                ) : (
                  <i onClick={()=> setShowPassword(!showPassword)} className={`fas fa-eye-slash ${style.passIcon} ${style.passIconLanguageEn}`}></i>
              )}
            </div>

          </div>
            {passwordWarn && <p className={style.validationWarn}>{passwordError} </p>}
            {showLengthWarn && <p className={style.validationWarn}>Passwords must be at least 8 characters. </p>}
            </div>


       <div className={`w-100 ${style.changePasswordDiv}`}>

          <div className={`w-100 ${style.passwordInput}`}>
            <input name="new_password" className={`w-100`} type={showNewPassword ? "text" : "password"} placeholder="New Password" onChange={handleChange} value={passChange.new_password} />
            <div>
              {showNewPassword ? (
                  <i onClick={()=> setShowNewPassword(!showNewPassword)} className={`fas fa-eye ${style.passIcon} ${style.passIconLanguageEn}`}></i>
                ) : (
                  <i onClick={()=> setShowNewPassword(!showNewPassword)} className={`fas fa-eye-slash ${style.passIcon} ${style.passIconLanguageEn}`}></i>
              )}
            </div>
          </div>
          {showLengthWarnNew && <p className={style.validationWarn}>Passwords must be at least 8 characters. </p>}
          </div>

          <div className={`w-100 ${style.changePasswordDiv}`}>
          <div className={`w-100 ${style.passwordInput}`}>
            <input name="confirm_password" className={`w-100`} type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" onChange={handleChange} value={passChange.confirm_password} />
            <div>
              {showConfirmPassword ? (
                  <i onClick={()=> setShowConfirmPassword(!showConfirmPassword)} className={`fas fa-eye ${style.passIcon} ${style.passIconLanguageEn}`}></i>
                ) : (
                  <i onClick={()=> setShowConfirmPassword(!showConfirmPassword)} className={`fas fa-eye-slash ${style.passIcon} ${style.passIconLanguageEn}`}></i>
              )}
            </div>
          </div>
           {showNotMatchWarn && <p className={style.validationWarn}>Passwords do not match. </p>}
          </div>

        </form>
        <div className={style.loginBtnsDiv}>
        <button className={`w-100 ${style.signUpBtn}`} onClick={handleSubmit}>Confirm</button>
        </div>

      </div>
      </div>

      {showAlert && (<Alert type='success' message='Your password updated successfully.' showAlert={showAlert} setShowAlert={setShowAlert} count={count} setCount={setCount} />)}

    </>
  );
}

export default ChangePassword;
