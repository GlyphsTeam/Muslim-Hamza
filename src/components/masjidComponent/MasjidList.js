import style from '../../assets/style/findMasjid/masjidList.module.css';
import ReactHtmlParser from 'html-react-parser';
import { LazyLoadImage } from "react-lazy-load-image-component";

function masjidList({findMasjidData}) {
    const masjids = findMasjidData;
  return (
    <div className={style.newsMainDiv}>
    <div className={style.newsTitleDiv}>
      <h3>Masjids List</h3>
    </div>
       {
        masjids?.map((item, index) =>(
        <div className={style.newsMainCards} key={index}>
          <div className={style.newsImage}>
            <LazyLoadImage src={item?.image} alt='imageNew'/>
          </div>
          <div className={style.newsCardsTitle}>
            <p>{item?.name} </p>
            <p className={style.newsCardsDescription}>{ReactHtmlParser(`${item?.web_description}`)}</p>
           
          </div>
        </div> 
       ))}
 
  </div>
  )
}

export default masjidList

