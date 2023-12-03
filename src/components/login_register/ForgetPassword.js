import React, { useState } from 'react';
import ForgetPassEmail from './ForgetPassEmail';
import ForgetPassOTP from './ForgetPassOTP';
import ChangePassword from './ChangePassword';

function ForgetPassword({auth, setAuth, baseUrl} ) {
    const [forgetEmail, setForgetEmail] = useState('');
    const [otpInput, setOtpInput] = useState(false);

  return (
    <>
     {auth === 'forgetPass' && (
        <>
        <ForgetPassEmail otpInput = {otpInput} setOtpInput = {setOtpInput} forgetEmail={forgetEmail} setForgetEmail={setForgetEmail} setAuth={setAuth} baseUrl={baseUrl}/>

        {otpInput && (
            <ForgetPassOTP setOtpInput = {setOtpInput} forgetEmail={forgetEmail} setForgetEmail={setForgetEmail} setAuth={setAuth} baseUrl={baseUrl} />
        )}
        </>
        )}

        {auth === 'changePassword' && (
            <ChangePassword baseUrl={baseUrl} forgetEmail={forgetEmail} setAuth={setAuth} />

        )}
    </>
  )
}

export default ForgetPassword