import style from "../../../assets/style/common/findMasjid/masjidSearch.module.css";

function MasjidSearch({ keyword, setKeyword, masjidUrl , pathName ,  homeKeyword,
  setHomeKeyword,
  masjidKeyword ,
  setMasjidKeyword}) {

  const handleEvent=(event)=>{
  if (pathName === '/Masjid'){
    setMasjidKeyword(event.target.value)
  }
  else {
    setHomeKeyword(event.target.value)
  }
}
  return (
    <div className={ style.masjidSearchDiv}>
      <input placeholder="Search Masjid by zip-code/Name" type="search" value={keyword} onChange={handleEvent}/>
    </div>
  );
}
export default MasjidSearch;
