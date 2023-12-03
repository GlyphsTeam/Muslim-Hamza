import React, {useState} from 'react';
import LoginForm from './LoginForm';
import ForgetPassword from './ForgetPassword';
import style from '../../assets/style/authentication/register.module.scss'

function Login({auth, setAuth, baseUrl}) {
  const [login, setLogin] = useState({email: '', password:''})

  return (
    <>
<div className={`${style.rightAuth} col-sm-12 col-md-6 col-lg-7`}>


    {auth === 'login' && (
        <LoginForm baseUrl = {baseUrl} login = {login} setLogin = {setLogin} auth = {auth} setAuth = {setAuth} />
    )
    }

    {(auth === 'forgetPass' || auth === 'changePassword') && (
        <ForgetPassword baseUrl = {baseUrl} login = {login} setLogin = {setLogin} auth = {auth} setAuth = {setAuth} />

    )}

</div>

    </>
  )
}

export default Login