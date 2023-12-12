import JobCard from '../job/JobCard';
import StoreCard from '../category/ShowProfileSaved';
import HousingCard from '../housing/HouseCard';
import style from '../../assets/style/userProfile/userProfile.module.scss'
import MarketCard from '../MarketPlaceCard';
import { businessReduxState } from '../../redux/Bussiness'
import { useSelector } from 'react-redux';
function SavedSection({ type }) {
      const saveState = useSelector(businessReduxState);
      console.log("saveDA>>>", saveState)
      return (
            <>
                  {type === 'store' && (
                        <div className={`row `}>

                              {
                                    saveState.bussinessSaved?.map((item, index) =>
                                          <StoreCard key={index} isFavorite={item.favorites} categoryData={item} />
                                    )}
                        </div>
                  )}
                  {type === 'house' && (
                        <div className={`row `}>
                              {saveState.bussinessSaved?.map((item, index) =>
                                    <HousingCard key={index} houseData={item} />
                              )}
                        </div>
                  )}
                  {type === 'job' && (
                        <div className={`row mb-3 ${style.savedJobRow}`}>
                              {saveState.bussinessSaved?.map((item, index) =>
                                    <JobCard key={index} jobData={item} />
                              )}
                        </div>
                  )}
                  {type === 'market' && (
                        <div className={`row mb-3 ${style.savedJobRow}`}>
                              {saveState.bussinessSaved?.map((item, index) =>
                                    <MarketCard key={index} data={item} />
                              )}
                        </div>
                  )}

            </>
      )
}

export default SavedSection