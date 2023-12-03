import React, { useState } from "react";
import style from "../../assets/style/HomePage/tryApp.module.scss";
import UseFetchPost from "../../hooks/useFetchPost";
import { useTranslation } from "react-i18next";
import useAxios from "../../hooks/useAxios";

function TryApp() {
  let url = `subscribes`;
  let settingUrl = "general-setting";
  const [Data] = useAxios(settingUrl);
  const tryAppData = Data?.data;
  const [email, setEmail] = useState("");
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [send, setSend] = useState(false);
  const formData = new FormData();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t, i18n } = useTranslation();

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  email && formData.append("email", email);
  const [Res] = UseFetchPost(url, formData, send);


  const handleSubscribe = (event) => {
    // event.preventDefault();
    // setIsValidEmail(regex.test(email));
    setShowEmailWarning(false);
    if (regex.test(email)) {
      // console.log(...formData.entries());
      setSend(true);
      setIsSubscribed(true);
      setTimeout(() => {
        setSend(false);
        setEmail("");
      }, 100);
      setTimeout(() => {
        setIsSubscribed(false);
      }, 4000);
    } else {
      setShowEmailWarning(true);
    }
  };
  return (
    <div className={style.tryAppMainContainer}>
      <div
        className={
          i18n.language === "en"
            ? style.tryAppContainer
            : style.tryAppContainerAr
        }
      >
        <div
          className={
            i18n.language === "en" ? style.tryAppSubDiv : style.tryAppSubDivAr
          }
        >
          <div className={style.tryAppInfo}>
            {/* <div className={i18n.language === 'en'? style.tryAppInfo : style.tryAppInfoAr}> */}
            <h3>Try the App</h3>
            <p>Experience the best we offer, all in one app.</p>
            <div className={style.tryAppBtnDiv}>
              <a
                href={tryAppData?.android_url}
                target="_blank"
                className={
                  i18n.language === "en"
                    ? style.googlePlayBtn
                    : style.googlePlayBtnAr
                }
              >
                <div className={style.downloadDiv}>
                  <i class="fab fa-google-play"></i>
                  <div className={style.tryAppText}>
                    <p>Available on the</p>
                    <p>Google Play</p>
                  </div>
                </div>
              </a>
              <a
                className={style.appleContainer}
                href={tryAppData?.ios_url}
                target="_blank"
              >
                <div className={style.downloadDiv}>
                  <i class="fab fa-apple"></i>
                  <div className={style.tryAppText}>
                  <p>Download on The</p>
                  <p>App Store</p>
                </div>

                </div>
              </a>
            </div>
            <div className={style.subscribeDiv}>
              {/* <div className={i18n.language === 'en' ? style.subscribeDiv : style.subscribeDivAr}> */}
              <p
                className={
                  i18n.language === "ar" ? style.subscribeParagraphAr : ""
                }
              >
                Join the Muslim Community's latest news, events, and special
                offers.
              </p>
              <input
                type="text"
                placeholder="Enter your email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style.subscribeInput}
              ></input>
              {showEmailWarning && (
                <span className={style.emailValidation}>
                  Email is not valid
                </span>
              )}

              <div className={style.subscribeBtnDiv}>
                <button
                  className={`${style.subscribeButton} ${
                    isSubscribed ? style.subscribed : ""
                  }`}
                  onClick={handleSubscribe}
                >
                  {isSubscribed ? (
                    <>
                      <p>Subscribed</p>
                      <i className="far fa-check-circle"></i>
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TryApp;
