import React, {useState} from 'react';
import style from '../../assets/style/job/jobCard.module.scss'
import useFetch from "../../hooks/useFetchPost";
import Alert from "../alert/Alert";
import { Link } from 'react-router-dom';
import Share from '../../utils/Share';
import { LazyLoadImage } from "react-lazy-load-image-component";

function JobCard({jobData, isMyPost, baseUrl}) {
    const [send, setSend] = useState(false);
    const [count, setCount] = useState(4);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [isFav, setIsFav] = useState(jobData?.saved);
    const token = localStorage.getItem("muslim_comunity_token")
    const [showShareModal, setShowShareModal] = useState(false);

    let formData = new FormData();
    formData.append('id', jobData.id);

    const [Res] = useFetch('favorite/job', formData, send);

    let favoriteIcon = isFav ? 'fas fa-star' : 'far fa-star';

    const handleClick = () => {
      setShowShareModal(true);
    };
  

      const addToFavorite = () => {
        if(token){
        setIsFav(!isFav);
        setSend(true);
        setTimeout(() => {
            setSend(false);
          }, 100);
        }else{
            setShowAlert(true);
            setCount(4);
        }
      }


      const deleteJob = (id) => {
        try {
          fetch(`${baseUrl}/user/jobs/delete/${id}`, {
              headers: { 'Authorization': `Bearer ${token}` , 'Accept': 'application/json' },
              method: 'DELETE'
            }).then(() => {
              deleteDiv(id)
            })
        }
        catch (error) {
          console.log(error);
        }
        finally {
          setShowAlertDelete(true);
              setCount(4);
        }
      }
    
      const deleteDiv = (id) => {
        const element = document.getElementById(`${id}`);
        element.parentNode.removeChild(element);
      }



  return (
    <div id={jobData.id} className={`col-lg-4 col-md-6 col-sm-12 ${style.mainJobCard}`}>

        <div className={`${style.mainJobCard}`}>
            <div className={`${style.jobCardBody}`}>
                <div className='row'>
                    <div className='col-3'>
                    <Link to={`/Show-Job/${jobData.id}`} className={`col-8 ${style.houseInfo}`}>
                        <LazyLoadImage className={style.jobImage} src={jobData.user_image} alt='jobImage'/>
                     </Link>
                    </div>

                    <div className='col-6'>
                  
                        <h3 className={style.jobTitle}>{jobData.title} </h3>
                        <p className={style.jobLocation}><i className="fas fa-map-marker-alt"></i> {jobData.title}</p>
                    </div>

                    <div className={`col-3 ${style.actionDiv}`}>
                    {!isMyPost && (
                      <>
                        <i className="fas fa-share-square" onClick={()=> handleClick()}></i>

                        <i className={`${favoriteIcon} ${style.favIconColor}`} onClick={()=> addToFavorite(jobData.id)}></i>
                      </>
                    )}
                    </div>
                </div>
                <Link to={`/Show-Job/${jobData.id}`} className={`col-8 ${style.houseInfo}`}>
                <div className='row'>
                    <div className='col-12'>
                        <p className={style.jobDescription}>{jobData.description}</p>

                        <div className={style.jobCardFooter}>
                            <p className={style.jobType}>{jobData.type}</p>
                            <p className={style.jobCreate}>{jobData.created_at}</p>

                        </div>
                    
                    </div>
                </div>
             </Link>
             {isMyPost && (
                        <div className={style.jobCardFooter}>

                            {jobData.status ?
                            <div className={style.approvalDiv}>
                            <p className={style.waitingApproval}>Waiting for approval</p>
                            <p>  <i onClick={() => deleteJob(jobData.id)} className={`fas fa-trash-alt ${style.deleteIcon}`}></i></p>
                            </div>
                            :
                            <div className={style.approvalDiv}>
                            <p className={style.published}>Published</p>
                            <p>  <i onClick={() => deleteJob(jobData.id)} className={`fas fa-trash-alt ${style.deleteIcon}`}></i></p>
                            </div>
                            }

                        </div>
                        )}
            </div>
        </div>

        {showAlert && (<Alert type='warning' message='Please login first.' showAlert={showAlert} setShowAlert={setShowAlert} count={count} setCount={setCount} />)}
        {showAlertDelete && (<Alert type='success' message='Your post deleted successfully.' showAlert={showAlertDelete} setShowAlert={setShowAlertDelete} count={count} setCount={setCount} />)}
        {showShareModal && <Share url={`/Jobs`}  setShowShareModal={setShowShareModal} />}

    
    </div>
  )
}

export default JobCard