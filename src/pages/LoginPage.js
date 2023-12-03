import React, {useState} from 'react';
import style from '../assets/style/authentication/register.module.scss';
import LeftAuth from '../components/login_register/LeftAuth';
import Login from '../components/login_register/Login';
function LoginPage({baseUrl}) {
  const [auth, setAuth] = useState('login');

  return ( 
    <>

    <div className={`d-flex ${style.registerPage}`}>
        <LeftAuth/>
        <Login auth={auth} setAuth = {setAuth} baseUrl = {baseUrl} />
    </div>
    
    </>
  )
}

export default LoginPage