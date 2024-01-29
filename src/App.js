import React, { lazy, useEffect, useState, Suspense } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import OneSignal from 'react-onesignal';
import EulaPage from "./pages/EulaPage";
import { stateCategory } from './redux/CategoryRedux'
import { useSelector } from 'react-redux'

const HomePage = lazy(() => import("./pages/HomePage"));
const Page404 = lazy(() => import("./pages/Page404"));
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));
const ChangePasswordPage = lazy(() => import("./pages/ChangePasswordPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const AboutUsPage = lazy(() => import("./pages/AboutPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const JobPage = lazy(() => import("./pages/JobPage"));
const MasjidPage = lazy(() => import("./pages/MasjidPage"));
const HousingPage = lazy(() => import("./pages/HousingPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ShowBlogPage = lazy(() => import("./pages/ShowBlogPage"));
const ShowHousingPage = lazy(() => import("./pages/ShowHousingPage"));
const ShowJobPage = lazy(() => import("./pages/ShowJobPage"));
const PostJobPage = lazy(() => import('./pages/PostJobPage'));
const PostRentPage = lazy(() => import("./pages/PostHousingPage"));
const Terms_conditions = lazy(() => import("./components/legal/Terms_conditions"));
const PrivacyPolicy = lazy(() => import('./components/legal/PrivacyPolicy'));
const ShopProfilePage = lazy(() => import("./pages/ShopProfilePage"));
const SearchResultPage = lazy(() => import("./pages/SearchResultPage"));
const SavedJobPage = lazy(() => import('./pages/SavedJobPage'));
const SavedStorePage = lazy(() => import("./pages/SavedStorePage"));
const SavedAccomodationPage = lazy(() => import("./pages/SavedAccomodationPage"));
const MyJobPage = lazy(() => import("./pages/MyJobPage"));
const MyHousingPage = lazy(() => import("./pages/MyHousingPage"));
const DeleteAccountPage = lazy(() => import("./pages/DeleteAccountPage"));
const SpinnerStatic = lazy(() => import("./components/SpinnerLoading/Spinner"));
const Cardshop = lazy(() => import("./components/CardShop/Cardshop"));
const CardBussiness = lazy(() => import("./components/CardShop/CardBussines"));
const Business = lazy(() => import("./pages/Business"));
const BusinessPage = lazy(() => import("./pages/BusinessPage"));
const ShowProduct = lazy(() => import("./pages/ProductShowPage"));
const PostProductForm = lazy(() => import("./pages/PostProductForm"));
const SavedMarket = lazy(() => import("./pages/SaveMarketPlace"));
const MyMarketPlace = lazy(() => import("./pages/MyMarketPage"));

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
        <Suspense fallback={<SpinnerStatic />}>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/Profile" element={<UserProfilePage baseUrl={baseUrl} />} />
              <Route path="/saved-job" element={<SavedJobPage baseUrl={baseUrl} />} />
              <Route path="/saved-store" element={<SavedStorePage baseUrl={baseUrl} />} />
              <Route path="/saved-marketPlace" element={<SavedMarket />} baseUrl={baseUrl} />
              <Route path="/saved-accomodation" element={<SavedAccomodationPage baseUrl={baseUrl} />} />
              <Route path="/my-job" element={<MyJobPage baseUrl={baseUrl} />} />
              <Route path="/my-housing" element={<MyHousingPage baseUrl={baseUrl} />} />
              <Route path="/change-password" element={<ChangePasswordPage baseUrl={baseUrl} />} />
              <Route path="/delete-account" element={<DeleteAccountPage baseUrl={baseUrl} />} />
              <Route path="/my-market" element={<MyMarketPlace baseUrl={baseUrl} />} />
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
        </Suspense>
        <Footer />
      </Router>
    </>

  );
}

export default App;