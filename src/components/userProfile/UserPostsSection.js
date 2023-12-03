import JobCard from '../job/JobCard';
import HousingCard from '../housing/HouseCard';
import style from '../../assets/style/userProfile/userProfile.module.scss'

function UserPostsSection({savedData, type, baseUrl}) {
  return (
    <>
    {type === 'house' && (
       <div className={`row `}>
       {savedData?.map((item, index)=>
             <HousingCard key={index} houseData = {item} isMyPost = {true} baseUrl={baseUrl} />
       )}
   </div>
    )}
    {type === 'job' && ( 
       <div className={`row mb-3 ${style.savedJobRow}`}>
       {savedData?.map((item, index)=>
             <JobCard key={index} jobData = {item} isMyPost = {true} baseUrl={baseUrl} />
       )}
   </div>
    )}
    </>
  )
}

export default UserPostsSection