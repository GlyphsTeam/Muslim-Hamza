import React, { useState } from "react";
import style from "../../assets/style/authentication/register.module.scss";
import useFetch from "../../hooks/useFetchPost";
import Alert from "../alert/Alert";

function Register({baseUrl }) {

  const [contactForm, setContactForm] = useState({email: '', phone:'', subject:'', message:''});
  const [textAreaWarn, setTextAreaWarn] = useState(false);
  const [requireWarn, setRequireWarn] = useState(false);
  const [showEmailRegexWarn, setShowEmailRegexWarn] = useState(false);
  const [send, setSend] = useState(false);

  const [count, setCount] = useState(4);
  const [showAlert, setShowAlert] = useState(false);


  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let formData = new FormData();
  contactForm.email && formData.append('email', contactForm.email);
  contactForm.phone && formData.append('phone', contactForm.phone);
  contactForm.subject && formData.append('subject', contactForm.subject);
  contactForm.message && formData.append('message', contactForm.message);

  let url = 'contact-us';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  }

  const [Res] = useFetch(url, formData, send);

  const handleSubmit = async () => {
    setTextAreaWarn(false);
    setShowEmailRegexWarn(false);
    setRequireWarn(false);

    if(!regex.test(contactForm.email) || contactForm.message === '' || (contactForm.email === '' && contactForm.phone === '')){
        if(contactForm.message === ''){
            setTextAreaWarn(true)
        }
        if(!regex.test(contactForm.email)){
            setShowEmailRegexWarn(true);
        }
        if(contactForm.email === '' && contactForm.phone === ''){
            setRequireWarn(true);
        }
        
    }else{
    setSend(true);
    setTimeout(() => {
        setShowAlert(true);
        setContactForm({ subject: "", email: "", phone: "", message: "" });
        setSend(false);
      }, 100);
    }
  }


  return (
    <>
      <div className={`${style.registerFormDiv}`}>
        <h2 className={style.contactTitle}>Contact Us</h2>
        <p>If you need any further information or you experience any problem, do not hesitate to contact us. We also would like  to know if you have any suggestions that help the Muslim Community.</p>
        <form>

          <input className={`w-100`} name="email" type="text" placeholder="Email Address" onChange={handleChange} value={contactForm.email} />
          {showEmailRegexWarn && <p className={style.validationWarn}>Email not valid</p>}

          <input className={`w-100`} name="phone" type="text" placeholder="Phone Number" onChange={handleChange} value={contactForm.phone} />
          {requireWarn && <p className={style.validationWarn}>Please fill phone number or email.</p>}
          
          <input className={`w-100`} name="subject" type="text" placeholder="Subject" onChange={handleChange} value={contactForm.subject} />

          <textarea
              className={style.contactTextArea}
              placeholder='Message'
              name="message"
              onChange={handleChange}
              value={contactForm.message}
            >
                {contactForm.message}
            </textarea>
            {textAreaWarn && <p className={style.validationWarn}>This field is required.</p>}

        </form>
        <button className={`w-50 ${style.signUpBtn}  ${style.contactBtn}`} onClick={handleSubmit}>Send</button>

      </div>

      {showAlert && (<Alert type='success' message='Thanks for your time.' showAlert={showAlert} setShowAlert={setShowAlert} count={count} setCount={setCount} />
      )}
    </>
  );
}

export default Register;
