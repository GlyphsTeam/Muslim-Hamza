import { useState, useEffect } from "react";
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/CategoryRedux';

function useAxios(url) {
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const [Data, setData] = useState([]);
  const token = localStorage.getItem('muslim_comunity_token');
  const cityId = localStorage.getItem("cityId");
  let cityIdUrl = '/0';
  useEffect(() => {
    if(cityId){
      cityIdUrl = `/${cityId}`;
    }else{
      cityIdUrl = '/0';
    }
    }, [cityId]);
  const baseURL = token
  ? `https://${process.env.REACT_APP_domain}/en/${process.env.REACT_APP_CityID}`
  : `https://${process.env.REACT_APP_domain}/en/${process.env.REACT_APP_CityID}`;
  useEffect(() => {
    dispatch(setLoading(true));
     try { 
        axios
        .get(`${baseURL}/${url}`, { headers: {"Authorization" : `Bearer ${token}`}
         
      })
        .then((response) => {
          setData(response.data)
          dispatch(setLoading(false));
        })
      } 
      catch (error) {
        console.log(error);
      }
    }, [url, i18n.language]);
  
    return [Data , setData];
}
  

export default useAxios;
