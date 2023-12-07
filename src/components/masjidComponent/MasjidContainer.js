import MasjidImage from './MasjidImage';
import FindMasjidSection from '../../components/common/findMasjidSection/FindMasjidSection'
import MasjidList from './MasjidList';
import useAxios from '../../hooks/useAxios';
import { setMasideList } from '../../redux/Masjid';
import { useDispatch } from 'react-redux';
function MasjidContainer({ findMasjidData, masjidKeyword, setMasjidKeyword }) {
  let url = 'masjid'
  const [Data] = useAxios(url);
  const dispatch = useDispatch();
  dispatch(setMasideList(Data?.data));
  return (
    <div>
      <MasjidImage findMasjidData={findMasjidData} />
      <FindMasjidSection masjidKeyword={masjidKeyword} setMasjidKeyword={setMasjidKeyword} dataMasjid={findMasjidData} />
      <MasjidList  />
    </div>
  )
}

export default MasjidContainer

