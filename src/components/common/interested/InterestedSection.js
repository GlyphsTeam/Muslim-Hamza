import style from '../../../assets/style/common/interested.module.scss'
import InterestedCard from './InterestedCard'

function InterestedSection({type, data}) {

  return (
    <>
    <div className={style.interestedMainDiv}>
    <div className={`container ${style.interestedContainer}`}>
      <h3 className={style.interestedH3}>You may also be interested in</h3>
      <div className='row'>
        {data?.map((item, index)=>
          <InterestedCard key={index} cardData = {item} type={type}  />
        )
        }
     
      </div>
    </div>
    </div>
    </>
  )
}

export default InterestedSection