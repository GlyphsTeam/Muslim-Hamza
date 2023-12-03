import React, { useState } from 'react';
import style from '../../assets/style/userProfile/userProfile.module.scss'
import '../../assets/style/userProfile/userProfile.css'
import Accordion from 'react-bootstrap/Accordion';
import { Link , useNavigate} from 'react-router-dom';

function UserProfileMenu({activeList}) {

  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  
  return (
    <>
      <div className={style.userFilter}>
        <button
            onClick={() => setMobile(!mobile)}
            className={`col-lg-1 col-md-1 col-sm-1 ${style.filterShow}`}
          >
            {" "}
            <i className="fas fa-filter"></i>
          </button>
      </div>

{mobile && (
    <div className={`${style.menu}`}>
        <h2 className={style.menuTitle}>Account Settings</h2>

        <Accordion defaultActiveKey={activeList}>
      <Accordion.Item eventKey="0">
        <Accordion.Header><p className={style.accordionTitle}>Profile</p></Accordion.Header>
        <Accordion.Body>
        <Link to='/Profile' className={style.menuBody}>Edit</Link>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><p className={style.accordionTitle}>Saved Page</p></Accordion.Header>
        <Accordion.Body>
           <ul className={style.menuList}>
            <li><Link to='/saved-store'>Stores</Link></li>
            <li><Link to='/saved-accomodation'>Accomodations</Link></li>
            <li><Link to='/saved-job'>Jobs</Link></li>
           </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><p className={style.accordionTitle}>My Post</p></Accordion.Header>
        <Accordion.Body>
           <ul className={style.menuList}>
            <li><Link to='/my-housing'>Accomodations</Link></li>
            <li><Link to='/my-job'>Jobs</Link></li>
           </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><p className={style.accordionTitle}>Settings</p></Accordion.Header>
        <Accordion.Body>
           <ul className={style.menuList}>
            <li><Link to='/change-password'>Change password</Link></li>
            <li><Link to='/delete-account' className={style.menuDeleteAccount}>Delete account</Link></li>
            <li className={style.menuSignOut} onClick={handleLogOut}>Sign out </li>
           </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
    
)}

<div className={`${style.menu} ${style.menuWeb}`}>
        <h2 className={style.menuTitle}>Account Settings</h2>

        <Accordion defaultActiveKey={activeList}>
      <Accordion.Item eventKey="0">
        <Accordion.Header><p className={style.accordionTitle}>Profile</p></Accordion.Header>
        <Accordion.Body>
        {/* <p className={style.menuBody}>Setting</p> */}
        <Link to='/Profile' className={style.menuBody}>Edit</Link>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><p className={style.accordionTitle}>Saved Page</p></Accordion.Header>
        <Accordion.Body>
           <ul className={style.menuList}>
           <li><Link to='/saved-store'>Stores</Link></li>
            <li><Link to='/saved-accomodation'>Accomodations</Link></li>
            <li><Link to='/saved-job'>Jobs</Link></li>
           </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><p className={style.accordionTitle}>My Post</p></Accordion.Header>
        <Accordion.Body>
           <ul className={style.menuList}>
            <li><Link to='/my-housing'>Accomodations</Link></li>
            <li><Link to='/my-job'>Jobs</Link></li>
           </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><p className={style.accordionTitle}>Settings</p></Accordion.Header>
        <Accordion.Body>
           <ul className={style.menuList}>
            <li><Link to='/change-password'>Change password</Link></li>
            <li><Link to='/delete-account' className={style.menuDeleteAccount}>Delete account</Link></li>
            <li className={style.menuSignOut} onClick={handleLogOut}>Sign out </li>
           </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
    </>

  )
}

export default UserProfileMenu