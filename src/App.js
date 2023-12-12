import React, { useEffect, useState } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import NavBar from "./components/layout/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/layout/Footer";
import Page404 from "./pages/Page404";
import UserProfilePage from "./pages/UserProfilePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutUsPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import JobPage from "./pages/JobPage";
import MasjidPage from "./pages/MasjidPage";
import HousingPage from "./pages/HousingPage";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";
import ShopPage from "./pages/ShopPage";
import ShowBlogPage from "./pages/ShowBlogPage";
import ShowHousingPage from "./pages/ShowHousingPage";
import ShowJobPage from "./pages/ShowJobPage";
import PostJobPage from "./pages/PostJobPage";
import PostRentPage from "./pages/PostHousingPage";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import Terms_conditions from "./components/legal/Terms_conditions";
import ShopProfilePage from "./pages/ShopProfilePage";
import SearchResultPage from "./pages/SearchResultPage";
import SavedJobPage from "./pages/SavedJobPage";
import SavedStorePage from "./pages/SavedStorePage";
import SavedAccomodationPage from "./pages/SavedAccomodationPage";
import MyJobPage from "./pages/MyJobPage";
import MyHousingPage from "./pages/MyHousingPage";
import DeleteAccountPage from "./pages/DeleteAccountPage";
import OneSignal from 'react-onesignal';
import EulaPage from "./pages/EulaPage";
import { stateCategory } from './redux/CategoryRedux'
import { useSelector } from 'react-redux'
import SpinnerStatic from './components/SpinnerLoading/Spinner'
import Cardshop from './components/CardShop/Cardshop';
import CardBussiness from './components/CardShop/CardBussines';
import Business from './pages/Business'
import BusinessPage from "./pages/BusinessPage";
import ShowProduct from './pages/ProductShowPage'
import PostProductForm from "./pages/PostProductForm";
import SavedMarket from './pages/SaveMarketPlace'
function App() {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);

  const [deviceInfo, setDeviceInfo] = useState({
    userAgent: window.navigator.userAgent,
    platform: window.navigator.platform,
    isMobile: /Mobi/.test(window.navigator.userAgent),
  });
  useEffect(() => {
    const askLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        const apiKey = 'AIzaSyAFcYTtrbdIGq-5xgB6TzyWtu0Wt7B9lJU';
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}&language=en`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();

          // Check the language of the address components
          const lang = data.results[0].address_components[0]?.short_name;
          const cityComponent = lang === 'ar' ? 'locality' : 'administrative_area_level_1';

          const cityName = data.results[0].address_components.find(
            (component) => component.types.includes(cityComponent)
          ).long_name;

          setCity(cityName);
        } catch (error) {
          console.error('error getting city>>>', error);
        }
      } catch (error) {
        console.error('error getting location>>>', error);

        if (error.code === 1) {
          if (window.confirm('This application requires your location. Do you want to enable geolocation?')) {
            askLocation();
          }
        }
      }
    };

    askLocation();
  }, []);



  console.log("location>>>", location, "deviceInfo>>", deviceInfo, "city>>", city)
  const stateMus = useSelector(stateCategory);
  // const dispatch = useDispatch();

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONE_SIGNAL_KEY,
    });
  }, []);

  const { t, i18n } = useTranslation();
  // useEffect(() => {

  //   dispatch(setLoading(true));
  //   setTimeout(() => {
  //     dispatch(setLoading(false));
  //     window.scrollTo(0, 0);
  //   }, 1000);

  // }, []);
  const autherized = localStorage.getItem("muslim_comunity_token");

  const baseUrl = autherized
    ? `https://${process.env.REACT_APP_domain}/${t("lang")}/${process.env.REACT_APP_CityID}`
    : `https://${process.env.REACT_APP_domain}/${t("lang")}/${process.env.REACT_APP_CityID}`;

  return (
    <>
      <Router>
        {stateMus?.category?.isLoading ? (
          <>
            <SpinnerStatic />
          </>
        ) : <></>}
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/Profile" element={<UserProfilePage baseUrl={baseUrl} />} />
            <Route path="/saved-job" element={<SavedJobPage baseUrl={baseUrl} />} />
            <Route path="/saved-store" element={<SavedStorePage baseUrl={baseUrl} />} />
            <Route path="/saved-marketPlace" element={<SavedMarket/>} baseUrl={baseUrl}/>
            <Route path="/saved-accomodation" element={<SavedAccomodationPage baseUrl={baseUrl} />} />
            <Route path="/my-job" element={<MyJobPage baseUrl={baseUrl} />} />
            <Route path="/my-housing" element={<MyHousingPage baseUrl={baseUrl} />} />
            <Route path="/change-password" element={<ChangePasswordPage baseUrl={baseUrl} />} />
            <Route path="/delete-account" element={<DeleteAccountPage baseUrl={baseUrl} />} />
          </Route>

          <Route path="/" element={<HomePage baseUrl={baseUrl} />} />
          <Route path="/Login" element={<LoginPage baseUrl={baseUrl} />} />
          <Route
            path="/Register"
            element={<RegisterPage baseUrl={baseUrl} />}
          />
          <Route path="/post-product" element={<PostProductForm />} />
          <Route path="/About" element={<AboutUsPage baseUrl={baseUrl} />} />
          <Route
            path="/Contact"
            element={<ContactUsPage baseUrl={baseUrl} />}
          />

          <Route path="/Jobs" element={<JobPage baseUrl={baseUrl} />} />
          <Route path="/Masjid" element={<MasjidPage baseUrl={baseUrl} />} />
          <Route path="/Housing" element={<HousingPage baseUrl={baseUrl} />} />
          <Route path="/Blog" element={<BlogPage baseUrl={baseUrl} />} />
          <Route path="/business" element={<Business />} />
          <Route
            path="/Category"
            element={<CategoryPage baseUrl={baseUrl} />}
          />
          <Route
            path="/Shop"
            element={<ShopPage baseUrl={baseUrl} />}
          />
          <Route
            path="/businessPage/:id"
            element={<BusinessPage />}
          />
          <Route
            path="/Show-Blog/:id"
            element={<ShowBlogPage baseUrl={baseUrl} />}
          />
          <Route
            path="/Show-Housing/:id"
            element={<ShowHousingPage baseUrl={baseUrl} />}
          />
          <Route
            path="/Show-Job/:id"
            element={<ShowJobPage baseUrl={baseUrl} />}
          />
          <Route
            path="/Post-Housing"
            element={<PostRentPage baseUrl={baseUrl} />}
          />
          <Route
            path="/Post-Job"
            element={<PostJobPage baseUrl={baseUrl} />}
          />
          <Route
            path="/Shop-Profile/:id/:id2"
            element={<ShopProfilePage baseUrl={baseUrl} />}
          />
          <Route path="/stores/:id/:id2" element={<Cardshop />} />
          <Route path="/show-bussines/:id/:id2" element={<CardBussiness />} />
          <Route exact path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route exact path="/Terms-conditions" element={<Terms_conditions />} />
          <Route exact path='/eula' element={<EulaPage />} />
          <Route exact path="*" element={<Page404 />} />
          <Route exact path="/search-result/:keyword/:type?" element={<SearchResultPage />} />
          <Route path="/Show-product/:slug/:id" element={<ShowProduct />} />
        </Routes>

        <Footer />
      </Router>
    </>

  );
}

export default App;