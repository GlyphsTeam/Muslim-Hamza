import React, {useState} from 'react';
import Register from './Register';
import OTP from './OTP';
import style from '../../assets/style/authentication/register.module.scss'

function RightAuth({auth, setAuth, baseUrl}) {
  const [register, setRegister] = useState({email: '', password:'', userName:'', subscribe:false})

  return (
    <>
<div className={`${style.rightAuth} col-sm-12 col-md-6 col-lg-7`}>


    {auth === 'register' && (
        <Register baseUrl = {baseUrl} register = {register} setRegister = {setRegister} auth = {auth} setAuth = {setAuth} />
    )
    }

    {auth === 'otp' && (
        <OTP baseUrl = {baseUrl} register = {register} setRegister = {setRegister} auth = {auth} setAuth = {setAuth} />

    )}

 
</div>

    </>
  )
}

export default RightAuth