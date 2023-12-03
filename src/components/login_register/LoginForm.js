import React, { useState } from "react";
import style from "../../assets/style/authentication/register.module.scss";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

function Login({login, setLogin, auth, setAuth, baseUrl }) {
    const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [showLengthWarn, setShowLengthWarn] = useState(false);
  const [passwordWarn, setPasswordWarn] = useState(false);
  const [unRegister, setUnRegister] = useState(false);
  const [showEmailRegexWarn, setShowEmailRegexWarn] = useState(false);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let formData = new FormData();
  login.email && formData.append('email', login.email);
  login.password && formData.append('password', login.password);

  const showPasswordEye = () => {
    setShowPassword(!showPassword);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }

  const handleSubmit = async () => {
    setShowEmailRegexWarn(false);
    setShowLengthWarn(false);
    setUnRegister(false);
    setPasswordWarn(false);

    if(login.email === "" || !regex.test(login.email) || login.password.length < 8){
      if(login.email === "" || !regex.test(login.email)){
      setShowEmailRegexWarn(true);
      }
      if (login.password.length < 8){
        setShowLengthWarn(true);
      }

    }else{
        const response =   await fetch(`${baseUrl}/login`,{method:"POST", body:formData});
        
        const data = await response.json();


    if (response.ok) {

        if(data.errors){
            setUnRegister(true);
        }else{
            localStorage.setItem("muslim_comunity_token", data.data.token);
            localStorage.setItem("muslim_comunity_userName", data.data.user.name.split(' ')[0]);

            // dispatch(setUsername(data.data.user.name));
            navigate('/')
        }
    } else {
        setPasswordWarn(true);
        setLogin({ ...login, password: '' });
     }


    }
  }

  return (
    <>
      <div className={`${style.registerFormDiv}`}>
        <p>Login to GA Muslim Community</p>
        <form>
          <input className={`w-100`} name="email" type="text" placeholder="Email Address" onChange={handleChange} value={login.email} />
          {showEmailRegexWarn && <p className={style.validationWarn}>Email not valid</p>}
          {unRegister && <p className={style.validationWarn}>This email is not registered.</p>}

          <div className={`w-100 ${style.passwordInput}`}>
            <input name="password" className={`w-100`} type={showPassword ? "text" : "password"} placeholder="Password" onChange={handleChange} value={login.password} />
            <div>
              {showPassword ? (
                  <i onClick={showPasswordEye} className={`fas fa-eye ${style.passIcon} ${style.passIconLanguageEn}`}></i>
                ) : (
                  <i onClick={showPasswordEye} className={`fas fa-eye-slash ${style.passIcon} ${style.passIconLanguageEn}`}></i>
              )}
            </div>
          </div>
          {showLengthWarn && <p className={style.validationWarn}>Passwords must be at least 8 characters. </p>}
          {passwordWarn && <p className={style.validationWarn}>Wrong password. </p>}

        </form>
        <div className={style.loginBtnsDiv}>
        <button className={` ${style.forgetPassBtn}`} onClick={() => setAuth('forgetPass')} >Forgot password?</button>
        <button className={`w-50 ${style.signUpBtn}`} onClick={handleSubmit}>Login</button>
        </div>

        <Link to="/register" className={` ${style.signInBtn}`}>Don't have an account? <strong className={style.btnAuthAction}> Register now</strong> </Link>
      </div>
    </>
  );
}

export default Login;
