import MasjidImage from './MasjidImage';
import FindMasjidSection from '../../components/common/findMasjidSection/FindMasjidSection'
import MasjidList from './MasjidList';
import useAxios from '../../hooks/useAxios';
function MasjidContainer({findMasjidData  , masjidKeyword , setMasjidKeyword }) {
  let url='masjid'
    const [Data] = useAxios(url);
    const listMas= Data?.data;
  return (
    <div>
        <MasjidImage findMasjidData={findMasjidData} />
        <FindMasjidSection masjidKeyword={masjidKeyword} setMasjidKeyword={setMasjidKeyword} dataMasjid={findMasjidData}/>
        <MasjidList findMasjidData={listMas}/>
    </div>
  )
}

export default MasjidContainer

