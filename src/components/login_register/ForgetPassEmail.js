import React, {useState} from "react";
import style from "../../assets/style/authentication/register.module.scss";

function ForgetPassEmail({baseUrl, setAuth, setForgetEmail, forgetEmail, setOtpInput, otpInput}) {
    const [showError, setShowError] = useState(false);
    const [showEmailRegexWarn, setShowEmailRegexWarn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let formData = new FormData();
    forgetEmail && formData.append('email', forgetEmail);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // setLogin({ ...login, [name]: value });
        setForgetEmail(value);
      }

      const handleSubmit = async () => {
        setShowEmailRegexWarn(false);

        if(forgetEmail === "" || !regex.test(forgetEmail)){
            setShowEmailRegexWarn(true);
        }else{

        const response =   await fetch(`${baseUrl}/send-email`,{method:"POST", body:formData})
        const error = await response.json();
        if (error.status === false && error.status_number === 'S400' && error.errors.email) {
            setErrorMessage(error.errors.email[0]);
            setShowError(true);
          } else if(response.ok) {
            setOtpInput(true);
          }
        else{
            console.log('Error:', response.statusText);
            
        }
    }

      }

  return (
    <div className={`${style.registerFormDiv}`}>
        <h2>Forgot password?</h2>
      <p className={style.subAuthTitle}>No worries! Just enter your email and we’ll send you a reset password link.</p>
      <form>
      {otpInput ? 
        <input
          className={`w-100`}
          name="email"
          type="text"
          placeholder="Email Address"
          onChange={handleChange}
          value={forgetEmail}
          disabled
        />
        :
        <input
        className={`w-100`}
        name="email"
        type="text"
        placeholder="Email Address"
        onChange={handleChange}
        value={forgetEmail}
      />
      }
        {showEmailRegexWarn && (
          <p className={style.validationWarn}>Email is not valid.</p>
        )}
        {showError && (
          <p className={style.validationWarn}>{errorMessage}</p>
        )}

      </form>

      {otpInput ?
             <div className={` ${style.signInBtn}`} onClick={() =>  setOtpInput(false)}>
             Change email
           </div>
      :(
        <>
        <button className={`w-100 ${style.signUpBtn}`} onClick={handleSubmit}>
          Send code
        </button>
     

      <div className={` ${style.signInBtn}`} onClick={() => setAuth('login')}>
        Just remember?{" "}
        <strong className={style.btnAuthAction}> sign in</strong>{" "}
      </div>
      </>
      )}
      
    </div>
  );
}

export default ForgetPassEmail;
