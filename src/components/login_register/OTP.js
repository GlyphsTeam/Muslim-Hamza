import React, { useState, useRef, useEffect } from "react";
import style from "../../assets/style/authentication/register.module.scss";
import { useNavigate } from "react-router-dom";

function OTP({ register, setRegister, auth, setAuth, baseUrl }) {

  const navigate = useNavigate();

  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const code = otpValues.join("");
  const inputRefs = useRef([]);
  const [count, setCount] = useState(59);
  const [showOtpWarn, setShowOtpWarn] = useState(false);

  let formData = new FormData();
  formData.append('email',register.email);
  otpValues && formData.append('code',code);
  
  let registerFormData = new FormData();
  registerFormData.append('name',register.userName);
  registerFormData.append('email',register.email);
  registerFormData.append('password',register.password);

  let subscribeFormData = new FormData();
  subscribeFormData.append('email',register.email);

  const handleOtpChange = (event, index) => {
    const value = event.target.value;
    if (value.length > 1) {
      return;
    }

    const newValues = [...otpValues];
    newValues[index] = value;
    setOtpValues(newValues);

    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otpValues[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
    if (count === 0) {
      setCount("00");
    }
  });

  const handelResendCode = async () => {
    const response = await fetch(
      `${baseUrl}/verification-code?email=${register.email}`,
      { method: "GET" }
    );
    const data = await response.json();
    setCount(59);
  };

  const handelVerificationCode = async () => {
    setShowOtpWarn(false);

    const response = await fetch(`${baseUrl}/verification-code`,{
        method:'POST',
        body:formData
    }).then(response => response.json())
    .then(data => {
      if (data.status_number === 'S400') {
        setShowOtpWarn(true);
         setOtpValues(Array(otpValues.length).fill(""));
      }
      else{
        handleRegister();
      }
     })

  };


  const handleRegister = async () => {
    const response = await fetch(`${baseUrl}/register`,{
      method:"POST",
      body:registerFormData
  });
  const {data} =await response.json();
    if(response.ok){
      if(register.subscribe){
        sendSubscribe();
      }
   
    localStorage.setItem("muslim_comunity_token", data.token);
    localStorage.setItem("muslim_comunity_userName", data.user.name.split(' ')[0]); 
    navigate('/')
    }
  };

  const sendSubscribe = async () => {
    const response = await fetch(`${baseUrl}/subscribes`,{
      method:"POST",
      body:subscribeFormData
  });

    const {data} =await response.json();
    if(response.ok){
    }

  };

  return (
    <>
      <div className={`${style.OTPFormDiv}`}>
        <div className={style.otpHeader}>
          <h3>Enter your passcode</h3>
          <p>We've sent the code to the email on your device.</p>
        </div>
        <form>
          <div className={`${style.otpFields}`}>
            {otpValues.map((value, index) => (
              <input
                className={``}
                placeholder="-"
                key={index}
                name={`otp${index}`}
                maxLength="1"
                value={value}
                onChange={(event) => handleOtpChange(event, index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </div>
          {showOtpWarn && <p className={style.validationWarn}>Code is not valid</p>}
        </form>
        <div className={style.countDownDiv}>
          <p>Code expires in: 00:{count}</p>
          <div className={style.resendCodeDiv}>
            <p>Didn't recive code? </p>
            {count !== "00" ? (
              <button disabled className={`${style.resendBtn}`}>
                Resend Code
              </button>
            ) : (
              <button
                className={`${style.resendBtn}`}
                onClick={handelResendCode}
              >
                Resend Code
              </button>
            )}
          </div>
        </div>
        {code.length >= 6 ? (
          <button className={` ${style.VerifyBtn}`} onClick={handelVerificationCode}>Verify code</button>
        ) : (
          <button disabled className={` ${style.VerifyBtn}`}>
            Verify code
          </button>
        )}
      </div>
    </>
  );
}

export default OTP;
