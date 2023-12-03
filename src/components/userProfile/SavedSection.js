import JobCard from '../job/JobCard';
import StoreCard from '../category/ShopCard';
import HousingCard from '../housing/HouseCard';
import style from '../../assets/style/userProfile/userProfile.module.scss'

function SavedSection({savedData, type}) {
  return (
    <>
    {type === 'store' && (
        <div className={`row `}>

       {
        savedData?.map((item, index)=>
              <StoreCard key={index} isFavorite = {item.favorites} categoryData = {item} />
       )}
    </div>
    )}
    {type === 'house' && (
       <div className={`row `}>
       {savedData?.map((item, index)=>
             <HousingCard key={index} houseData = {item} />
       )}
   </div>
    )}
    {type === 'job' && (
       <div className={`row mb-3 ${style.savedJobRow}`}>
       {savedData?.map((item, index)=>
             <JobCard key={index} jobData = {item} />
       )}
   </div>
    )}
    
    </>
  )
}

export default SavedSection