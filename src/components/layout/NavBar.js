import React, { useState } from "react";
import style from "../../assets/style/layout/navbar.module.scss";
import { Link, Outlet } from "react-router-dom";
import MenuDropDown from "../common/MenuDropDown";
import Button from "../common/Button";
import NavSearch from "../common/NavSearch";
import { useLocation } from "react-router-dom";
import btnStyle from "../../assets/style/common/button.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useAxiosGet from '../../hooks/useAxiosGet';

function NavBar({ stateName }) {

  const [showNavbar, setShowNavbar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const homeNavbar = location.pathname === "/";
  const pathName = location.pathname.toLocaleLowerCase();
  const [statesDropDown, setStatesDropDown] = useState(false);

  const navigate = useNavigate();
  const initialState = {
    username: localStorage.getItem("muslim_comunity_userName")
      ? localStorage.getItem("muslim_comunity_userName")
      : "Guest",
    newField: null,
  };
  const [general] = useAxiosGet("general-setting");
  const statesData = general?.data?.navbar?.states;

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);


  };

  const handleCloseModal = () => {
    setShowNavbar(false);

  }

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  window.addEventListener("scroll", changeBackground);
  const hideNavbar =
    location.pathname.toLocaleLowerCase() === "/privacy-policy" ||
    location.pathname.toLocaleLowerCase() === "/terms-conditions";
  if (stateName === "muslim") {
    stateName = '/'
  }
  else {
    stateName = `/${stateName}`
  }
  return (
    <>
      {!hideNavbar && (
        <header
          className={`${style.headerContainer} ${navbar ? style.activeNav : ""
            } ${homeNavbar ? style.headerContainerHome : ""}`}
        >
          <div className={i18n.language === "ar" ? style.logoDivAr : ""}>
            <Link to="/">
              <LazyLoadImage
                className={style.LogoImage}
                alt="Logo"
                src={
                  navbar
                    ? require("../../assets/images/Common/whiteLogo.png")
                    : require("../../assets/images/Common/Logo.png")
                }
              />
            </Link>
          </div>
          <nav className={style.navigationBarContainer}>
            <ul className={style.navigationBarUnorderedList}>
              <Link to={`/`}>
                <li className={pathName === "/" ? style.activePath : ""}>
                  {t("Home")}{" "}
                </li>
              </Link>
              <Link to="/about">
                <li className={pathName === "/about" ? style.activePath : ""}>
                  About{" "}
                </li>
              </Link>
              <Link to="/category">
                <li
                  className={pathName === "/category" ? style.activePath : ""}
                >
                  Categories{" "}
                </li>
              </Link>
              <li>
                <MenuDropDown
                  dropDownInfo="Services"
                  handleCloseModal={handleCloseModal}
                  menuElements={[
                    { path: "jobs", title: "Jobs" },
                    { path: "housing", title: "Housing" },
                    { path: "masjid", title: "Masjids" },
                    { path: "business", title: "business" },
                  ]}
                />
              </li>
              <Link to="/contact">
                <li className={pathName === "/contact" ? style.activePath : ""}>
                  Contact{" "}
                </li>
              </Link>
              <Link to="/blog">
                <li className={pathName === "/blog" ? style.activePath : ""}>
                  Blog{" "}
                </li>
              </Link>

            </ul>
          </nav>
          <div className={style.rightSubContainer}>
            <div className={style.navBarSearchMainDiv}>
              <NavSearch />
            </div>
            <div>
              <button
                className={style.statesBtn}
                onClick={() => {
                  setStatesDropDown(!statesDropDown);
                }}
              >
                <i className={`fas fa-th ${style.stateIcon}`}></i>
              </button>

              {statesDropDown && (
                <div className={`row ${style.statesDropDownDiv}`}>
                  {statesData?.map((item, index) => (
                    <Link
                      key={index}
                      className={`col-4 ${style.statesImg}`}
                      to={`/${item?.slug}`}
                    >
                      {" "}
                      <div className={`${style.imageContainerSpan}`}>
                        <LazyLoadImage src={item.image} height={50} width={50} alt={`${item.title}`} />{" "}
                        <span style={{ fontSize: "11px", fontWeight: "bold", marginTop: '10px' }} >{item.title}</span >
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              {initialState && initialState.username === "Guest" ? (
                <Link to="/login">
                  <Button
                    handleCloseModal={handleCloseModal}
                    btnInfo={
                      <div className={btnStyle.iconUserDiv}>
                        <i className={`far fa-user  ${style.userIcon}`}></i>
                        Login
                      </div>
                    }
                  />
                </Link>
              ) : (
                <MenuDropDown
                  dropDownInfo={
                    <div className={btnStyle.userloggedinBtn}>
                      <i className={`far fa-user  ${style.userIcon}`}></i>
                      {initialState.username}
                    </div>
                  }
                  handleCloseModal={handleCloseModal}
                  menuElements={[
                    {
                      path: "/Profile",

                      title: (
                        <div>
                          <i className="fas fa-user-circle">Profile</i>{" "}
                        </div>
                      ),
                    },
                    {
                      path: "/",
                      title: (
                        <div onClick={logout}>
                          <i className="fas fa-sign-out-alt"> Logout </i>{" "}
                        </div>
                      ),
                    },
                  ]}
                />
              )}
            </div>

          </div>
          <div
            className={
              i18n.language === "en"
                ? style.searchMenuDivMobile
                : style.searchMenuDivMobileAr
            }
          >
            <div
              className={`${style.navBarSearchMainDiv} ${style.navMobileMargin}`}
            >
              <NavSearch />
            </div>

            <div className={`${style.burgerMenu}`} onClick={handleShowNavbar}>
              <i className={`fas fa-bars`}></i>
            </div>
          </div>
          {showNavbar && (
            <div className={style.showNavBarMainContainerMobile}>
              <div
                className={`${showNavbar ? style.showNavigationBarMobile : ""}`}
              >
                <div className={style.showNavBarMainMobile}>
                  <nav className={style.navigationBarContainerMobile}>
                    <ul className={style.navigationBarUnorderedList}>
                      <Link to="/" onClick={handleCloseModal}>
                        <li>Home </li>
                      </Link>
                      <Link to="/About" onClick={handleCloseModal}>
                        <li>About </li>
                      </Link>
                      <Link to="/Category" onClick={handleCloseModal}>
                        <li>Categories </li>
                      </Link>
                      <li>
                        <MenuDropDown
                          dropDownInfo="Services"
                          handleCloseModal={handleCloseModal}
                          // onClick={handleCloseModal}
                          menuElements={[
                            { path: "/Jobs", title: "Jobs" },
                            { path: "/Housing", title: "Housing" },
                            { path: "/Masjid", title: "Masjids" },
                            { path: "/business", title: "business" },
                          ]}
                        />
                      </li>
                      <Link to="/Contact" onClick={handleCloseModal}>
                        <li>Contact </li>
                      </Link>
                      <Link to="/Blog" onClick={handleCloseModal}>
                        <li>Blog </li>
                      </Link>

                    </ul>
                  </nav>
                  <div className={style.rightSubContainerMobile}>
                    <div>
                      {initialState && initialState.username === "Guest" ? (
                        <Link to="/login">
                          <Button
                            handleCloseModal={handleCloseModal}
                            btnInfo={
                              <div className={btnStyle.iconUserDiv}>
                                <i
                                  className={`far fa-user  ${style.userIcon}`}
                                ></i>
                                Login
                              </div>
                            }
                          />
                        </Link>
                      ) : (
                        <MenuDropDown
                          handleCloseModal={handleCloseModal}

                          dropDownInfo={
                            <div className={btnStyle.userloggedinBtn}>
                              <i
                                className={`far fa-user  ${style.userIcon}`}
                              ></i>
                              {initialState.username}
                            </div>
                          }
                          menuElements={[
                            {
                              path: "/Profile",
                              title: (
                                <div>
                                  <i className="fas fa-user-circle">Profile</i>{" "}
                                </div>
                              ),
                            },
                            {
                              path: "/",
                              title: (
                                <div onClick={logout}>
                                  <i className="fas fa-sign-out-alt">
                                    {" "}
                                    Logout{" "}
                                  </i>{" "}
                                </div>
                              ),
                            },
                          ]}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      )}
      <Outlet />

    </>
  );
}

export default NavBar;
