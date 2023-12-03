import Hero from "../components/home/Hero/Hero";
import AboutUs from "../components/home/AboutUs";
import TryApp from "../components/home/TryApp";
import MainCategory from "../components/home/MainCategory/MainCategory";
import useAxios from "../hooks/useAxios";
import Blog from "../components/home/Blog";
import AdvertisementBanner from "../components/common/AdvertisementBanner";
import FindMasjidSection from "../components/common/findMasjidSection/FindMasjidSection";

function Gerogia({}) {
  const url = "home";
  const [Data] = useAxios(url);
  const HomeData = Data?.data;
  const AdvertisementsData = HomeData?.advertisements;

  return (
    <div className="main">
      <Hero />
      <AboutUs HomeData={HomeData} />
      <AdvertisementBanner Data={AdvertisementsData} />
      <MainCategory HomeData={HomeData} />
      <FindMasjidSection  />
      <Blog HomeData={HomeData}  />
      <TryApp />
    </div>
  );
}

export default Gerogia;
