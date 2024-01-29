import { lazy, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDateHome } from '../redux/Home';
const AboutUs = lazy(() => import("../components/home/AboutUs"));
const TryApp = lazy(() => import("../components/home/TryApp"));
const Hero = lazy(() => import("../components/home/Hero/Hero"));
const MainCategory = lazy(() => import("../components/home/MainCategory/MainCategory"));
const Blog = lazy(() => import("../components/home/Blog"));
const FindMasjidSection = lazy(() => import("../components/common/findMasjidSection/FindMasjidSection"))

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

      {showHome && <><Hero stateName={stateName} />
        <AboutUs />
        {/* <AdvertisementBanner Data={AdvertisementsData} /> */}
        <MainCategory urlApi='main-market' navUrl="/Shop" />
        <FindMasjidSection dataMasjid={findMasjidData} />
        <MainCategory urlApi='main-categories' navUrl="/businessPage" />
        <Blog />
        <TryApp />
      </>}
    </div>
  );
}

export default HomePage;
