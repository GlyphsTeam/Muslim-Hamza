import React, {useState} from 'react';
import style from '../assets/style/authentication/register.module.scss';
import LeftAuth from '../components/login_register/LeftAuth';
import RightAuth from '../components/login_register/RightAuth';
function RegisterPage({baseUrl}) {
const [auth, setAuth] = useState('register');


  return (
    <>

    <div className={`d-flex ${style.registerPage}`}>
        <LeftAuth/>
        <RightAuth auth={auth} setAuth = {setAuth} baseUrl = {baseUrl} />
    </div>
    
    </>
  )
}

export default RegisterPage