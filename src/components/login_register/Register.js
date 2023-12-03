import React, { useState } from "react";
import style from "../../assets/style/authentication/register.module.scss";
import { Link } from "react-router-dom";

function Register({ register, setRegister, auth, setAuth, baseUrl }) {

  const [showPassword, setShowPassword] = useState(false);
  const [showLengthWarn, setShowLengthWarn] = useState(false);
  const [alreadyRegister, setAlreadyRegister] = useState(false);
  const [userNameWarn, setUserNameWarn] = useState(false);
  const [showEmailRegexWarn, setShowEmailRegexWarn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let formData = new FormData();
  register.email && formData.append('email', register.email);

  const showPasswordEye = () => {
    setShowPassword(!showPassword);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  }

  const handleSubmit = async () => {
    setShowEmailRegexWarn(false);
    setShowLengthWarn(false);
    setAlreadyRegister(false);
    setUserNameWarn(false);

    if(register.email === "" || !regex.test(register.email) || register.password.length < 8 || register.userName === "" ){
      if(register.email === "" || !regex.test(register.email)){
      setShowEmailRegexWarn(true);
      }
      if (register.password.length < 8){
        setShowLengthWarn(true);
      }
      if (register.userName === ""){
        setUserNameWarn(true);
      }

    }else{
      const response =   await fetch(`${baseUrl}/check-email`,{method:"POST", body:formData});

      const error = await response.json();

      if (error.status === false && error.status_number === 'S400' && error.errors.email) {
          setErrorMessage(error.errors.email[0]);
          setAlreadyRegister(true);
        } else if(response.ok) {
 
          setAuth('otp');
        }
      else{
          console.log('Error:', response.statusText);
      }

      // setAuth('otp');
    }
  }

  const handleSubscribe = () => {
    setRegister({ ...register, subscribe: !register.subscribe });
  }

  return (
    <>
      <div className={`${style.registerFormDiv}`}>
        <p>Join GA Muslim Community</p>
        <form>

          <input className={`w-100`} name="userName" type="text" placeholder="User Name" onChange={handleChange} value={register.userName} />
          {userNameWarn && <p className={style.validationWarn}>This field is required.</p>}


          <input className={`w-100`} name="email" type="text" placeholder="Email Address" onChange={handleChange} value={register.email} />
          {showEmailRegexWarn && <p className={style.validationWarn}>Email not valid</p>}
          {alreadyRegister && <p className={style.validationWarn}>{errorMessage}</p>}


          <div className={`w-100 ${style.passwordInput}`}>
            <input name="password" className={`w-100`} type={showPassword ? "text" : "password"} placeholder="Password" onChange={handleChange} value={register.password} />
            <div>
              {showPassword ? (
                  <i onClick={showPasswordEye} className={`fas fa-eye ${style.passIcon} ${style.passIconLanguageEn}`}></i>
                ) : (
                  <i onClick={showPasswordEye} className={`fas fa-eye-slash ${style.passIcon} ${style.passIconLanguageEn}`}></i>
              )}
            </div>
          </div>
          {showLengthWarn && <p className={style.validationWarn}>Passwords must be at least 8 characters </p>}

        </form>
        <button className={`w-100 ${style.signUpBtn}`} onClick={handleSubmit}>Register</button>

        <div  className={`${style.checkboxDiv}`}>
          <div>
            {/* <input id="terms" type="checkbox"/> */}
            <label>By tapping “Register” you accept our terms and condition</label>
          </div>

          <div>
            <input id="adv" type="checkbox" onClick={handleSubscribe}/>
            <label htmlFor="adv">Subscribe to receive exciting news about Muslim Community in Georgia, events, special offers, and more.</label>
          </div>
          
        </div>

        <Link to="/login" className={` ${style.signInBtn}`}>Already have an account? <strong className={style.btnAuthAction}> Login</strong></Link>
      </div>
    </>
  );
}

export default Register;
