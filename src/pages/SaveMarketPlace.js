import Menu from '../components/common/UserProfileMenu';
import SavedSection from '../components/userProfile/SavedSection';
import useAxios from "../hooks/useAxios";
import style from '../assets/style/userProfile/userProfile.module.scss'
import { useDispatch } from 'react-redux';
import { setBussinessSaved } from '../redux/Bussiness'
function SavedStorePage() {
  const url = `profile/save`;
  const [Data] = useAxios(url);
  const savedData = Data?.data?.market;
  const dispatch = useDispatch();
  dispatch(setBussinessSaved(savedData));
  return (
    <div className={`row w-100 m-0 ${style.userPage}`}>

      <div className='col-lg-3 col-md-4 col-sm-12 px-0'>
        <Menu activeList='1' />
      </div>

      <div className='col-lg-9 col-md-8 col-sm-12'>
        <SavedSection  type='market' />
      </div>

    </div>
  )
}

export default SavedStorePage