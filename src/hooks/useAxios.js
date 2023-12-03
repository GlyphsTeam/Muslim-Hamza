import { useState, useEffect } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'
import { setLoading } from '../redux/CategoryRedux'
function useAxios(url) {
  const [Data, setData] = useState([]);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const token = localStorage.getItem("muslim_comunity_token");

  const baseUrl = token ? `https://${process.env.REACT_APP_domain}/en/${process.env.REACT_APP_CityID}` : `https://${process.env.REACT_APP_domain}/en/${process.env.REACT_APP_CityID}`;

  useEffect(() => {
    dispatch(setLoading(true))
    try {
      axios
        .get(`${baseUrl}/${url}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
          setData(response.data)
          dispatch(setLoading(false))
        })
    }
    catch (error) {
      console.log(error);
    }
  }, [url]);

  return [Data, setData];
}


export default useAxios;
