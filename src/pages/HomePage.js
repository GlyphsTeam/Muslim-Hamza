import Hero from "../components/home/Hero/Hero";
import AboutUs from "../components/home/AboutUs";
import TryApp from "../components/home/TryApp";
import MainCategory from "../components/home/MainCategory/MainCategory";
import useAxios from "../hooks/useAxios";
import Blog from "../components/home/Blog";
// import AdvertisementBanner from "../components/common/AdvertisementBanner";
import FindMasjidSection from "../components/common/findMasjidSection/FindMasjidSection";
import NavBar from "../components/layout/NavBar";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setDateHome } from '../redux/Home';
function HomePage({ stateName }) {
  const url = "home";
  const dispatch = useDispatch();
  const [showHome, setShowHome] = useState(false);
  const [Data] = useAxios(url);
  const url2 = `masjid/azan`;
  // const url = `masjid/azan`;
  const [Data2] = useAxios(url2);
  const findMasjidData = Data2?.data;
  dispatch(setDateHome(Data?.data));
  // const AdvertisementsData = HomeData?.advertisements;
  const location = useLocation();
  let pathName = location.pathname;
  useEffect(() => {
    if (
      pathName === '/' ||
      pathName === "/arab-georgia" ||
      pathName === "/new-jersey" ||
      pathName === "/new-york" ||
      pathName === "/arabchicago" ||
      pathName === "/texas" ||
      pathName === "/arab-florida" ||
      pathName === "/arab-california" ||
      pathName === '/arab-detroit'
    ) {
      setShowHome(true);
    }
    else {
      setShowHome(false);
    }
  }, [pathName])
  return (
    <div className="main">
      <NavBar stateName={stateName} />

      {showHome && <><Hero stateName={stateName} />
        <AboutUs/>
        {/* <AdvertisementBanner Data={AdvertisementsData} /> */}
        <MainCategory urlApi='main-market' navUrl="/Shop"/>
        <FindMasjidSection dataMasjid={findMasjidData} />
        <MainCategory urlApi='main-categories' navUrl="/businessPage"/>
        <Blog/>
        <TryApp />
      </>}
    </div>
  );
}

export default HomePage;
