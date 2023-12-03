import style from '../../../assets/style/common/interested.module.scss'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";


function InterestedCard({cardData, type}) {

  let path;
  if(type === 'rent'){
    path = `/Show-Housing/${cardData.id}`

  }else if(type === 'job'){
    path = `/Show-Job/${cardData.id}`

  }else if(type === 'blog'){
    path = `/Show-Blog/${cardData.id}`

  }else if(type === 'store'){
    path = `/Shop-Profile/${cardData.id}`
  }

  return (
    <Link to={path} className={`col-lg-2 col-md-4 col-sm-6 ${style.interestedCard}`}>
    <LazyLoadImage className={style.interestedImg} src={cardData?.image} alt='interstedImage'/>
    <p className={style.interestedTitle}>{cardData?.title}</p>
    <p className={style.interestedDescription}>{cardData?.description}</p>
  </Link>
  )
}

export default InterestedCard